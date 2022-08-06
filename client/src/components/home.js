import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="big-image">
        <a href="https://www.mercadolibre.com.ar/suscripciones/nivel-6#origin=main-slider&DEAL_ID=&S=MKT&V=1&T=MS&L=loyalty_amigos_beneficios&me.bu=9&me.audience=all&me.content_id=LOYALTY_nivel_12345_amigos_beneficios_web_3&me.component_id=main_slider_web_ml_5&me.logic=user_journey&me.position=5&me.bu_line=36&me.flow=-1&audience=all&bu=9&bu_line=36&component_id=main_slider_web_ml_5&content_id=LOYALTY_nivel_12345_amigos_beneficios_web_3&flow=-1&logic=user_journey&position=5&c_id=/home/exhibitors-carousel/element&c_campaign=loyalty_amigos_beneficios&c_element_order=6&c_uid=8ab0cba8-6e95-4bf8-ac84-42dc71f0fbef">
          <img
            className="logo"
            src={'https://http2.mlstatic.com/D_NQ_787860-MLA51018258347_082022-OO.webp'}
            alt="Suscribite al nivel 6"
          />
        </a>
      </div>
      <div className="card-message">
        <div className="card-textbox">
          <h3>Bienvenido a Mercado Libre Argentina</h3>
          <small className="card-smalltitle">(Comience a buscar sus productos)</small>
        </div>
      </div>
    </div>
  );
}

export default Home;
