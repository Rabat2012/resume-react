import React from 'react';

const Work = () => {
  return (
    <div>
      <div className="work">
        {/* <div data-aos="zoom-in-down"> */}
        <div className="work__content">
        <p className="work__content__title">Работа</p>
        <ul className="work__content__description">
            <li><a href="#">Tesla (2004—н. в.)</a></li>
            <li><a href="#">SolarCity (2006—н. в.)</a></li>
            <li><a href="#">OpenAI (2015—н. в.)</a></li>
            <li><a href="#">Neuralink (2016—н. в.)</a></li>
            <li><a href="#">The Boring Company (2016—н. в.)</a></li>
            <li><a href="#">Твиттер (2022—н. в.)</a></li>
        </ul>
        </div>
        </div>
        <div className="work__video"><iframe width="700px" height="500" src="https://www.youtube.com/embed/cdZZpaB2kDM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
    </div>
    // </div>
  );
};

export default Work;