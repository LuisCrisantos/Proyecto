import React from 'react';
import data from './data.js';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
          <div >
              <a className="brand" href="/">Genki Co.</a>
          </div>
          <div>
              <a href="/cart">Carrito</a>
              <a href="/signin">Registrarse</a>
          </div>
      </header>
      <main>
          <div className="row center">
              {
                data.products.map(product => (
                  <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                      <img className="medium" src={product.image} alt={product.name}/>
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                          <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                          <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            ${product.price} MXN
                        </div>
                    </div>
                  </div>
                ))
              }
                 
          </div>
      </main>
      <footer className="row center">
          Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;
