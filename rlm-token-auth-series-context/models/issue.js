const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IssueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }, 
  username: {
      type: String
  },
  postDate: {
      type: Date,
      default: Date.now()
  },
  upvote: {
      type: Number,
      default: 0
  },
  downvote: {
      type: Number,
      default: 0
  },
  votedUsers: [{
      type: String
  }]
})

module.exports = mongoose.model("Issue", IssueSchema)

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const issueSchema = new Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   // imgUrl: {
//   //   type: String,
//   //   required: true
//   // },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   }
// })

// module.exports = mongoose.model("Issue", issueSchema)