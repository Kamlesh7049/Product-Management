import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

const Home = ({ logout }) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const addProduct = (product) => {
    if (!products.some((p) => p.name === product.name)) {
      setProducts([...products, product]);
    } else {
      alert('Product already exists');
    }
  };

  const onDeleteProduct = (productName) => {
    setProducts(products.filter((product) => product.name !== productName));
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Welcome to Home Page</h2>
        <button onClick={logout} className="home-logout-button">Logout</button>
      </div>
      <div className="home-card">
        <AddProductForm onAddProduct={addProduct} />
        <h3>Search Products</h3>
        <SearchBar query={query} setQuery={setQuery} />
        <h3>Product List</h3>
        <ProductList
          products={products}
          query={query}
          onDeleteProduct={onDeleteProduct}
        />
      </div>
    </div>
  );
};

export default Home;
