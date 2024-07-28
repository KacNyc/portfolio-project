import React from 'react';
import '../scss/homeSteps.scss';

const HomeSteps = () => {
    return (
        <header id="home-steps" className="home-steps">
            <div className="steps">
                <h1 className="steps-h1">Wystarczą 4 proste kroki</h1>
                <img className="decoration" src="src/assets/assets/Decoration.svg" alt=""/>
            </div>
            <div className="container">
                <div className="container-element">
                    <img src="src/assets/assets/Icon-1.svg" alt=""/>
                    <a>Wybierz rzeczy</a>
                    <div className="line"></div>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="container-element">
                    <img src="src/assets/assets/Icon-2.svg" alt=""/>
                    <a>Spakuj je</a>
                    <div className="line"></div>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="container-element">
                    <img src="src/assets/assets/Icon-3.svg" alt=""/>
                    <a>Zdecyduj komu chcesz pomóc</a>
                    <div className="line"></div>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="container-element">
                    <img src="src/assets/assets/Icon-4.svg" alt=""/>
                    <a>Zamów kuriera</a>
                    <div className="line"></div>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="hero-btn">
                <button className="button">ODDAJ RZECZY</button>
                {/*<RouterLink to="/login" className="button">ODDAJ RZECZY</RouterLink>*/}
            </div>
        </header>
    );
};

export default HomeSteps;
