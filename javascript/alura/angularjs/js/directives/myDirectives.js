angular.module("myDirectives", []).directive("myPanel", function() {
  var ddo = {};

  ddo.restrict = "AE";

  ddo.scopre = {
    titulo: "@"
  };

  ddo.transclude = true;

  ddo.templateUrl = "./my-panel.html";

  return ddo;
});
