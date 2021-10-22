const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'INSERT_PRODUCTS': return [...state, action.payload]
        case 'DELETE_PRODUCTS': return [...state.filter(item => item.id !== action.payload)]
        case 'UPDATE_PRODUCTS': return [...state.map(item => item.id === Number(action.payload.id) ? action.payload : item)]
        case 'READ_PRODUCTS': return [...action.payload]
        default: return state
    }
}
export default productsReducer
