var getDataAPI = function() {
    var url = 'http://localhost:3001';

    return fetch(url)
    .then(function(response) {
      return response.json()
    })
};

export default getDataAPI;