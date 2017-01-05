angular
.module("Portfolio",[
  "ui.router",
  "ngResource"
])
//
.config([
  "$stateProvider",
  Router
])

.controller("homeController",[
  homeControllerFunction
])

function Router($stateProvider){
  console.log("Hitting Router");
  $stateProvider
  .state("homePage", {
    url: "/",
    templateUrl: "/js/ng-views/index.html",
    controller: "homeController",
    controllerAs: "vm"
  })
}

function homeControllerFunction(){
  console.log("Hitting Home Controller")
  var vm = this
}
