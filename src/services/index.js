import axios from './ajax';
import api from './api';

function getImgUrl() {
    console.log(12312)
    return axios.post(api.INDEX_GAME_IMG_URL).then(res => {
        return res.data
    })
}
export {
    getImgUrl
}