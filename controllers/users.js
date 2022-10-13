const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", { title: "Sign up to Acebook", layout: "signup" });
  },

  Create: (req, res) => {
    const user = new User(req.body);
    const email = user.email;
    console.log(email);
    user.save((err) => {
      if (err) {
        // let display = "invalid email";
        // res.render("users/new", { message: display });
        throw err;
      }
      res.status(201).redirect("/sessions/new");
    });
  },
};

module.exports = UsersController;
