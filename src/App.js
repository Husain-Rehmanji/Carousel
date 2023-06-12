import React from 'react'
import "./App.css"
import Header from './components/common/heading/Header'
import { Route, BrowserRouter as Router, Switch} from "react-router-dom"
import About from './components/about/About'
import CourseHome from './components/allcourses/CourseHome'

const App = () => {
  return (
    <>
    <Router>
     <Header/>
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={CourseHome} />
      </Switch>
     </Router>      
    </>
  )
}

export default App
