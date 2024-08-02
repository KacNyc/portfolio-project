import React from 'react';
import '../scss/homeContact.scss';

const HomeContact = () => {
    return (
        <header className="homeContact">
            <div className="contact-container">
                <div className="background">
                    <div className="background-mask"></div>
                    <img className="background-image" src="src/assets/assets/Background-Contact-Form.jpg"
                         alt="background"/>
                </div>
                <div className="content">
                    <h1>Skontaktuj się z nami</h1>
                    <img src="src/assets/assets/Decoration.svg" alt="decoration"/>
                    <div className="form-container">
                        <div>
                            <div className="form-group">
                                <h2>Wpisz swoje imie</h2>
                                <form>
                                    <input type="text" placeholder="Twoje imie"/>
                                </form>
                            </div>
                            <div className="form-group">
                                <h2>Wpisz swój email</h2>
                                <form>
                                    <input type="email" placeholder="Twój email"/>
                                </form>
                            </div>
                        </div>
                        <div className="form-textarea">
                            <h2>Wpisz swoją wiadomość</h2>
                            <form>
                                <textarea
                                    placeholder="Twoja wiadomość, np.: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                            </form>
                            <button>Wyślij</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="footer-section">
                <p>Copyright by Coder Lab</p>
                <div className="social-icons">
                    <img src="src/assets/assets/Facebook.svg" alt="FaceBook"/>
                    <img src="src/assets/assets/Instagram.svg" alt="Instagram"/>
                </div>
            </section>
        </header>

    );
};

export default HomeContact;
