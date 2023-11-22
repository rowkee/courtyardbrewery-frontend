import React from 'react'

export default function ReviewAddModal() {
  return (
    <>
      <Button variant="primary"onClick={handleShow}>See Reviews</Button>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title} - {abv}%</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>    
  )
}
