import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './Components/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageFinal from './Components/Pages/HomePageFinal';
import MealPlanning from './Components/MealPlanning';
import DailyMealPlanFinal from './Components/Pages/DailyMealPlanFinal';
import WhatsInMyFridge from './Components/WhatsInMyFridge';
import SingleRecipeFinal from './Components/Pages/SingleRecipeFinal';
import FavouritesPage from './Components/FavouritesPage';
import WinePairing from './Components/WinePairing';
import WeeklyMealPlanFinal from './Components/Pages/WeeklyMealPlanFinal';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/HomePageFinal' element={<HomePageFinal />} />
          <Route path='/SingleRecipe/:id' element={<SingleRecipeFinal />} />
          <Route path='/MealPlanning' element={<MealPlanning />} />
          <Route path='/DailyMealPlan' element={<DailyMealPlanFinal />} />
          <Route path='/WeeklyMealPlan' element={<WeeklyMealPlanFinal />} />
          <Route path='/whats_in_my_fridge' element={<WhatsInMyFridge />} />
          <Route path='/favourites' element={<FavouritesPage />} />
          <Route path='/Wine_Pairing' element={<WinePairing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
