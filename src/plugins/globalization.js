// install   :      cordova plugin add org.apache.cordova.globalization
// link      :      https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md

angular.module('ngCordova.plugins.globalization', [])

  .factory('$cordovaGlobalization', ['$q', '$cordova', function ($q, $cordova) {

    return {
      getPreferredLanguage: function () {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.getPreferredLanguage(function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            });
        });

        return q.promise;
      },

      getLocaleName: function () {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.getLocaleName(function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            });
        });

        return q.promise;
      },

      getFirstDayOfWeek: function () {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.getFirstDayOfWeek(function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            });
        });

        return q.promise;
      },

      // "date" parameter must be a JavaScript Date Object.
      dateToString: function (date, options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.dateToString(
            date,
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            },
            options);
        });

        return q.promise;
      },

      stringToDate: function (dateString, options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.stringToDate(
            dateString,
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            },
            options);
        });

        return q.promise;
      },

      getDatePattern: function (options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.getDatePattern(
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            },
            options);
        });

        return q.promise;
      },

      getDateNames: function (options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.getDateNames(
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            },
            options);
        });

        return q.promise;
      },

      // "date" parameter must be a JavaScript Date Object.
      isDayLightSavingsTime: function (date) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.isDayLightSavingsTime(
            date,
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            });
        });

        return q.promise;
      },

      numberToString: function (number, options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.numberToString(
            number,
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            },
            options);
        });

        return q.promise;
      },

      stringToNumber: function (numberString, options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.stringToNumber(
            numberString,
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            },
            options);
        });

        return q.promise;
      },

      getNumberPattern: function (options) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.getNumberPattern(
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            },
            options);
        });

        return q.promise;
      },

      getCurrencyPattern: function (currencyCode) {
        var q = $q.defer();

        $cordova.ready().then(function () {
          navigator.globalization.getCurrencyPattern(
            currencyCode,
            function (result) {
              q.resolve(result);
            },
            function (err) {
              q.reject(err);
            });
        });

        return q.promise;
      }
    }
  }]);