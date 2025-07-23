["import AddRecipeForm", "import RecipeList"]
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import { RecipeDetail } from './components/RecipeDetail';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
 

  return (
    <Router>
      <SearchBar />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
  );
};
export default App
