import { LOAD_IMAGES, CLEAR_ERROR, CLEAR_IMAGES } from "./types";


export function loadImages( ) {
    return {
        type: LOAD_IMAGES,
        payload: {
            client: 'default',
            request: {
                url: '/photosAA',
                method: 'GET',
            }
        }
    }
}

export function clearErro() {
    return {
        type: CLEAR_ERROR
    }
}

export function clearImages() {
    return {
        type: CLEAR_IMAGES
    }
}