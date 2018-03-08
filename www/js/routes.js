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

  .state('a.payment', {
    url: '/page7',
    templateUrl: 'templates/payment.html',
    controller: 'paymentCtrl'
  })

  .state('cash', {
    url: '/page8',
    templateUrl: 'templates/cash.html',
    controller: 'cashCtrl'
  })

  .state('submenu1', {
    url: '/page9',
    templateUrl: 'templates/submenu1.html',
    controller: 'submenu1Ctrl'
  })

  .state('submenu2', {
    url: '/page10',
    templateUrl: 'templates/submenu2.html',
    controller: 'submenu2Ctrl'
  })

  .state('news', {
    url: '/page11',
    templateUrl: 'templates/news.html',
    controller: 'newsCtrl'
  })

  .state('profile', {
    url: '/page12',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

$urlRouterProvider.otherwise('/page4')


});