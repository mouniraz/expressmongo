const User = require("../models/model.js");

// Create and Save a new Message
exports.create = (req, res) => {
  const user = new User({
    name: req.body.name,
    email:req.body.email
  });
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
};

// Retrieve all messages from the database.
exports.findAll = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
  App.findById(req.params.userId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving message with id " + req.params.userId,
      });
    });
};

// Update a message identified by the messageId in the request
exports.update = (req, res) => {
  User.findByIdAndUpdate(
    req.params.userId,
    {
      name: req.body.name,
      email: req.body.email
    },
    { new: true }
  )
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Message not found with id " + req.params.userId,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Message not found with id " + req.params.user,
        });
      }
      return res.status(500).send({
        message: "Error updating message with id " + req.params.userID,
      });
    });
};

exports.delete = (req, res) => {User.findByIdAndRemove(req.params.userID)

  .then((data) => {
    if (!data) {
      // Delete a message with the specified  in the request
      return res.status(404).send({
        message: "Message not found with id " + req.params.userID

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
        message: "Could not delete message with id " + req.params.userID,
      });
    });
};
