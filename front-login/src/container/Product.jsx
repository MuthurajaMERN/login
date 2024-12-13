import React from 'react';
import { ProductList } from '../data/ProductList';
import { useParams } from 'react-router-dom';

function Product() {

    const params = useParams();
    const props = ProductList.find((element)=>element.id === parseInt(params.id))

  return (
    <div className='card m-2'>
    <div className="mt-2">
        <img src={props.thumbnail} height={350} width={400} alt={props.title} className="border-radius-9"/>
    </div>
    <div className='mt-3 card-body'>
      <h5 className="card-title">{props.title}</h5>
      <h6 className="mt-2">Price:{`$${props.price}`}</h6>
      <h6 className="mt-2">Discount:{props.discountPercentage}%</h6>
      <h6 className="mt-2">Rating:{props.rating}</h6>
      <div className="mt-4">
        {props.stock > 0 ?(
        <>
        <button className="btn btn-success">Buy Now</button>
        
        <button className="ms-3 btn btn-success">Add to Card</button>
        </>
        
        ):(<button className="btn btn-outline-danger">out of stock</button>)}
      </div>

    </div>
    </div>
  );
}

export default Product;
