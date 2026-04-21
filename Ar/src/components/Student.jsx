import React from 'react'

function Student({name,course,marks}) {
  return (
    <div id = "card">
      <h1> {name}</h1>
      <h2>Course : {course}</h2>
      <h2>marks: {marks}</h2>
    </div>
  )
}

export default Student
