import './App.css';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import {RouterProvider , createBrowserRouter} from 'react-router-dom';
import UserLayout from './UserLayout/UserLayout';

let route = createBrowserRouter([
  {path:'/'  , element:<UserLayout/> ,children : [
    {index : true , element :<Main/> },
    {path : 'ABOUT' , element :<About/> },
    {path : 'PORTFOLIO' , element :<Portfolio /> },
    {path : 'CONTACT' , element : <Contact />},
  ]}
])


function App() {
  return (
    <>
      <RouterProvider router={route}/>
</>
  );
}

export default App;
