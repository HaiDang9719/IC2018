angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu2.menu', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
      }
    }
  })

  .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('cloud', {
    url: '/page3',
    templateUrl: 'templates/cloud.html',
    controller: 'cloudCtrl'
  })

  .state('menu2', {
    url: '/side-menu21',
    templateUrl: 'templates/menu2.html',
    controller: 'menu2Ctrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu2.page', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      }
    }
  })

  .state('menu2.confirmation', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      }
    }
  })

  .state('payment', {
    url: '/page7',
    templateUrl: 'templates/payment.html',
    controller: 'paymentCtrl'
  })

  .state('cash', {
    url: '/page8',
    templateUrl: 'templates/cash.html',
    controller: 'cashCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page5')


});