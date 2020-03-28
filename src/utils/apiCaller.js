import axios from 'axios';

const apiCaller = (endPoint, method = 'GET', body, header) => {
    return axios({
        method: method,
        url: `${endPoint}`,
        data: body,
        header: header
    });
};

export default apiCaller;
