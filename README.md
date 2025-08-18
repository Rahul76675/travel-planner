# 🌍 AI Trip Planner

An AI-powered travel planning web app built with **React + Vite + TailwindCSS**, deployed on **Vercel**.  
It uses **Google Generative AI**, **Google Maps APIs**, and Firebase for authentication & storage.

---

## ✨ Features
- 🧠 **AI Travel Assistant** – generates personalized itineraries with Google Generative AI.  
- 📍 **Interactive Maps** – find destinations, hotels, and restaurants using Google Maps API.  
- 🔐 **Authentication** – login with Google via Firebase & React OAuth.  
- 🎨 **Modern UI** – built with TailwindCSS, Radix UI, and Lucide Icons.  
- 📱 **Responsive Design** – optimized for mobile, tablet, and desktop.  

---

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, TailwindCSS, Radix UI  
- **AI API**: @google/generative-ai  
- **Maps & Location**: @react-google-maps/api, react-google-places-autocomplete  
- **Auth & Database**: Firebase, @react-oauth/google  
- **Icons & UI Helpers**: Lucide React, React Icons, Sonner  

---

## 📂 Project Structure
ai-trip-planner/
├── public/ # Static assets
├── src/ # App source code
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── hooks/ # Custom hooks
│ ├── styles/ # Global styles
│ └── main.jsx # App entry point
├── package.json # Dependencies & scripts
├── vercel.json # Vercel build config
└── README.md # Project documentation


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Rahul76675/travel-planner.git
cd travel-planner
2. Install dependencies
npm install

3. Add environment variables

Create a .env file in the root directory:

VITE_GOOGLE_API_KEY=your_google_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_GENAI_API_KEY=your_google_generative_ai_key

Run locally
npm run dev

Visit http://localhost:5173 🌐

5. Build for production
npm run build

Deployment (Vercel)

Project is configured for Vercel deployment with:

vercel.json → sets build command & output directory

Output folder: dist

To deploy manually:

vercel --prod

👨‍💻 Author

Rahul_Mandal
🚀 B.Tech CSE (CSBS) | AI & Web Dev Enthusiast
🔗 GitHub

