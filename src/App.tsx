import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";



const App = () => {

    const {theme, toggleTheme} = useTheme();


    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Theme switcher</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Сайте</Link>
            <Suspense fallback={<div>Loading..</div>} >
                <Routes>
                    <Route path = '/' element={<AboutPageAsync/>}/>
                    <Route path = '/about' element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;