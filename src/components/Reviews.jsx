import React from 'react'
// import Button from 'react-bootstrap/esm/Button'

export default function Reviews({review}) {
  const {title, review_content} = review
  return (
    <>
        <h5>{title}</h5>
        <p>{review_content}</p>
        {/* need to check if logged in and if it's there review, then show/hide the buttons */}
        {/* <Button variant='primary'>Edit</Button>
        <Button variant='danger'>Delete</Button> */}
    </>
  )
}
