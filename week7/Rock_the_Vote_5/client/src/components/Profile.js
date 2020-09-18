import React, { useContext } from 'react'
import IssueForm from './IssueForm.js'
import IssueList from './IssueList.js'
import { UserContext } from '../context/UserProvider.js'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addIssue, 
    issues,
    allIssues, 
    getUserIssues
  } = useContext(UserContext)
  console.log(allIssues)
  // allIssues.length <= 0? getUserIssues() : console.log(allIssues)
if(allIssues.length <= 0){getUserIssues()}
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Issue</h3>
      <IssueForm addIssue={addIssue}/>
      <h3>Your Issues</h3>
      <IssueList issues = {issues}/>
    </div>
  )
}