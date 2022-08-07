import React from 'react';
import logoFreeShip from '../assets/images/ic_shipping.png';
import '../assets/css/itemProductDetail.scss';
import formatNumber from './formatNumber';

export default function ItemProductDetail({ items }) {
  return (
    <div className="product-detail">
      <div className="categories-breadcrumb">
        <ul>|</ul>
      </div>

      <div className="card-product-detail">
        <div className="detail-image">
          <img className="detail-image-img" src={items.picture} alt={items.title} />
        </div>
        <div className="detail-info">
          <span className="detail-small">
            {items.condition === 'not_specified' ? 'Usado' : 'Nuevo'} - {items.sold_quantity} ventas
          </span>
          <span className="detail-title">
            {items.title}{' '}
            {items.free_shipping ? (
              <span className="item-freeshipping">
                <img src={logoFreeShip} alt="Envío Gratis" />
              </span>
            ) : (
              ''
            )}
          </span>
          <span className="detail-price">
            {items.price.currency === 'ARS' ? '$' : 'U$D'}&nbsp;
            {formatNumber(items.price.amount)}
            {items.price.decimals ? (
              <span className="detail-price-decimal">
                {items.price.decimals.length === 1
                  ? '0' + items.price.decimals
                  : items.price.decimals}
              </span>
            ) : (
              ''
            )}
          </span>
          <span>
            <button className="detail-btn-buy" type="button">
              Comprar
            </button>
          </span>
        </div>
      </div>
      <div className="detail-description">
        <span className="detail-description-title">Descripción del producto</span>
        <span className="detail-description-text">{items.description}</span>
      </div>
    </div>
  );
}
