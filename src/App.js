import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Header from './golftask/header';
import Slider from './golftask/home';
import Body from './golftask/body';
import Cards from './golftask/cards';
import Menu from './golftask/menu';
import Lesson from './golftask/lessn';
import Tournment from './golftask/event';
import Shop from './golftask/shop';
import Feature from './golftask/feature';
import Posts from './golftask/posts';
import Sticks from './golftask/glfimages';
import Footer from './golftask/footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/main' element={
          <>
          <Header/>
          <Slider/>
          <Body/>
          <Cards/>
          <Menu/>
          <Lesson/>
          <Tournment/>
          <Shop/>
          <Posts/>
          <Sticks/>
          <Footer/>
          </>
        }>
        </Route>
        <Route path='/home' element={<><Header/> <Slider/></>}/>
           <Route path='/shop' element={<><Tournment/><Shop/></>}></Route>
           <Route path='/page' element={<><Body/><Cards/></>}></Route>
           <Route path='/contact' element={<><Sticks/><Footer/></>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
