const Product = require("../models/produModel.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const product = new Product({
    nom: req.body.nom,
    description:req.body.description,
    prix:req.body.prix
  });
  product
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  product.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  App.findById(req.params.productId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving product with id " + req.params.productId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  Product.findByIdAndUpdate(
    req.params.productId,
    {
      nom: req.body.nom,
      description: req.body.description,
      prix: req.body.prix

    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.productId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.product,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.productID,
      });
    });
};

exports.delete = (req, res) => {product.findByIdAndRemove(req.params.productID)

  .then((data) => {
    if (!data) {
      // Delete a message with the specified  in the request
      return res.status(404).send({
        message: "Message not found with id " + req.params.productID

        });
      }
      res.send({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.productID,
      });
    });
};
