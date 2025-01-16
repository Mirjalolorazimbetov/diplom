import React from 'react';
import Home from './assets/Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homeid from './assets/Components/Homeid';
import Error from './assets/Components/Error';
import { Provider } from 'react-redux';
import store from  './assets/stor/App';


const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element ={<Home/>}/>
      <Route path='/Home/:id' element = {<Homeid/>}/>
      <Route path='*'element = {<Error/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    );
  };

export default App;
