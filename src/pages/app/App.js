import React, { lazy, Suspense } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";

import "./App.scss";

import Spinner from "../../components/Spinner";
const Menu = lazy(() => import("../../components/Menu/Menu"));
const BurgerMenu = lazy(() => import("../../components/Menu/BurgerMenu/BurgerMenu"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const Main = lazy(() => import("../../components/Main/Main"));
const OurCoffee = lazy(() => import("../../components/OurCoffee/OurCoffee"))
const PleasurePage = lazy(() => import("../Pleasure/PleasurePage"))
const SinglePage = lazy(() => import("../Single/SinglePage"));
const Page404 = lazy(() => import("../404/404"));

function App() {
    const [check, setCheck] = useState(false);

    const onSetCheck = () => {
        setCheck(!check); 
    };

    (function setOverflow(){
        if (check && document.documentElement.clientWidth < 480) {
            console.log(document.documentElement.clientWidth);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        } 
    }()); 

    const onCheckResize = () => {
        setCheck(false);
    };

    window.addEventListener("resize", () => {
        onCheckResize();
    });

    return (
        <Router>
            <div className="app">
            <Suspense fallback={<Spinner />}>
                <Menu
                onSetCheck={onSetCheck} 
                check={check} 
                class={"menu-header"} 
                logo={"menu-header__logo-header"}
                />
                <BurgerMenu 
                check={check} 
                onSetCheck={onSetCheck}
                />
                    <main>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/ourcoffee" element={<OurCoffee />}/>
                            <Route path="/pleasure" element={<PleasurePage />}/>
                            <Route path="/ourcoffee/:itemID" element={<SinglePage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </main>
                <Footer />
            </Suspense>
            </div>
        </Router>
    )
}

export default App;