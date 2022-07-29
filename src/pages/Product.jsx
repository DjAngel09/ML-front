import React from 'react';
import { useParams } from 'react-router-dom';
import { Bredcrumbs } from '../components';
import { useFetchProduct } from '../hooks';
export const Product = () => {

  const { id } = useParams();
  const { product, isLoading } = useFetchProduct(id);
  const { item, categories } = product
  return (
    <div>
      {
        isLoading
          ? (<h2>Cargando...</h2>)
          : <>
            <Bredcrumbs categories={categories} />
            <div className="card product-details p-16 animate__animated animate__fadeIn">
              <div className="row">
                <div className="col-12 col-lg-9">
                  <img src={item.picture} alt={item.title} />
                </div>
                <div className="col-12 col-lg-3">
                  <p className='fs-14 pt-16 pb-16' >{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
                  <h1 className='fs-24 fw-bolder pb-32' >{item.title}</h1>
                  <p className='fs-46 pb-32' >$ {item.price.amount}</p>
                  <div className="d-grid gap-2 pr-32 pb-32">
                    <button className='btn btn-primary btn-block' >Comprar</button>
                  </div>
                </div>
                <div className="col-12 col-lg-9 pl-32">
                  <h3 className='fs-28 pb-32' >Descripción del producto</h3>
                  <p className='fs-16 pb-32' >{item.description}</p>
                </div>
              </div>
            </div>
          </>
      }
    </div>
  )
}