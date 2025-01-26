import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './components/App'
import Header from './components/header'
import Body from './components/body'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <Router>
   <Header />
    <Routes>
      <Route path='/'element={<Body />}/>
      <Route path='' element=""/> 
      <Route path='' element=""/> 
      <Route path='' element=""/> 
      <Route path='' element=""/> 
    </Routes>
   </Router>
  
  </React.StrictMode>,
)
