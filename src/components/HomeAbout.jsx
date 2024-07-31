import React from 'react';
import '../scss/homeAbout.scss';

const HomeAbout= () => {
    return (
        <header className="homeAbout">
            <div className="container">
                <h1>O nas</h1>
                <img className="decoration-img" src="src/assets/assets/Decoration.svg" alt="" />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="signature-img" src="src/assets/assets/Signature.svg" alt=""/>
            </div>
            <div>
                <img className="people-img" src="src/assets/assets/People.jpg" alt=""/>
            </div>
        </header>
    );
};

export default HomeAbout;
