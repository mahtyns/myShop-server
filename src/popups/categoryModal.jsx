import React from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalContainer, ModalContent, ModalActions } from './modalStylings'
import { products } from '../data'

const categoryModal = props => {
  return (
      <Modal>
          <ModalContainer>
              <ModalHeader></ModalHeader>
              <ModalContent></ModalContent>
          </ModalContainer>
      </Modal>
    )
}

categoryModal.propTypes = {}

export default categoryModal