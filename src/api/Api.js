import axios from 'axios';

let _token = null;

export const setToken = (token) => {
    _token = token;

    //for axios
    
        axios.defaults.headers.Autorization = _token
            ? `Bearer ${_token}`
            : null;
    
}

// const _request = (url, body, params = {}) => {
//     let headers = {
//         'Content-Type': 'application/json',
//     }

//     if (_token) {
//         headers.Autorization = `Bearer ${_token}`;
//     }
//     return fetch(`${baseUrl}/api/v1/${url}`, {
//         method: 'GET',
//         headers,
//         body: typeof body !== 'undefined'
//             ? JSON.stringify(body)
//             : {},
//         ...params,
//     }).then(res => res.json());
// }

// export const AdminProduct = {
//     fetchProducts() {
//         return _request('products');
//     }
// };

export const AdminProduct = {
    fetchProducts() {
        return axios.get(`/api/v1/products`);
    }
};