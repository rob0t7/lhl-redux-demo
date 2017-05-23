import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner'

import { fetchProducts } from './actions'
import { connect } from 'react-redux'

const ProductRow = ({name, producer_name, price_in_cents}) => (
  <tr>
    <td>{name}</td>
    <td>{producer_name}</td>
    <td>{price_in_cents}</td>
  </tr>
)
const ProductResults = ({products}) => (
  <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Manufacturer</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      { products.map( product => <ProductRow key={product.id} {...product}/> ) }
    </tbody>
  </table>
)

const App = ({products, showSpinner, handleSubmit}) => (
  <div style={{width: '80%', margin: '1rem auto'}}>
    <h1>LCBO Search Redux Demo</h1>

    <div style={{textAlign: 'center'}}>
      <input
          style={{width: '100%', height: '40px', display: 'block'}}
          type="text"
          placeholder="Search LCBO Products"
          onKeyUp={handleSubmit}
      />
    </div>

    <div style={{marginTop: '1rem'}}>
      <ProductResults products={products}/>
    </div>

    <LoadingSpinner show={showSpinner}/>
  </div>
)

const mapStateToProps = state => {
  return {
    products: state.products,
    showSpinner: state.isFetching
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (event) => {
      if (event.key === 'Enter') {
        dispatch(fetchProducts(event.target.value))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
