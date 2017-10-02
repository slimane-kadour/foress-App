var app = angular.module('app', [])

.controller('poste-controller', ['$scope', function($scope)
{
    $scope.form = null;
    $scope.templates = [
        {
            name: "Communauté",
            value: 'CatC'
        },
        {
            name: "Emplois",
            value: 'CatEm'
        },
        {
            name: "Immobiliers",
            value:'CatI'
        },
        {
            name: "Véhicules",
            value: 'CatVh'
        },
        {
            name: "Boutiques",
            value: 'CatB'
        },
        {
            name: "Électroménagers",
            value:'CatEl'
        },
        {
            name: "Services",
            value: 'CatS'
        },
        {
            name: "Matériels Informatiques",
            value: 'CatM'
        },
        {
            name: "Voyages",
            value:'CatVg'
        },
        {
            name: "Animaux",
            value:'CatA'
        }
    ];
}]);
