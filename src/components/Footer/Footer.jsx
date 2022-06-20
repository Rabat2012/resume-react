import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__copyright">
        <p>fan of Elon Musk</p>
        <p>(с) 2022. Все права защищены.</p>
        </div>
        <div className="footer__social-media">
            <img src="./images/instagram.svg" alt="instagram" />
            <img src="./images/twitter.svg" alt="twitter" />
            <img src="./images/youtube.svg" alt="youtube" />
        </div>
    </footer>
  );
};

export default Footer;