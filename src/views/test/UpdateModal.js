import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const UpdateModal = (props) => {
    const { show, setShow, dataUpdate, listProduct, listBrand, listSubCategory, listStatus } = props

    const [nameProduct, setNameProduct] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [originPrice, setOriginPrice] = useState('');
    const [brandId, setBrandId] = useState(1);
    const [subCategoryId, setSubCategoryId] = useState(1);
    const [statusId, setStatusId] = useState(1);

    const handelClose = () => {
        setNameProduct('')
        setColor('')
        setQuantity('')
        setSellPrice('')
        setOriginPrice('')
        setBrandId(1)
        setSubCategoryId(1)
        setStatusId(1)
        setShow(false)
    }

    useEffect(() => {
        if (dataUpdate !== null) {
            setNameProduct(dataUpdate.produce_name)
            setColor(dataUpdate.color)
            setQuantity(dataUpdate.quantity)
            setSellPrice(dataUpdate.sell_price)
            setOriginPrice(dataUpdate.origin_price)
            setBrandId(dataUpdate.brand_id)
            setSubCategoryId(dataUpdate.subcate_id)
            setStatusId(dataUpdate.status_id)
        }
    }, [dataUpdate])

    const handleSubmitUpdateProduct = async () => {
        let id = dataUpdate.id;
        await axios.put(`http://localhost:8080/product/update/${id}`,
            {
                produce_name: nameProduct,
                subcate_id: subCategoryId,
                color,
                quantity,
                sell_price: sellPrice,
                origin_price: originPrice,
                brand_id: brandId,
                status_id: statusId
            })
        props.fetchProduct()
        handelClose()
    }

    return (
        <>
            <Modal
                show={show}
            >
                <Modal.Header>
                    <Modal.Title>Update product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" method="post">
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Name</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control"
                                    value={nameProduct}
                                    onChange={(e) => setNameProduct(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Color</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Quantity</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Sell price</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={sellPrice}
                                    onChange={(e) => setSellPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Origin price</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
                                    value={originPrice}
                                    onChange={(e) => setOriginPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Brand name</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={brandId} onChange={(e) => setBrandId(e.target.value)}>
                                    {
                                        listBrand && listBrand.length > 0 && listBrand.map((brand) => {
                                            return (
                                                <option key={brand.id} value={brand.id}>{brand.brand_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Subcategory</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={subCategoryId} onChange={(e) => setSubCategoryId(e.target.value)}>
                                    {
                                        listSubCategory && listSubCategory.length > 0 && listSubCategory.map((subCategory) => {
                                            return (
                                                <option key={subCategory.id} value={subCategory.id}>{subCategory.sub_cate_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Status</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={statusId} onChange={(e) => setStatusId(e.target.value)}>
                                    {
                                        listStatus && listStatus.length > 0 && listStatus.map((status) => {
                                            return (
                                                <option key={status.id} value={status.id}>{status.status_name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleSubmitUpdateProduct()} className="btn-success">Save change</Button>
                    <Button onClick={() => handelClose()} className="btn-secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;