import React from 'react'
import Comment from './Comment'

export default function CommentList(props){
// console.log('issue comments',props.comments)
const {comments} = props

  return (
    <div className="comment-list">
      { (comments) ? comments.map(com => (<Comment comment={com} issueId={com.issueId} key={com._id}>{com.comment}</Comment>)) : console.log("fail") }
    </div>
  )
}