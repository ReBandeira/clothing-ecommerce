import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/Nav-bar/nav-bar.component';
import Home from "./routes/home/home.page";

const App = () => {

  
  return (
    <Routes>
      <Route  path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
      </Route>     
    </Routes>
  
  )  

};

export default App;
