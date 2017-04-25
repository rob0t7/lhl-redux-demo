import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS
} from '../actions'


const initialState = {
  isFetching: false,
  products: []
}

const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        products: action.products
      }
    default:
      return state
  }

}

export default mainReducer
