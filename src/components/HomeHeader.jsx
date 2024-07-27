import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../scss/homeHeader.scss';

const Home = () => {
    return (
        <>
            <header>
                <img className="header-image" src="/src/assets/assets/Home-Hero-Image.jpg" alt="Hero"/>
                <div className="loginBar">
                    <ul>
                        <li><RouterLink to="/login">Zaloguj się</RouterLink></li>
                        <li><RouterLink to="/register">Załóż konto</RouterLink></li>
                    </ul>
                </div>
                <nav>
                    <ul>
                        <li><RouterLink to="/">Start</RouterLink></li>
                        <li><ScrollLink to="about" smooth={true}>O co chodzi?</ScrollLink></li>
                        <li><ScrollLink to="about-us" smooth={true}>O nas</ScrollLink></li>
                        <li><ScrollLink to="organizations" smooth={true}>Fundacja i organizacje</ScrollLink></li>
                        <li><ScrollLink to="contact" smooth={true}>Kontakt</ScrollLink></li>
                    </ul>
                </nav>
                <section className="hero">
                    <div className="hero-content">
                        <a>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</a>
                        <img src="/src/assets/assets/Decoration.svg" alt="Decoration"/>
                        <div className="hero-btn">
                            <RouterLink to="/login" className="button">ODDAJ RZECZY</RouterLink>
                            <RouterLink to="/login" className="button">ZORGANIZUJ ZBIÓRKĘ</RouterLink>
                        </div>

                    </div>
                </section>
            </header>
            <main>
                {/* Możesz umieścić tutaj inne sekcje strony */}
            </main>
        </>
    );
};

const Login = () => <div>Login Page</div>;
const Register = () => <div>Register Page</div>;

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App;
