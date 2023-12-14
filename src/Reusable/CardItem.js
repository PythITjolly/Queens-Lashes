import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Reusable/Button";

//function CardItem(props) {
//  return (
//    <>
//      <li className='cards__item'>
//       <Link className='cards__item__link' to={props.path}>
//          <figure className='cards__item__pic-wrap' data-category={props.label}>
//           <img
//              className='cards__item__img'
//              alt='Classic Lash Extension'
//              src={props.src}
//            />
//          </figure>
//          <div className='cards__item__info'>
//            <h5 className='cards__item__text'>{props.text}</h5>
//          </div>
//        </Link>
//      </li>
//    </>
//  );
//}

//export default CardItem;

function CardItem({ src, text, label, path, target, rel }) {
  const showButton = true; // Define a condition to render the button

  return (
    <li className="cards__item">
      <div className="cards__item__link">
        <figure className="cards__item__pic-wrap" data-category={label}>
          <img src={src} alt="Service" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
          <Link to={path} target={target} rel={rel}>
            <br />
            {showButton && <Button buttonStyle="btn--outline">Book Now</Button>}
          </Link>
        </div>
      </div>
    </li>
  );
}

export default CardItem;
