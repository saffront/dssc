/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope, $http, $window) {

    this.userName = 'Example user';
    this.helloText = 'Welcome in SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects.';
    //



};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)

    .controller('mapCtrl', function ($scope, $http) {

        $scope.mapOptions = {

            scrollwheel: true,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            minZoom: 11,
            zoom: 11,
            center: new google.maps.LatLng(51.5072, -0.1275),
            mapTypeId: google.maps.MapTypeId.TERRAIN

        };

        $scope.map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions);


        // Define the LatLng coordinates for the polygon's path.
        var triangleCoords = [
            {lat: 51.5072, lng: -80.190},
            {lat: 58.5072, lng: -66.118},
            {lat: 57.5072, lng: -64.757},
            {lat: 53.5072, lng: -80.190}
        ];

        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
            paths: triangleCoords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        bermudaTriangle.setMap(this.map);




        google.maps.event.addListener(map,'center_changed',function() { checkBounds(); });

        function checkBounds() {
            if(! allowedBounds.contains(map.getCenter())) {
                var C = map.getCenter();
                var X = C.lng();
                var Y = C.lat();

                var AmaxX = allowedBounds.getNorthEast().lng();
                var AmaxY = allowedBounds.getNorthEast().lat();
                var AminX = allowedBounds.getSouthWest().lng();
                var AminY = allowedBounds.getSouthWest().lat();

                if (X < AminX) {X = AminX;}
                if (X > AmaxX) {X = AmaxX;}
                if (Y < AminY) {Y = AminY;}
                if (Y > AmaxY) {Y = AmaxY;}

                map.setCenter(new google.maps.LatLng(Y,X));
            }
        }


    });