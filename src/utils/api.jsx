require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = {
    get: function(url) {
        return fetch(url).then(function(response) {
                return response.json();
            });
    },
    postJSON: function(url, jsonBody) {
        return fetch(url, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonBody)
        })
        .then(function(response) {
            return response.json();
        });
    }
};
