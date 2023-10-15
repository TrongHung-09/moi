import axios from "axios";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = (props) => {

    const { dataDelete, showModalDelete, setShowModalDelete, listProduct, setListProduct } = props

    const handleClose = () => {
        setShowModalDelete(false)
    }

    const handleSubmitDeleteProduct = async () => {
        await axios.delete(`http://localhost:8080/product/delete/${dataDelete.id}`)
        const newList = listProduct.filter(produce => produce.id !== dataDelete.id)
        setListProduct(newList)
        handleClose()
    }

    return (
        <>
            <Modal
                show={showModalDelete}
            >
                <Modal.Header closeButton>
                    <Modal.Title>DELETE Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Bạn chắc chắn muốn xóa product:
                        <br />
                        {dataDelete.produce_name}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-danger" onClick={() => handleSubmitDeleteProduct()}>Delete</Button>
                    <Button className="btn-secondary" onClick={() => handleClose()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal;