import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../scss/homeThreeColumns.scss';

const HomeThreeColumns = () => {
    return (
        <section className="HomeThreeColumns">
            <div className="HomeThreeColumnsComponent">
                <h1>10</h1>
                <a>ODDANYCH WORKÓW</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
            <div className="HomeThreeColumnsComponent">
                <h1>5</h1>
                <a>WSPARTYCH ORGANIZACJI</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
            <div className="HomeThreeColumnsComponent">
                <h1>7</h1>
                <a>ZORGANIZOWANY ZBIÓREK</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </div>
        </section>
    );
};

export default HomeThreeColumns;