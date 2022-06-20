import React from 'react';

const FirstDiv = () => {
  return (
    <div className="first_div">
    <header className="header">
        <p className="header__name">Elon Musk</p>
        <nav className="header__nav">
            <a className="header__nav__link" href="#">About</a>
            <a className="header__nav__link" href="#">Features</a>
            <a className="header__nav__link" href="#">How to Use</a>
            <a className="header__nav__link" href="#">Download</a>
        </nav>
    </header>
</div>
  );
};

export default FirstDiv;