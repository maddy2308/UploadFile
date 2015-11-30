(function () {
  angular.module("FileUpload").factory('FileService', FileService);

  FileService.$inject = ['$http'];

  function FileService($http) {

    var baseUrl = "http://localhost:3000/Art";

    return {
      uploadArt: uploadArt,
      getAllArt: getAllArt
    };

    function uploadArt(formData) {
      return $http.post(baseUrl + "/upload", formData, {
        headers: {
          'Content-Type': undefined
        },
        transformRequest: angular.identity
      }).then(successfulProcess).catch(failedProcess);
    }

    function getAllArt(artistName) {
      var params = {
        artistName: artistName
      };
      return $http.get(baseUrl + "/allArts/", {params: params}).then(successfulProcess).catch(failedProcess);
    }

    function getArt(artName) {
      return $http.get(baseUrl + "/art/", artName).then(successfulProcess).catch(failedProcess);
    }

    function successfulProcess(response) {
      return response.data;
    }

    function failedProcess(error) {
      return error;
    }

  }
})();