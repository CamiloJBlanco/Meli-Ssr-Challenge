import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from './loading';
import FetchItems from './fetchItems';
import ItemProductDetail from './itemProductDetail';
import '../assets/css/items.scss';

export default function ItemProduct() {
  const [loader, setLoader] = useState(true);
  const [searchStatus, setSearchStatus] = useState();
  const [items, setItems] = useState();
  const history = useHistory();

  useEffect(() => {
    const getItem = () => {
      let search = window.location.pathname.toString().split('/');
      search = search[2];
      if (search) {
        FetchItems.getItem(search)
          .then((response) => {
            setSearchStatus(200);
            setItems(response.item);
            setLoader(false);
          })
          .catch((error) => {
            setSearchStatus(500);
            setLoader(false);
            console.log(error);
          });
      } else {
        setLoader(false);
      }
    };

    getItem();

    return history.listen((location) => {
      getItem();
    });
  }, [history]);

  const showResults = () => {
    if (searchStatus === 200 && items) {
      return <ItemProductDetail items={items} />;
    } else {
      let title;

      if (searchStatus === 200) {
        title = 'No hay publicaciones que coincidan con tu búsqueda.';
      } else {
        title = '¡Ooops!, ha ocurrido un error al procesar tu búsqueda.';
      }

      return (
        <div className="items">
          <div className="card-message">
            <div className="items-textbox">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div> {loader ? <Loading /> : showResults()}</div>;
}
