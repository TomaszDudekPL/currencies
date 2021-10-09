const initModalState = {
    modalIsVisible: false
}

const modalStateReducer = (state = initModalState, action) => {

    if (action.type === 'OPEN') {
        return {
            ...state,
            modalIsVisible: true,
            payload: action.payload
        };
    }
    if (action.type === 'CLOSE') {
        return {
            ...state,
            modalIsVisible: false
        }
    }
    return state;

}

export default modalStateReducer;