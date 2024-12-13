import React from 'react';

import { ProductList } from './../data/ProductList';
import ProductCard from '../components/ProductCard';

function Dashboard() {
  return (
  <div className="d-flex flex-wrap justify-content-center">
    {ProductList.map((product)=><ProductCard {...product} key={product.id}/>)}

</div>
  );
}

export default Dashboard;
