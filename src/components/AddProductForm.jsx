import React, { useState } from 'react';
// import './AddProductForm.css'; // Import custom styles

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (name && price) {
      onAddProduct({ name, price });
      setName('');
      setPrice('');
    } else {
      alert('All fields are required');
    }
  };

  return (
    <div className="add-product-form">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAdd} className="add-button">
        Add Product
      </button>
    </div>
  );
};

export default AddProductForm;
