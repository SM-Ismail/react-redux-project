import { BUY_PASTA } from "../pasta/pastaType";

const initialState = {
    numOfPasta: 0
}

const pastaReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_PASTA: return{
            ...state,
            numOfPasta: state.numOfPasta + 1 
        }
        default: return state;
    } 
}
export default pastaReducer;