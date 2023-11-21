import React from 'react'
import Button from 'react-bootstrap/esm/Button'

export default function Reviews() {
  return (
    <>
        <h5>Persons Name</h5>
        <p>Review content blah blah blah</p>
        {/* need to check if logged in and if it's there review, then show/hide the buttons */}
        <Button variant='primary'>Edit</Button>
        <Button variant='danger'>Delete</Button>
    </>
  )
}
