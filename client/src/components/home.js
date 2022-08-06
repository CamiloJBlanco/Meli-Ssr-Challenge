import React from 'react';
import Loading from './loading';

function Home() {
    return (
        <div className="home">
            <div className="card-message">
                <div className="card-textbox">
                    <h3>Bienvenido a Mercado Libre Argentina</h3>
                    <small className="card-smalltitle">(Comience a buscar sus productos)</small>
                </div>
            </div>
            <Loading />
        </div>
    )
}

export default Home;