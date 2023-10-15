import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const DetailModal = (props) => {
    const { show, setShow, dataDetail } = props

    const [nameProduct, setNameProduct] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [originPrice, setOriginPrice] = useState('');
    const [brandName, setBrandName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [statusName, setStatusName] = useState('');

    const handelClose = () => {
        // setNameProduct('')
        setShow(false)
    }

    useEffect(() => {
        if (dataDetail !== null) {
            setNameProduct(dataDetail.produce_name)
            setColor(dataDetail.color)
            setQuantity(dataDetail.quantity)
            setSellPrice(dataDetail.sell_price)
            setOriginPrice(dataDetail.origin_price)
            setBrandName(dataDetail.brand_name)
            setCategoryName(dataDetail.subcate_name)
            setStatusName(dataDetail.status_name)
        }
    }, [dataDetail])

    return (
        <>
            <Modal
                show={show}
            >
                <Modal.Header>
                    <Modal.Title>Detail product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" method="post">
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={nameProduct}
                                    onChange={(e) => setNameProduct(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Color</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Quantity</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Sell price</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={sellPrice}
                                    onChange={(e) => setSellPrice(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Origin price</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={originPrice}
                                    onChange={(e) => setOriginPrice(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Brand name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                    readOnly
                                />
                            </div>

                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Subcategory</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Status</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={statusName}
                                    onChange={(e) => setStatusName(e.target.value)}
                                    readOnly
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handelClose()} className="btn-secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DetailModal;