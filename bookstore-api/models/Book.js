const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  price: Number,
  inStock: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
