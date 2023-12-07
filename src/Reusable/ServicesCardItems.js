import React from 'react';
import { Link } from 'react-router-dom';

function ServicesCardItems(props) {
  const { src, text, label, path } = props;

  const renderTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={path}>
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img className='cards__item__img' alt='Classic Lash Extension' src={src} />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{renderTextWithLineBreaks(text)}</h5>
        </div>
      </Link>
      {/* Replace Button with your desired component */}
      <button>Button</button>
    </li>
  );
}

export default ServicesCardItems;
