import React, { useState } from 'react';
import '../scss/homeContact.scss';

const HomeContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const validateForm = () => {
        let formErrors = {};
        if (!name.trim()) formErrors.name = 'Imię nie może być puste';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) formErrors.email = 'Niepoprawny format emaila';
        if (message.length < 120) formErrors.message = 'Wiadomość musi mieć co najmniej 120 znaków';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            const response = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess('Wiadomość została wysłana! Wkrótce się skontaktujemy!');
                setName('');
                setEmail('');
                setMessage('');
                setErrors({});
            } else {
                setErrors(result.errors || {});
                setSuccess('');
            }
        } catch (error) {
            setErrors({ global: 'Wystąpił błąd. Spróbuj ponownie później.' });
            setSuccess('');
        }
    };

    return (
        <header className="homeContact">
            <div className="contact-container">
                <div className="background">
                    <div className="background-mask"></div>
                    <img className="background-image" src="src/assets/assets/Background-Contact-Form.jpg" alt="background" />
                </div>
                <div className="content">
                    <h1>Skontaktuj się z nami</h1>
                    <img src="src/assets/assets/Decoration.svg" alt="decoration" />
                    {success && <p className="success-message">{success}</p>}
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="form-group">
                                    <h2>Wpisz swoje imię</h2>
                                    <input
                                        type="text"
                                        placeholder="Twoje imię"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {errors.name && <p className="error-message">{errors.name}</p>}
                                </div>
                                <div className="form-group">
                                    <h2>Wpisz swój email</h2>
                                    <input
                                        type="email"
                                        placeholder="Twój email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {errors.email && <p className="error-message">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="form-textarea">
                                <h2>Wpisz swoją wiadomość</h2>
                                <textarea
                                    placeholder="Twoja wiadomość, np.: Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                {errors.message && <p className="error-message">{errors.message}</p>}
                                {errors.global && <p className="error-message">{errors.global}</p>}
                                <button type="submit">Wyślij</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <section className="footer-section">
                <p>Copyright by Coder Lab</p>
                <div className="social-icons">
                    <img src="src/assets/assets/Facebook.svg" alt="FaceBook"/>
                    <img src="src/assets/assets/Instagram.svg" alt="Instagram" />
                </div>
            </section>
        </header>
    );
};

export default HomeContact;
