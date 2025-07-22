["import AddRecipeForm", "import RecipeList"]
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
};
export default App
