import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './Components/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageFinal from './Components/Pages/HomePageFinal';
import SingleRecipe from './Components/SingleRecipe';
import MealPlanning from './Components/MealPlanning';
import DailyMealPlan from './Components/DailyMealPlan';
import WeeklyMealPlan from './Components/WeeklyMealPlan';
import WhatsInMyFridge from './Components/WhatsInMyFridge';
import SingleRecipeFinal from './Components/Pages/SingleRecipeFinal';
import FavouritesPage from './Components/FavouritesPage';
import ShopByRecipe from './Components/ShopByRecipe';
import SingleProduct from './Components/SingleProduct';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/HomePageFinal' element={<HomePageFinal />} />
          <Route path='/SingleRecipe/:id' element={<SingleRecipeFinal />} />
          <Route path='/MealPlanning' element={<MealPlanning />} />
          <Route path='/DailyMealPlan' element={<DailyMealPlan />} />
          <Route path='/WeeklyMealPlan' element={<WeeklyMealPlan />} />
          <Route path='/whats_in_my_fridge' element={<WhatsInMyFridge />} />
          <Route path='/favourites' element={<FavouritesPage />} />
          <Route path='/Shop_By_Recipe' element={<ShopByRecipe />} />
          <Route path='/SingleProduct/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
