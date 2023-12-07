import React from 'react';
import { Link } from 'react-router-dom';

function GalleryItem(props) {
  return (
    <li className='gallery__item'>
      <Link className='gallery__item__link' to={props.path}>
        <figure className='gallery__item__pic-wrap' data-category={props.label}>
          <img
            className='gallery__item__img'
            alt='sample work'
            src={props.src}
          />
        </figure>
      </Link>
    </li>
  );
}

export default GalleryItem;
