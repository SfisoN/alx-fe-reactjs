# Recipe Sharing Platform

This project is a **React** application created with **Vite** and styled using **Tailwind CSS**.  
Follow the steps below to set up and run the project locally.

---

## 🚀 Step 1: Create a New React Project

**React Project Setup:**

```bash
# Create a new React application using Vite
npm create vite@latest recipe-sharing-platform -- --template react

# Navigate into the project folder
cd recipe-sharing-platform
🎨 Step 2: Install and Configure Tailwind CSS
Install Tailwind CSS and dependencies:


npm install -D tailwindcss postcss autoprefixer
Initialize Tailwind CSS:

npx tailwindcss init -p
Update tailwind.config.js:

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {},
  },
  plugins: [],
};
Include Tailwind in your src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
✅ Step 3: Verify Tailwind CSS Integration
Run your React application:

npm run dev
Test Tailwind styles:

Open the browser at the given local development URL.

Apply a Tailwind class to a component (e.g., text-blue-500) and check if it styles correctly.

📂 Project Structure
arduino
Copy
Edit
recipe-sharing-platform/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
🛠 Technologies Used
React (via Vite)

Tailwind CSS

PostCSS

Autoprefixer

