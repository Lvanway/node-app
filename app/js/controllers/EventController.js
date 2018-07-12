'use strict';

eventsApp.controller('EventController',
  function EventController($scope) {
      $scope.event = {
          name: 'Angular Bootcamp',
          date: '1/1/2019',
          time: '10:30 AM'
      }
  }
);
