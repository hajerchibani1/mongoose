const express = require("express");
const personne = require("../schema/person");
const userRouter = express.Router;

//get all person
userRouter.get("/get", function (req, res) {
  const result = personne.find();
  try {
    res.send(result);
  } catch (error) {}
});
//create person
userRouter.post("/create", function (req, res) {
  const result = new personne({
    name: req.body.name,
    age: req.body.age,
    favoriteFoods: req.body.favoriteFoods,
  });
  try {
    res.send(result);
  } catch (error) {}
});
//chercher les personnes by "favoritefood"
userRouter.get("/get", function (req, res) {
  const result = personne.findOne({ favoriteFoods: "pizza" });
  try {
    res.send(result);
  } catch (error) {}
});
//chercher personnes by id
userRouter.get("/get", function (req, res) {
  const result = personne.findById({ _id: id });
  try {
    res.send(result);
  } catch (error) {}
});
//chercher des personnes Using model.findOneAndUpdate()
userRouter.get("/get", function (req, res) {
  const result = personne.findOneAndUpdate({ _id: id });
  try {
    res.send(result);
  } catch (error) {}
});
//chercher des personne  by findByIdAndRemove
userRouter.get("/get", function (req, res) {
  const result = personne.findByIdAndRemove({ _id: id });
  try {
    res.send(result);
  } catch (error) {}
});
//remove  personnes by remove({ name: 'Eddard Stark' })
userRouter.get("/get", function (req, res) {
  const result = personne.remove({ name: "maissa" });
  try {
    res.send(result);
  } catch (error) {}
});
module.exports = userRouter;
