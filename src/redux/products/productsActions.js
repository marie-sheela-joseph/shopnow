import { urlProducts } from '../../api'
import axios from 'axios'

export const addProducts = (ob1) => {
    return (dispatch, getState) => {
        axios.post(urlProducts, ob1)
            .then(res => {
                dispatch({ type: "INSERT_PRODUCTS", payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const deleteProducts = (id) => {
    return (dispatch, getState) => {
        axios.delete(urlProducts + '/' + id)
            .then(res => {
                dispatch({ type: "DELETE_PRODUCTS", payload: id })
            })
            .catch(err => console.log(err))
    }
}

export const updateProducts = (ob2) => {
    return (dispatch, getState) => {
        axios.patch(urlProducts + '/' + ob2.id, ob2)
            .then(res => {
                dispatch({ type: "UPDATE_PRODUCTS", payload: res.data })
            })
            .catch(err => console.log(err))
    }
}

export const readProducts = () => {
    return (dispatch, getState) => {
        axios.get(urlProducts)
            .then(res => {
                dispatch({ type: "READ_PRODUCTS", payload: res.data })
            })
            .catch(err => console.log(err))
    }
}
