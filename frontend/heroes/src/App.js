import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Heroes from './Pages/Heroes'
import Hero from './Pages/Hero'
import {HeroesContextProvider } from './context/Context'
function App() {
  return (
    <HeroesContextProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path="/heroes" element={<Heroes />} > </Route> 
            <Route path="/heroes/:hero"element ={<Hero/>} > </Route>
            <Route path="/powers/:hero" > </Route>
            <Route path="/create" > </Route>
            <Route path="/modify"> </Route>
            {/* <Route path="*" element={<NotFound/>}> </Route>   */}

          </Routes>
        </BrowserRouter>
      </HeroesContextProvider>
  );
}

export default App;
