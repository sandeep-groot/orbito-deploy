import { Modal } from "antd"
import React from "react"

const AdminModal = props => {
  const { isModalOpen, body, title, onCancel } = props

  return (
    <Modal title={title} open={isModalOpen} onCancel={onCancel} footer={null}>
      {body}
    </Modal>
  )
}

export default AdminModal
