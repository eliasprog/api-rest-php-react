import React, { useState, useEffect } from 'react';
import api from './services/api';

function Products() {
  const [products, setProducts] = useState([]);
  
  async function show() {
    const response = await api.get('/estoque/mostrar');
    setProducts(response.data.data);
  }

  useEffect(show, []);

  return (
    <div className="App">
      {products.map(product => (
        <ul key={product.id}>
          <li>Produto: {product.produto}, Preço: {product.preco}</li>
        </ul>
      ))}
    </div>
  );
}

export default Products;
