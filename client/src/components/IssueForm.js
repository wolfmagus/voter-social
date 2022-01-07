import React, { useContext } from 'react'
import { IssueContext } from '../context/IssueProvider'
export default function IssueForm(props){

  const { addIssue } = props
  const {inputs, setInputs, initInputs} = useContext(IssueContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description } = inputs
  return (
    <form onSubmit={handleSubmit} className="add-issue-form">
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <button>Add Issue</button>
    </form>
  )
}

// import React, { useState } from 'react'

// const initInputs = {
//   title: "",
//   description: "",
//   // imgUrl: ""
// }

// export default function IssueForm(props){
//   const [inputs, setInputs] = useState(initInputs)
//   const { addIssue } = props

//   function handleChange(e){
//     const {name, value} = e.target
//     setInputs(prevInputs => ({
//       ...prevInputs,
//       [name]: value
//     }))
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     addIssue(inputs)
//     setInputs(initInputs)
//   }

//   const { title, description } = inputs //removed imgUrl
//   return (
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text" 
//         name="title" 
//         value={title} 
//         onChange={handleChange} 
//         placeholder="Title"/>
//       <input 
//         type="text" 
//         name="description" 
//         value={description} 
//         onChange={handleChange} 
//         placeholder="Description"/>
//       {/* <input 
//         type="text" 
//         name="imgUrl" 
//         value={imgUrl} 
//         onChange={handleChange} 
//         placeholder="Image Url"/> */}
//       <button>Add Issue</button>
//     </form>
//   )
// }

