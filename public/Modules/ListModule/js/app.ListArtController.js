(function () {
  angular.module("FileUpload").controller('ListArtController', ListArtController);

  ListArtController.$inject = ['FileService'];

  function ListArtController(fileService) {

    var self = this;

    self.arts = [];

    self.getAllArt = getAllArt();

    function getAllArt() {
      fileService.getAllArt('Divyanshi').then(
          function (response) {
            if (response instanceof Array) {
              self.arts = response;
            } else {
              self.arts.push(response);
            }
          },
          function (error) {

          });
    }
  }

})();