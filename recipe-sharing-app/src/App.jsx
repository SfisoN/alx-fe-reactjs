["import AddRecipeForm", "import RecipeList"]
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { RecipeDetail } from './components/RecipeDetail';


function App() {
 

  return (
    <Router>
      <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};
export default App
