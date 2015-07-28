
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function saveNewCase(data) {
    var Case = Parse.Object.extend('Case');
    var newCase = new Case(data);
    return newCase.save();
}

Parse.Cloud.define('submitCase', function(request, response) {

  var userQuery = new Parse.Query(Parse.User);
  userQuery.equalTo('email', request.params.email);
  userQuery.first({
    success: function(user) {
      if (!user) {
        user = new Parse.User();
        user.set('username', request.params.email);
        user.set('password', guid());
        user.set('email', request.params.email);
        user.set('fullName', request.params.fullName);
        user.signUp(null, {
          success: function(user) {

            saveNewCase({
              createdBy: user,
              description: request.params.description,
              tel: request.params.tel
            }).then(function(newCase) {
              response.success(newCase);
            }, function (error) {
              response.error(error);
            });

            response.success();
          },
          error: function(error) {
            response.error(error);
          }
        });
      } else {

        saveNewCase({
          createdBy: user,
          description: request.params.description,
          tel: request.params.tel
        }).then(function(newCase) {
          response.success(newCase);
        }, function (error) {
          response.error(error);
        });

      }

    },
    error: function(error) {
      response.error(error);
    }
  });

});
