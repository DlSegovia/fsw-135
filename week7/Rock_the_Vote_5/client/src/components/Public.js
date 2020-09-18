import React, { useContext } from 'react'
import IssueList from './IssueList.js'
import { UserContext } from '../context/UserProvider.js'


export default function Public(){
  const { 
    user: { 
      username 
    }, 
    allIssues, getAllIssues
  } = useContext(UserContext)
  console.log(allIssues)
  allIssues.length <= 0? getAllIssues() : console.log(allIssues)
  return (
    <div className="public">
    <h3>Your Issues</h3>
      <IssueList issues = {allIssues}/>
    </div>
  )
}