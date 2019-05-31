import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Publications from './Components/Pages/Publications';
import Tutorials from './Components/Pages/Tutorials';
import Notes from './Components/Pages/Notes';
import Header from './Components/Header/Header';
import Navigation from './Components/Header/Navigation';
function App() {
  return (
    <Layout>
      <Header>
        <h1>Hi! I'm Marcos</h1>
        <Navigation/>
      </Header>
      <BrowserRouter>     
      <Route path="/" exact component={HomePage}/>
      <Route path="/publications" exact component={Publications}/>
      <Route path="/tutorials" exact component={Tutorials}/>
      <Route path="/notes" exact component={Notes}/>
      </BrowserRouter>
    </Layout> 
  )
}

export default App;
