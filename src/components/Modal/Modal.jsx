import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function ModalComp({ show, close, btn, uid, title, body, btntext }) {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong>{body}</strong> {uid}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={btn}>
          {btntext}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
