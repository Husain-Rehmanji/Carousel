import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Slider from './components/Slider/Slider';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Header from './components/common/heading/Header';
import faqs from './components/faqs/faqs';
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
      </Switch>
     </Router>      
    </>
  )
}

export default App
