import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CardProduct = ({ product }) => {

    const navigate = useNavigate();

    const onNavigateToProduct = () => {
        navigate(`/items/${product.id}`);
    }

    return (
        <div className="row m-0 pointer" onClick={onNavigateToProduct} >
            <div className="col-12 col-md-3 col-xl-2 ps-0 pr-16">
                <img src={product.picture} alt={product.title} />
            </div>
            <div className="col-12 col-xl-8 col-md-7 ps-0 pe-0 pt-16 pb-16">
                <p 
                    className='m-0 pb-32 fs-24 fw-normal' 
                >
                    ${product.price} 
                    { (product.free_shipping) ? <span className='icon-shipping ps-2' ></span> : '' }
                </p>
                <p className='m-0 fs-18' >{product.title}</p>
            </div>
            <div className="col-12 col-md-2 pt-16 pb-16">
                <p className='m-0 fs-12' >{product.city}</p>
            </div>
        </div>
    )
}
