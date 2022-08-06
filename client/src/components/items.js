import React, { useState, useEffect } from 'react';
import Loading from './loading';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import FetchItems from './fetchItems';
import Item from './item';
import '../assets/css/items.scss';

export default function Items() {
  const [loader, setLoader] = useState(true);
  const [searchStatus, setSearchStatus] = useState();
  const [categories, setCategories] = useState();
  const [items, setItems] = useState();
  const history = useHistory();

  useEffect(() => {
    const makeSearch = () => {
      let search = window.location.search;
      const parsedSearch = queryString.parse(search);
      search = parsedSearch.search;

      if (search) {
        FetchItems.makeSearch(search)
          .then((response) => {
            setSearchStatus(200);
            setCategories(response.categories);
            setItems(response.items);
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

    makeSearch();

    return history.listen((location) => {
      makeSearch();
    });
  }, [history]);

  const showResults = () => {
    if (searchStatus === 200 && items) {
      let arrayCateg;

      if (categories) {
        arrayCateg = categories.toString().split(',');
      }

      return <Item categories={arrayCateg} items={items} />;
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
            <div className="card-textbox">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      );
    }
  };
  return <div> {loader ? <Loading /> : showResults()}</div>;
}
