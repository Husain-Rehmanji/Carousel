import React from 'react'
import "./App.css"
import Header from './components/common/heading/Header'
import { Route, BrowserRouter as Router, Switch} from "react-router-dom"
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'
import Footer from './Footer'
import Blog from './components/Blog/Blog'
import Slider from './Comp/Slider'
const App = () => {
  return (
    <>
    <Router>
     <Header/>
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={CourseHome} />
        <Route path='/blog' exact component={Blog} />
      </Switch>
     </Router>
     <Slider/>
     <Footer />
     </>
  )
}

export default App
