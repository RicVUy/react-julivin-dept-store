
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Switch>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category="men"/>}/>
      <Route path='/womens' element={<ShopCategory category="women"/>}/>
      <Route path='/kids' element={<ShopCategory category="kid"/>}/>
      <Route path='/Product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Switch>
     
     </BrowserRouter>
    </div>
  );
}

export default App;