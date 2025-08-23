import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/HomePage'
import Profile from './components/Profile'
import ProfileDetails from './components/ProfileDetails'
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'
import ProfileSettings from './components/ProfileSettings'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };  

  return (
    <Router>
      <nav style={{display: "flex", gap: "10px"}}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/123">Blog Post (Dynamic)</Link>
        
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />}>
            
          </Route>
        </Route>
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App
