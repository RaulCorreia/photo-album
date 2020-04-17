import {
    LOAD_IMAGES_SUCCESS, LOAD_IMAGES_FAIL, CLEAR_ERROR
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    images: {},
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOAD_IMAGES_SUCCESS:
            return { ...state, images: action.payload.data, error: '' };

        case LOAD_IMAGES_FAIL:
            return { ...state, images: {}, error: action.error.message };

        case CLEAR_ERROR:
            return { ...state, error: '' };

        default:
            return state;
    }
};
