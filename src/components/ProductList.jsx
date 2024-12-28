import React from 'react';

const ProductList = ({ products, query, onDeleteProduct }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!filteredProducts.length) {
    return <p className="no-product-message">No Product Found</p>;
  }

  return (
    <ul className="product-list">
      {filteredProducts.map((product, index) => (
        <li key={index} className="product-item">
          <span className="product-name">{product.name}</span>
          <span className="product-price">${product.price}</span>
          <button
            className="delete-button"
            onClick={() => onDeleteProduct(product.name)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
