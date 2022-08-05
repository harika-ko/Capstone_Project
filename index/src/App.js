import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './Components/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageFinal from './Components/Pages/HomePageFinal';
import MealPlanning from './Components/MealPlanning';
import DailyMealPlanFinal from './Components/Pages/DailyMealPlanFinal';
import WhatsInMyFridgeFinal from './Components/Pages/WhatsInMyFridgeFinal';
import SingleRecipeFinal from './Components/Pages/SingleRecipeFinal';
import WeeklyMealPlanFinal from './Components/Pages/WeeklyMealPlanFinal';
import FavoritesPageFinal from './Components/Pages/FavoritesPageFinal';
import WinePairingFinal from './Components/Pages/WinePairingFinal';

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
          <Route path='/whats_in_my_fridge' element={<WhatsInMyFridgeFinal />} />
          <Route path='/favourites' element={<FavoritesPageFinal />} />
          <Route path='/Wine_Pairing' element={<WinePairingFinal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
