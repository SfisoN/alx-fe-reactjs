import WelcomeMessage from "./components/WelcomeMessage"
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import React from "react";
import UserContext from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";

function App() {

  const userData = {
    name: "Jane Doe",
    email: "jane.example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    
    // Using ProfilePage component to display user data
    //
 


  );
}

export default App
