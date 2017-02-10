var userTable = require('../dao/userTable');
var reserveTable = require('../dao/reserveTable');

function userHandler() {

    this.completeReserve = function (req, res, next) {
        var user = req.body;
        if(user.password) {
            var userData = {
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                email: user.email,
                password: user.password,
                owner: false
            };
            userTable.create(userData, function(err, user) {
                if (err) {
                  console.log("user created error: ", err);
                } else{
                  console.log("user created success: ", user);
                }
            });
        }
        var reserveData = {
            email: user.email,
            people: parseInt(user.num.split(' ')[0]),
            date: new Date(user.date),
            time: user.time,
            status: 0,
            code: ''
        };
        reserveTable.create(reserveData, function(err, reserve){
            if (err) {
                res.send(err);
            } else{
                res.send(reserve);
            }
        });

    };

    this.getUser = function (req, res, next) {
        var user = req.body;
        var email = user.email;
    };
}

module.exports = new userHandler();
