export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export const requestProducts = productName => ({
  type: REQUEST_PRODUCTS,
  productName
})

export const receiveProducts = (productName, products) => ({
  type: RECEIVE_PRODUCTS,
  productName,
  products
})

export const fetchProducts = productName => dispatch => {
  dispatch(requestProducts(productName))

  fetch(`https://lcboapi.com/products?q=${encodeURI(productName)}`,{
    method: 'GET',
    headers: {
      'Authorization': 'Token MDphMmIxNDY0Mi0zYjYwLTExZTUtYTRlOS1hZjBkOWE1YzRmYzI6WWRZR1h6Q0ZwQk9JNG00YTJMcHBsOFNxcUxjeklpTmVEWGlz'
    }
  })
    .then( resp => { return resp.json() })
    .then( json => {
      dispatch(receiveProducts(productName, json.result))
    })

}
