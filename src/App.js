
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Aside from './components/Aside/Aside';
import StyleSwitcher from './components/StyleSwitcher/StyleSwitcher';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Preloader from './components/Preloader/Preloader';
import Blogs from './components/Blogs/Blogs';
import ProjectDetails from './components/Projects/ProjectDetails/ProjectDetails';

window.addEventListener('load', function(){
  document.querySelector('.preloader').classList.add('opacity-0');
  setTimeout(()=>{
    document.querySelector('.preloader').style.display = 'none';
  },1000)
})


function App() {

  return (
    <Router>
      <Aside></Aside>
      <Preloader></Preloader>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/projects'>
          <Projects></Projects>
        </Route>
        {/* <Route path='/service'>
          <Services></Services>
        </Route> */}
        <Route path='/blog'>
          <Blogs></Blogs>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/project/:id'>
          <ProjectDetails></ProjectDetails>
        </Route>
      </Switch>
      <StyleSwitcher></StyleSwitcher>
    </Router>
  );
}

export default App;


