(function () {
  angular
      .module("FileUpload", ['ngAnimate', 'ngMaterial', 'ui.bootstrap', 'ngRoute'])
      .config(function ($mdThemingProvider) {
        // Extend the red theme with a few different colors
        var bootstrapPrimaryMap = $mdThemingProvider.extendPalette('blue', {
          '500': '337ab7'
        });

        //var bootstrapWarningMap = $mdThemingProvider.extendPalette('yellow', {
        //    '400': 'faebcc'
        //});
        //
        //var bootstrapDangerMap = $mdThemingProvider.extendPalette('pink', {
        //    '400': 'ebccd1'
        //});
        //
        //var bootstrapDefaultMap = $mdThemingProvider.extendPalette('grey', {
        //    '400': 'ddd'
        //});

        $mdThemingProvider.definePalette('bootstrapPrimary', bootstrapPrimaryMap);
        //$mdThemingProvider.definePalette('bootstrapWarning', bootstrapWarningMap);
        //$mdThemingProvider.definePalette('bootstrapDanger', bootstrapDangerMap);
        //$mdThemingProvider.definePalette('bootstrapDefault', bootstrapDefaultMap);

        $mdThemingProvider.theme('default')
            .primaryPalette('bootstrapPrimary');
        //.warnPalette('bootstrapWarning')
        //.accentPalette('bootstrapDanger')
        //.backgroundPalette('bootstrapDefault')
      })
      .config(['$routeProvider',
        function ($routeProvider) {
          $routeProvider.
          when('/', {
            redirectTo: 'public/index.html'
          }).
          when('/art', {
            templateUrl: 'Modules/UploadModule/UploadForm.html',
            controller: 'FileUploadController',
            controllerAs: 'uploadCtrl'
          }).
          when('/art/list', {
            templateUrl: 'Modules/ListModule/listArt.html',
            controller: 'ListArtController',
            controllerAs: 'listCtrl'
          }).
          otherwise({
            redirectTo: 'public/index.html'
          });
        }]);

})();