import React from 'react';
import './ProductList.css';
import Product from './Product';

function ProductList() {
  return (
    <div className="productList">
      <Product 
        id="12345"
        title="The Lean Startup"
        price={29.99}
        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        rating={5}
      />
      <Product 
        id="67890"
        title="Samsung Galaxy Watch"
        price={199.99}
        image="https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-pro-sm-r920nzkainu-thumb-533190300?$344_344_PNG$"
        rating={4}
      />
      {/* Add more products as needed */}
    </div>
  );
}

export default ProductList;
