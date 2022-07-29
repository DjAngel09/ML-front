import React from 'react';
import queryString from 'query-string';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { search = '' } = queryString.parse(location.search);

  const { searchProduct, onInputChange } = useForm({ searchProduct: search });

  const onSearchSubmit = (event) => {

    event.preventDefault();
    if (searchProduct.trim().length <= 1) return;

    navigate(`/items?search=${searchProduct}`);

  }

  return (
    <div className='header pt-2 pb-2' >
      <div className="container">
        <div className="row">
          <Link className="col-3 col-md-1" to="/">
            <img src="/assets/images/Logo_ML.png" alt="" />
          </Link>
          <div className="col-9 col-md-11">
            <form onSubmit={onSearchSubmit} aria-label="form" >
              <div className="input-group">
                <input
                  type="text"
                  placeholder='Nunca dejes de buscar'
                  className='form-control'
                  name='searchProduct'
                  autoComplete='off'
                  value={searchProduct}
                  onChange={onInputChange}
                />
                <button className='btn btn-search icon-search'></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
