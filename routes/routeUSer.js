module.exports = (app) => {
const User = require("../controllers/contUSer.js");
app.post("/createUser", User.create);

app.get("/get-allUser", User.findAll);

app.get("/user/:userId", User.findOne);

app.put("/user/:userId", User.update);

app.delete("/user/:userId", User.delete);}