import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UpdateModal from "./UpdateModal";
// import DetailModal from "./DetailModal";

const TableProduct = (props) => {

    const listProduct = props.listProduct;

    const { listBrand, listCategories, listSubCategories, listStatus } = props;

    const [id, setId] = useState([])

    // const [listProduct, setListProduct] = useState([])

    // const loadProduct = async () => {
    //     let res = await axios.get(
    //         'http://localhost:8080/product/'
    //     )
    //     setListProduct(res.data, list)
    // }

    // useEffect(() => {
    //     loadProduct();
    //     // console.log(list)
    // }, [])

    const getId = () => {
        setId()
    }

    return (
        <>
            <table className="table table-striped table-bordered mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Brand Name</th>
                        <th>Subcategory</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {listProduct && listProduct.length > 0 &&
                        listProduct.map((product, index) => {
                            return (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.produce_name}</td>
                                    <td>{product.brands[0].brand_name}</td>
                                    <td>{product.subCategory.sub_cate_name}</td>
                                    <td>{product.sell_price}</td>
                                    <td>{product.status.status_name}</td>
                                    <td>
                                        <button type="button" className="btn btn-success" value={product.id}>Detail</button>
                                        {/* <DetailModal
                                            id={product.id}
                                            listBrand={listBrand}
                                            listCategories={listCategories}
                                            listStatus={listStatus}
                                        /> */}
                                        <UpdateModal
                                            id={product.id}
                                            listBrand={listBrand}
                                            listSubCategories={listSubCategories}
                                            listStatus={listStatus}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableProduct;