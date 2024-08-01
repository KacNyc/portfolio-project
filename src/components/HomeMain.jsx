import React, { useState } from 'react';
import '../scss/homeMain.scss';

const entries = {
    fundacje: [
        ["Fundacja “Dbam o Zdrowie”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "ubrania, jedzenie, sprzęt AGD, meble, zabawki"],
        ["Fundacja “Dla dzieci”", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "ubrania, meble, zabawki"],
        ["Fundacja “Bez domu”", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", "ubrania, jedzenie, ciepłe koce"]
    ],
    organizacje: [
        ["Organizacja “Lorem Ipsum 1”", "Quis varius quam quisque id diam vel quam elementum pulvinar.", "Egestas, sed, tempus"],
        ["Organizacja “Lorem Ipsum 2”", "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", "Ut, aliquam, purus, sit, amet"],
        ["Organizacja “Lorem Ipsum 3”", "Scelerisque in dictum non consectetur a erat nam.", "Mi, quis, hendrerit, dolor"]
    ],
    zbiorki: [
        ["Zbiórka “Lorem Ipsum 1”", "Quis varius quam quisque id diam vel quam elementum pulvinar.", "Egestas, sed, tempus"],
        ["Zbiórka “Lorem Ipsum 2”", "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.", "Ut, aliquam, purus, sit, amet"],
        ["Zbiórka “Lorem Ipsum 3”", "Scelerisque in dictum non consectetur a erat nam.", "Mi, quis, hendrerit, dolor"]
    ]
};

const ITEMS_PER_PAGE = 3;

const HomeMain = () => {
    const [category, setCategory] = useState('fundacje');
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setCurrentPage(1);
    };

    const handleMouseEnter = (buttonName) => {
        setHoveredButton(buttonName);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const currentEntries = entries[category].slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const totalPages = Math.ceil(entries[category].length / ITEMS_PER_PAGE);

    return (
        <header>
            <section id="organizations">
                <h1>Komu pomagamy?</h1>
                <img className="decoration-img" src="src/assets/assets/Decoration.svg" alt="Decoration" />
                <div className="buttons">
                    {['fundacje', 'organizacje', 'zbiorki'].map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleCategoryChange(btn)}
                            onMouseEnter={() => handleMouseEnter(btn)}
                            onMouseLeave={handleMouseLeave}
                            className={`${btn === category ? 'active' : ''} ${btn === hoveredButton ? 'hovered' : ''}`}
                        >
                            {btn === 'fundacje' && 'Fundacjom'}
                            {btn === 'organizacje' && 'Organizacjom pozarządowym'}
                            {btn === 'zbiorki' && 'Lokalnym zbiórkom'}
                        </button>
                    ))}
                </div>
                <div className="content-container">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <div className="entries">
                        {currentEntries.map(([title, description, details], index) => (
                            <div key={index} className="entry">
                                <div>
                                    <div>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                    </div>
                                    <span>{details}</span>
                                </div>
                                <hr/>
                            </div>
                        ))}
                    </div>
                    <div className="site-number">
                        <button
                            onClick={() => handleCategoryChange('fundacje')}
                            onMouseEnter={() => handleMouseEnter('fundacje')}
                            onMouseLeave={handleMouseLeave}
                            className={`fundacje ${category === 'fundacje' ? 'active' : ''} ${hoveredButton === 'fundacje' ? 'hovered' : ''}`}
                        >
                            1
                        </button>
                        <button
                            onClick={() => handleCategoryChange('organizacje')}
                            onMouseEnter={() => handleMouseEnter('organizacje')}
                            onMouseLeave={handleMouseLeave}
                            className={`organizacje ${category === 'organizacje' ? 'active' : ''} ${hoveredButton === 'organizacje' ? 'hovered' : ''}`}
                        >
                            2
                        </button>
                        <button
                            onClick={() => handleCategoryChange('zbiorki')}
                            onMouseEnter={() => handleMouseEnter('zbiorki')}
                            onMouseLeave={handleMouseLeave}
                            className={`zbiorki ${category === 'zbiorki' ? 'active' : ''} ${hoveredButton === 'zbiorki' ? 'hovered' : ''}`}
                        >
                            3
                        </button>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default HomeMain;
