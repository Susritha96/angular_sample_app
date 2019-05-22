    
let myapp= angular.module("Myapp",[]);

let mycontroller = function($scope){
    $scope.message="Hello World";
}

myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
    let Student={
        FirstName : "Susritha",
        LastName : "Gade",
        Email: "S533907@nwmissouri.edu"
    }

    $scope.Student=Student;
}

myapp.controller("Student",JSONController);