WhatsApp Pattern Explorer
Overview

The WhatsApp Pattern Explorer is a web application that allows users to analyze WhatsApp chat exports (in .txt format) to identify key patterns, themes, and specific insights. Using the Google Gemini API, the application processes the chat content and provides a detailed analysis, helping users understand their activity, key motivations, and areas for improvement.

The app provides a simple and clean UI where users can upload their WhatsApp chat file, and it returns a structured analysis categorized into Key Themes, Specific Activities, Potential Improvements, and an Overall Summary.
Features

    Upload WhatsApp Chat: Upload your WhatsApp chat file in .txt format.
    AI-powered Analysis: Uses the Google Gemini API to analyze the chat content and return insights.
    Structured Display: Insights are categorized for easy reading and understanding.
    Dark Themed UI: The UI is designed with a modern dark theme for a pleasant user experience.
    Responsive: The app is fully responsive, working well on both desktop and mobile devices.

Table of Contents

    Installation
    How to Use
    Testing the App
    Project Structure
    Technologies Used
    API Integration
    Environment Variables
    Contributing

Installation

Follow these steps to get the project up and running on your local machine.
Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

git clone <repository-url>
cd pattern

Step 2: Install the dependencies

Run the following command to install the necessary dependencies:

npm install

Step 3: Set Up Environment Variables

Create a .env.local file in the root of the project and add your Gemini API Key like so:

GEMINI_API_KEY=your_api_key_here

To get your API key, you need to sign up for access to the Google Gemini API.
Step 4: Run the Development Server

Start the development server with the following command:

npm run dev

Step 5: Open the Application

Navigate to http://localhost:3000 in your browser to start using the WhatsApp Pattern Explorer.

