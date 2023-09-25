import axios from "axios";
import React, { useEffect, useState } from "react";
import TableProduct from "./TableProduct";
import AddModal from "./AddModal";
import UpdateModal from "./UpdateModal";

const ManageProduct = () => {
    const URL = 'http://localhost:8080/'

    /**4 cbo */
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [statuss, setStatuss] = useState([])
    const [categories, setCategories] = useState([])
    const [subCategories, setSubCategories] = useState([])


    const [show, setShow] = useState(false)

    /**call api */

    const fetchProduct = async () => {
        let res = await axios.get(URL + 'product/');
        setProducts(res.data)
    }

    const fetchBrand = async () => {
        let res = await axios.get(URL + 'brand/');
        setBrands(res.data)
    }

    const fetchStatus = async () => {
        let res = await axios.get(URL + 'status/');
        setStatuss(res.data)
    }

    const fetchCategory = async () => {
        let res = await axios.get(URL + 'cate/');
        setCategories(res.data)
    }

    const fetchSubCategory = async () => {
        let res = await axios.get(URL + 'subcate/');
        setSubCategories(res.data)
    }

    const [productCUD, setProductCUD] = useState({})



    /**useEffect */
    useEffect(() => {
        fetchProduct();
        fetchBrand();
        fetchStatus();
        fetchCategory();
        fetchSubCategory();
    }, [])

    // const handleAdd = async (product) => {
    //     let res = await axios.post(`product/add`, {
    //         produce_name: "",
    //         subcate_id: 1,
    //         color: "",
    //         quantity: 100,
    //         sell_price: 19.4,
    //         origin_price: 10.9,
    //         brand_id: 2
    //     }
    //     );
    // }

    return (
        <>
            <div className="container container-fluid p-0">
                <form action="" method="post" >
                    <div className="row m-0 p-0">
                        <div className="form-group col-sm-2 p-1 ml-0">
                            <label>Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Price</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Brand</label>
                            <select className="form-control" value={brands.id}>
                                {
                                    brands.map((brand) =>
                                    (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.brand_name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Category</label>
                            <select className="form-control">
                                {
                                    subCategories.map((subCategory) => (
                                        <option key={subCategory.id}>
                                            {subCategory.sub_cate_name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Status</label>
                            <select className="form-control">
                                {
                                    statuss.map((status) => (
                                        <option key={status.id}>
                                            {status.status_name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group col-sm-2 p-1 mt-4">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <AddModal
                listProduct={products}
                setListProduct={setProducts}
                listBrand={brands}
                listSubCategories={subCategories}
            />
            <TableProduct
                listProduct={products}
                listBrand={brands}
                listSubCategories={subCategories}
                listStatus={statuss}
            /> */}
        </>
    )
}

export default ManageProduct;