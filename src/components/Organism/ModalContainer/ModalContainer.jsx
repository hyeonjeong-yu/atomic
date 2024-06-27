import React from 'react'
import ModalHeader from '../../Molecules/ModalHeader/ModalHeader'
import ModalBody from '../../Molecules/ModalBody/ModalBody'
import ModalFooter from '../../Molecules/ModalFooter/ModalFooter'

const ModalContainer = ({
    title,
    contents,
    actions,
    onClose
}) => {
    return (
        <>
        <ModalHeader title={title} onClose={onClose} />
        <ModalBody contents={contents} />
        <ModalFooter actions={actions} />
        </>
    )
}

export default ModalContainer