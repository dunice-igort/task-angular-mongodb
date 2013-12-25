var mongoose = require('mongoose')
  , db = require('../db/database')
  , Dashbord = mongoose.model('dashboard')

exports.boot = function (app) {

  app.get('/', function (req, res) {
    res.render('dashb')
  })

  app.get('/list', function (req, res) {
    Dashbord.find(null, null, { sort: { _id: 1 }}, function (err, list, count) {
      if (err) {
        console.log("err find_all", err);
      } else {
        console.log("success find_all", list);
        res.send(list)
      }
    })
  })

  app.post('/', function (req, res) {
    new Dashbord({title: req.body.title }).save(function (err, new_todo, count) {
      if (err) {
        console.log("err new_todo", err);
      } else {
        console.log("success new_todo", new_todo);
        res.send(new_todo)
      }
    });
  })

  app.put('/', function (req, res) {
    Dashbord.update({_id: req.body.id }, {title: req.body.title || '', checkbox: req.body.checkbox, checkbox2: req.body.checkbox2, checkbox3: req.body.checkbox3, radiocheck: req.body.radiocheck || false}, (function (err, todo) {
      if (err) {
        console.log("err update", err);
      } else {
        console.log("success update", todo);
        res.send(200)
      }
    }));
  })

  app.delete('/:id', function (req, res) {
    Dashbord.find({ _id: req.params.id },function (err, todo) {
      if (err) {
        console.log("err find", err);
      } else {
        console.log("success find", todo);
      }
    }).remove(function (err, removed) {
        if (err || !removed) {
          console.log("err find", err);
        } else {
          console.log("success find");
          res.send(200)
        }
      });
  })
}