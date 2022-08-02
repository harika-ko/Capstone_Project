import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './Components/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageFinal from './Components/Pages/HomePageFinal';
import MealPlanning from './Components/MealPlanning';
import DailyMealPlan from './Components/DailyMealPlan';
import WeeklyMealPlan from './Components/WeeklyMealPlan';
import WhatsInMyFridge from './Components/WhatsInMyFridge';
import SingleRecipeFinal from './Components/Pages/SingleRecipeFinal';
import FavouritesPage from './Components/FavouritesPage';
import WinePairing from './Components/WinePairing';

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
          <Route path='/Wine_Pairing' element={<WinePairing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
