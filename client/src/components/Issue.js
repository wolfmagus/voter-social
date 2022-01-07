import React, { useContext } from 'react'
import { IssueContext } from '../context/IssueProvider'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { UserContext } from '../context/UserProvider'

export default function Issue(props){
  const {issue} = props
  const {handleDelete, handleVote} = useContext(IssueContext)

  const { user } = useContext(UserContext)

  //const postedBy = `Posted By: ${issue.username} on ${issue.postDate.slice(0,10)} @ ${issue.postDate.slice(11,16)}`

  function voting(vote, id, username){
    const voted = issue.votedUsers.includes(username) //.user.includes used to be votedUsers
    console.log(voted)
    voted ? alert("You have already voted")
    :
    handleVote(vote, id)
    window.location.reload()
}

  return (
    <div className="issues">
      {user._id === issue.user && (<i className="delete-btn" onClick={() => handleDelete(issue._id)}>X</i>)}
      <h1>{ issue.title }</h1>
      <hr/>
      <p>{ issue.description }</p>
      <hr/>
      {/* <p className="posted-by">{postedBy}</p> */}
      <div className="votes">
            <i style={{color: "green"}} onClick={() => voting("upvote", issue._id, user.username)}>⬆</i>
            <p>{issue.upvote}</p>
            <i style={{color: "red"}} onClick={() => voting("downvote", issue._id, user.username)}>⬇</i>
            <p>{issue.downvote}</p>
      </div>
      <h1>Comments: </h1>
      <CommentList issueId={issue._id} comments={issue.comments} />
      <CommentForm issueId={issue._id}/>
    </div>
  )
}

// import React from 'react'
// import { IssueContext } from '../context/IssueProvider'
// import CommentForm from './CommentForm'
// import CommentList from './CommentList'
// import { UserContext } from '../context/UserProvider'

// export default function Issue(props){
//   const { title, description, _id } = props //removed imgUrl
//   return (
//     <div className="issue">
//       <h1>{ title }</h1>
//       <h3>{ description }</h3>
//       {/* <img src={imgUrl} alt="issue image" width={300}/> */}
//     </div>
//   )
// }

