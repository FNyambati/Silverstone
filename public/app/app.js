angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
/////////////NAVBAR ROUTES//////////////////
    .state('home', {
      url: '/home',
      templateUrl: "/views/home.html"
    })
    .state('info', {
      url: '/info',
      templateUrl: "/views/info.html"
      // controller: "infoCtrl"
    })
    .state('history', {
      url: '/history',
      templateUrl: "/views/history.html",
      controller: "historyCtrl"
    })
    .state('eventsIntro', {
      url: '/eventsIntro',
      templateUrl: "/views/eventsIntro.html"
    })
    .state('experience', {
      url: '/experience',
      templateUrl: "/views/experience.html"
    })
    .state('f1', {
      url: '/f1',
      templateUrl: "/views/formula1.html",
      controller: 'f1Ctrl'
    })
    .state('results', {
      url: '/results',
      templateUrl: "/views/results.html",
      controller: "pastWinnerCtrl"
    })
    .state('faq', {
      url: '/faq',
      templateUrl: "/views/faq.html",
      controller: "faqCtrl"
    })
    .state('contact', {
      url: '/contact',
      templateUrl: "/views/contact.html"
    })
    .state('directions', {
      url: '/directions',
      templateUrl: "/views/directions.html"
    })
    .state('login', {
      url:'/login',
      templateUrl:'/views/login.html',
      controller: 'userCtrl'
    })
    .state('profile', {
      url:'/myProfile',
      templateUrl: '/views/profile.html',
      controller: 'profileCtrl',
      resolve: {
        user: function(userService, $state) {
          return userService.getCurrentUser().then(function(response){
            if(response.status !== 200){
              $state.go('login');
            }
            return response.data;
          });
        }
      }
    })
    .state('hof', {
      url: '/hof',
      templateUrl:'views/hof.html',
      controller: "laptimeCtrl"
    })
    //////////////////ROUTES FOR INFO PAGE///////////////////////
    .state('circut', {
      url:'/circut',
      templateUrl:'/views/circut.html'
    })
    .state('rules', {
      url:'/rules',
      templateUrl:'/views/rules.html'
    })
    /////////////ROUTES FOR EXPERIENCE PAGE /////////////////////
    .state('vip', {
      url:'/vip',
      templateUrl:'/views/vip.html'
    })
    .state('cars', {
      url:'/cars',
      templateUrl:'/views/cars.html',
      controller: 'carCtrl'
    })
    .state('bikes', {
      url:'/bikes',
      templateUrl:'/views/bikes.html',
      controller: 'bikeCtrl'
    })
    ///////////////////ROUTES FOR EVENTS PAGE//////////////////////////
    .state('events', {
      url:'/events',
      templateUrl:'/views/events.html'
    })
    .state('calendar', {
      url:'/calendar',
      templateUrl:'/views/calendar.html',
      controller: 'calendarCtrl'
    })
    .state('planner', {
      url:'/planner',
      templateUrl:'/views/planner.html',
      controller:'carCtrl'

    })
    ///////////OPTIONAL ROUTES FOR RESULTS PAGE IF AMPLE TIME ////////////////////////////
    .state('sportscars', {
      url:'/sportscars',
      templateUrl:'/views/sportscars.html'
    })
    .state('gt', {
      url:'/gt',
      templateUrl:'/views/gt.html'
    });
})

.directive('navbarDir', function() {
  return {
    templateUrl: '/views/navBar.html'
  };
})
.directive('footerDir', function() {
  return {
    templateUrl: '/views/footer.html'
  };
});
