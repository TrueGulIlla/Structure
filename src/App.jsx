import React from 'react';
import './styles/app.css'
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import CarMusc from "./components/CarMusc/CarMusc.jsx";


const App = () => {
    return (
        <div className={'app'}>
            <Header/>
            <CarMusc/>
         <Home/>

        </div>
    );
};

export default App;