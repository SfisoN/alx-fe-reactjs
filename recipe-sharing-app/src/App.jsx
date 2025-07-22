["import AddRecipeForm", "import RecipeList"]
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';


function App() {
 

  return (
    <Router>
      <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
};
export default App
