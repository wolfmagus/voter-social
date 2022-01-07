import React, { useContext, useState } from 'react'
import { IssueContext } from '../context/IssueProvider'
import { UserContext } from '../context/UserProvider'
//A function that controls what the form is doing and how it looks
export default function Comment(props){
    //Set up state and set up props with issueId property
    const {  issueId } = props
    const { setComments, addComment} = useContext(IssueContext)
    const [comment, setComment] = useState('')

const {user: { username }} = useContext(UserContext)
//Code that runs when changes are made
function handleChange(e){
    const {name, value} = e.target
    setComments(prevInputs => ({
        ...prevInputs,
      [name]: value,
      commenter: username,
      issue: issueId
    }))
    setComment(value)
  }
//What happens when the submit button is pressed on a form
  function handleSubmit(e){
    e.preventDefault()
    addComment(comment)
    setComment('')
}
  return (
    <form onSubmit={handleSubmit} className="add-comment-form">
      <input
        type="text" 
        name="comment" 
        value={comment} 
        onChange={handleChange} 
        placeholder="Comment"/>
      <button>Comment</button>
    </form>
  )
}