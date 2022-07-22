import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './Components/MainPage';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageFinal from './Components/Pages/HomePageFinal';
import SingleRecipe from './Components/SingleRecipe';
import LoginPage from './Components/Pages/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/HomePageFinal' element={<HomePageFinal />}></Route>
          <Route path='/SingleRecipe/:id' element={<SingleRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
