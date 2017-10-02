'use strict';
  angular.module('foressApp')
.controller('menuController',['$scope','menuFactory',function($scope , menuFactory){
    
    
    $scope.items=menuFactory.getItems();
    
     $scope.ordre='id';
     $scope.ordre2='ident';
     $scope.choixCategorie=" ";
     $scope.choixWilaya=" ";
     $scope.chioxSousCategorie="";
    
    $scope.today = new Date();
    
     $scope.select = function(x) {
     $scope.categorieSelect = x;
     
  }
    



}])
.controller('itemDetailController', ['$scope',  'menuFactory', function($scope, menuFactory) {
      
                

    var item= menuFactory.getItem(5);
    $scope.item=item;
          
              
  }])

 .controller('ContactController', ['$scope', function($scope) {
 
     $scope.feedback = {nom:"", adresse:"", email:"" ,sujet:"" };
  

    }])

.controller('FeedbackController', ['$scope', function($scope) {
                           
                  $scope.sendFeedback = function() {
                                   console.log($scope.feedback); }
            
        }]);




     
