# WhatsApp Pattern Explorer

## Overview
The **WhatsApp Pattern Explorer** is a web application that allows users to analyze WhatsApp chat exports (in `.txt` format) to identify key patterns, themes, and specific insights. Using the Google Gemini API, the application processes the chat content and provides a detailed analysis, helping users understand their activity, key motivations, and areas for improvement.

The app provides a simple and clean UI where users can upload their WhatsApp chat file, and it returns a structured analysis categorized into **Key Themes**, **Specific Activities**, **Potential Improvements**, and an **Overall Summary**.

## Features
- **Upload WhatsApp Chat**: Upload your WhatsApp chat file in `.txt` format.
- **AI-powered Analysis**: Uses the Google Gemini API to analyze the chat content and return insights.
- **Structured Display**: Insights are categorized for easy reading and understanding.
- **Dark Themed UI**: The UI is designed with a modern dark theme for a pleasant user experience.
- **Responsive**: The app is fully responsive, working well on both desktop and mobile devices.

## Table of Contents
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Installation

Follow these steps to get the project up and running on your local machine.

 Step 1: Clone the Repository
Clone the repository to your local machine using the following command:

git clone <repository-url>
cd pattern

Step 2: Install the dependencies

Install the required dependencies using npm:

npm install

Step 3: Set Up Environment Variables

You need to set up your Gemini API key in the .env.local file. Create this file in the root directory and add the following:

GEMINI_API_KEY=your_api_key_here

Step 4: Run the Development Server

Start the development server by running:

npm run dev

Step 5: Open the Application

Navigate to http://localhost:3000 in your browser to start using the WhatsApp Pattern Explorer.

Test the App
Two sample .txt files are provided in the testfiles directory to test the app's functionality.

Technologies Used

Next.js: A React framework for building server-rendered React applications.

Google Gemini API: AI-powered API used for analyzing chat content and generating insights.

Tailwind CSS: A utility-first CSS framework for designing custom, responsive layouts quickly.

Axios: A promise-based HTTP client for making API requests to the Gemini API.


API Integration

The app uses the Google Gemini API to analyze WhatsApp chat content. When a chat file is uploaded, the content is sent to the API, which processes it and returns key insights based on the text.
Route for Analysis:

   The /api/analyze route processes the uploaded chat file, sends the content to the Gemini API, and returns the analysis results.

Example Response:

{
  "keyThemes": [
    {
      "category": "Product Development",
      "analysis": "This is the dominant theme..."
    },
    {
      "category": "Self-Improvement",
      "analysis": "The user seeks ways to improve personal productivity..."
    }
  ],
  "specificActivities": [
    {
      "category": "Research",
      "analysis": "The user is researching various topics..."
    }
  ],
  "overallSummary": "The user demonstrates a high level of focus and proactive engagement..."
}

Environment Variables

   GEMINI_API_KEY: The API key for Google Gemini. You can get this key from the Google Cloud Platform.

Contributing

Feel free to contribute to this project by submitting issues, pull requests, or suggestions.
Steps to Contribute:

   Fork the repository.
    Create a new branch for your feature or bugfix.
    Make the necessary changes.
    Submit a pull request with a clear description of what you've done.
