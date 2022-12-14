import React from 'react';
import { Link } from 'react-router-dom';
import logoFreeShip from '../assets/images/ic_shipping.png';
import formatNumber from './formatNumber';

export default function Item({ categories, items }) {
  let arrayCateg;
  categories ? (arrayCateg = categories) : (arrayCateg = '');

  return (
    <div className="items-result">
      <div className="categories-breadcrumb">
        <ul>
          {arrayCateg.map((category, i) => (
            <li className="breadcrumb" key={i}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {items.map((item, i) => (
        <div className="card-fluid" key={i}>
          <Link
            className="item-link"
            title={item.title}
            to={{ pathname: `/items/${item.id}`, categories: { arrayCateg } }}>
            <div className="card-product">
              <img className="item-image" src={item.picture} alt={item.title} />
              <div className="item-price">
                {item.price.currency === 'ARS' ? '$' : 'U$D'}
                &nbsp;{formatNumber(item.price.amount)}
                {item.price.decimals ? (
                  <span className="item-price-decimal">
                    {item.price.decimals.length === 1
                      ? '0' + item.price.decimals
                      : item.price.decimals}
                  </span>
                ) : (
                  ''
                )}
                {item.free_shipping ? (
                  <span className="item-freeshipping">
                    <img src={logoFreeShip} alt="Envío Gratis" />
                  </span>
                ) : (
                  ''
                )}
                <div className="item-title">{item.title}</div>
              </div>
              <span className="item-condition">
                {item.condition === 'not_specified' ? 'Usado' : 'Nuevo'}
              </span>
            </div>
            {i !== items.length - 1 ? (
              <span className="divisor">
                <hr />
              </span>
            ) : (
              ''
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
