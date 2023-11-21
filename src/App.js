import './App.css';
import Navigation from './component/Home/Navigation/Navigation'
import Home from './component/Home/Home';
import Cart from './component/cart/cart'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    <Outlet/>
    <div style={{height:'200px'}}></div>

   </>
  );
}

export default App;

// Main objective is implementation not designing
