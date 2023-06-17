import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "../src/components/login/login.css";
import "./App.css";
import Events from './components/Events/Events';
import Slider from './components/Slider/Slider';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Blog from './components/blog/Blog';
import Header from './components/common/heading/Header';
import Contact from './components/contact/Contact';
import faqs from './components/faqs/faqs';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Proj from './components/projects/Proj';
import Review from './components/review/review';
import Team from './components/team/Team';

const App = () => {
  return (
    <>
    <Router>
     <Header/>
     {/* <Slider /> */}
      <Switch>
      <Route path='/' exact component={Slider} />
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={CourseHome} />
        <Route path='/team' exact component={Team} />
        <Route path='/faqs' exact component={faqs} />
        <Route path='/review' exact component={Review} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/projects' exact component={Proj} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/events' exact component={Events} />
        <div className="page"><Route path='/login' exact component={Login} /></div>
        
      </Switch>
      <Footer />
     </Router>
    </>
  )
}

export default App
