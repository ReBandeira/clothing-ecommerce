import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/Nav-bar/nav-bar.component';
import Home from "./routes/home/home.page";
import Authentication from './routes/authentication/authentication.component';

const Shop = () => {
  return <h1>Shop Page!</h1>
}

const App = () => {

  
  return (
    <Routes>
      <Route  path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<Authentication/>}/>
      </Route>     
    </Routes>  
  )  
};

export default App;
