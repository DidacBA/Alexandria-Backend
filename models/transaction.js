const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const transactionSchema = new Schema({
  bookId: {
    type: String,
    required: true,
  },
  userThatFrees: {
    type: String,
    required: true,
  },
  userThatHunts: {
    type: ObjectId,
    reference: 'user',
  },
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
