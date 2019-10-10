import axios from 'axios';

export default axios.create({
    baseURL: `https://db-weedshop-jwh-dk-easv.azurewebsites.net/api/weeds`,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': "JWT " + localStorage.getItem('token')
    },
    // xsrfCookieName: 'csrftoken',
    //xsrfHeaderName: 'X-CSRFToken',
    // withCredentials: true
});