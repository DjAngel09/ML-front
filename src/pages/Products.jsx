import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetchProducts } from '../hooks';
import { CardProduct } from '../components/CardProduct';
import { Bredcrumbs } from '../components';

export const Products = () => {

  const location = useLocation();
  const { search = '' } = queryString.parse(location.search);

  const { products, isLoading } = useFetchProducts(search);

  return (
    <>
      {
        isLoading
          ? (<h2>Cargando...</h2>)
          : <>
            <Bredcrumbs categories={products.categories} />
            <div className='card mb-5' >

              {
                products.items.map(product => (
                  <div className='card-product p-16' key={product.id} >
                    <CardProduct product={product} />
                    <hr />
                  </div>
                ))
              }

            </div>
          </>
      }
    </>
  )
}
