require('isomorphic-fetch');

const site = '127.0.0.1';

module.exports = ({
    url = '/',
    port = 3030,
    method = 'get'
}) => {
    return fetch(`http://${site}:${port}${url}`, {
        method: method.toLowerCase(),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: "same-origin"
    }).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(data => {
        return data;
    })
}