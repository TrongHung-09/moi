import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const AddModal = (props) => {

    const { listProduct, listBrand, listSubCategory, show, setShow } = props

    // const [showModal, setShow] = useState(show)

    /**Danh sách biến ô input */
    const [nameProduct, setNameProduct] = useState('');
    const [color, setColor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [originPrice, setOriginPrice] = useState('');
    const [brandId, setBrandId] = useState(1);
    const [subCategoryId, setSubCategoryId] = useState(1);

    const handleAdd = async () => {
        let res = await axios.post(
            'http://localhost:8080/product/add',
            {
                produce_name: nameProduct,
                subcate_id: subCategoryId,
                color: color,
                quantity: quantity,
                sell_price: sellPrice,
                origin_price: originPrice,
                brand_id: brandId
            }
        );
        // const newListProduct = [...listProduct, res.data]
        props.fetchProduct();
        handelClose();
        // window.location.reload();
    }

    const handelClose = () => {
        setShow(false)
        setNameProduct('')
        setColor('')
        setQuantity('')
        setSellPrice('')
        setOriginPrice('')
        setBrandId(1)
        setSubCategoryId(1)
    }

    return (
        <>
            <Modal
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" method="post">
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label text-right">Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control"
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
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-success" onClick={() => handleAdd()}>Save changes</Button>
                    <Button className="btn-secondary" onClick={() => handelClose()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddModal;