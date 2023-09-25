import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const FilterSearch = () => {
    const [brands, setBrand] = useState([])
    const [categories, setCategory] = useState([])
    const [status, setStatus] = useState([])

    const loadBrand = async () => {
        let res = await axios.get('http://localhost:8080/brand/')
        setBrand(res.data)
    }

    const loadCategory = async () => {
        let res = await axios.get('http://localhost:8080/cate/')
        setCategory(res.data)
    }

    const loadStatus = async () => {
        let res = await axios.get('http://localhost:8080/status/')
        setStatus(res.data)
    }

    useEffect(() => {
        loadBrand();
        loadCategory();
        loadStatus()
    }, [])

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
                                    categories.map((category) => (
                                        <option key={category.id}>
                                            {category.cate_name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Status</label>
                            <select className="form-control">
                                {
                                    status.map((item) => (
                                        <option key={item.id}>
                                            {item.status_name}
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
        </>
    );
}

export default FilterSearch;