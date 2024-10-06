module.exports = (app) => {
    const App = require("../controllers/productController.js");
  
    app.post("/createProduct", App.create);
  
    app.get("/get-allProduct", App.findAll);
  
    app.get("/product/:productId", App.findOne);
  
    app.put("/product/:productId", App.update);
  
    app.delete("/product/:productId", App.delete);
  
      
  };