import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  try {
    // Get the content from the request body
    const { content } = await request.json();

    if (!content || content.trim().length === 0) {
      return new Response(JSON.stringify({ message: 'No content provided' }), {
        status: 400,
      });
    }

    // Initialize the Google Gemini API client
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);  // Ensure GEMINI_API_KEY is set
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create the prompt dynamically based on the chat content
    const prompt = `
      Analyze the following WhatsApp chat and categorize it into key themes, activities, and potential areas for improvement:

      Content: 
      ${content}

      The analysis should include:
      1. Key Themes (e.g., product development, self-improvement, motivation)
      2. Specific Activities and Insights (e.g., learning resources, research topics)
      3. Potential Areas for Improvement (e.g., prioritization, delegation)
      4. An overall summary of the user’s focus and productivity.

      Please provide the analysis in the format of:
      {
        "keyThemes": [{ "category": "theme", "analysis": "detailed analysis" }],
        "specificActivities": [{ "category": "activity", "analysis": "insight" }],
        "potentialImprovements": [{ "category": "improvement", "analysis": "suggestion" }],
        "overallSummary": "summary of the overall focus"
      }
    `;

    // Get the result from the model (Gemini API)
    const result = await model.generateContent(prompt);

    // Log the raw response to check what Gemini is returning
    console.log('Gemini Response:', result.response.text());

    // Extract response text and check if it's a valid JSON string
    let analysis = result.response.text();

    // Remove code block formatting (backticks and code block markers)
    analysis = analysis.replace(/```json|```/g, '').trim(); // Clean up backticks and code block markers

    // Try to parse the response
    let parsedAnalysis;
    try {
      parsedAnalysis = JSON.parse(analysis);
    } catch (parseError) {
      return new Response(
        JSON.stringify({ message: 'Error parsing the analysis response', error: parseError.message }),
        { status: 500 }
      );
    }

    // If the analysis is not available, return a default message
    if (!parsedAnalysis || !parsedAnalysis.keyThemes || parsedAnalysis.keyThemes.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No analysis available.' }),
        { status: 200 }
      );
    }

    // Return the parsed analysis as JSON
    return new Response(
      JSON.stringify({
        analysis: parsedAnalysis,  // Safely parsed analysis
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing the request:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to process the chat content', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
