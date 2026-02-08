import axios from 'axios';
import { STATIC_INFO } from './STATIC_INFO';

export const API_Call = async (method, endpoint, data = null) => {
    const url = `${STATIC_INFO.BASE_URL}/${endpoint}`;
    try {
        const config = {
            method: method,
            url: url,
        }
        if (data !== null) {
            config.data = data;
        }
        const attempt = await axios(config);
        return attempt.data;
    }
    catch (error) {
        console.error(`API Call Error: ${error}`);
        throw error;
    }
}
export const Request_Success = (state, action) => {
    state.loading = false;
    state.data = action.payload.data;
    state.error = null;
}
export const Request_Failure = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}
export const Request_Started = (state) => {
    state.loading = true;
    state.error = null;
}
