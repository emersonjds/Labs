// $http -> service anguarl to treatment requests

angular
  .module("project")
  .controller("PhotoController", function($scope, $http) {
    // $scope.photos = [
    //   {
    //     title: "Spark",
    //     url:
    //       "https://pbs.twimg.com/profile_images/1110548476042063873/JiDaZlw4_400x400.png"
    //   },
    //   {
    //     title: "Spark",
    //     url:
    //       "https://pbs.twimg.com/profile_images/1110548476042063873/JiDaZlw4_400x400.png"
    //   },
    //   {
    //     title: "Spark",
    //     url:
    //       "https://pbs.twimg.com/profile_images/1110548476042063873/JiDaZlw4_400x400.png"
    //   }
    // ];
    $scope.photos = [];
    // var promise = $http.get("v1/fotos");
    // promise
    //   .then(function(response) {
    //     $scope.photos = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error.message);
    //   });
    $http
      .get("v1/fotos")
      .success(function(photos) {
        $scope.photos = photos;
      })
      .error(function(erro) {
        console.log(erro);
      });
  });
