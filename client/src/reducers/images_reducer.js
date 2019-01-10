import types from '../actions/types';

const DEFAULT_STATE = {
    all: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_IMAGES:
            return { ...state, all: action.images };
        default:
            return state;
    }
}
