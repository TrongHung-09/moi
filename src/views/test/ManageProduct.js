import axios from "axios";
import React, { useEffect, useState } from "react";
import TableProduct from "./TableProduct";
import AddModal from "./AddModal";
import { Button } from "react-bootstrap";
import DeleteModal from "./DeleteModal";
import DetailModal from "./DetailModal";
import UpdateModal from "./UpdateModal";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const ManageProduct = () => {

    const URL = 'http://localhost:8080/'

    const [brands, setBrands] = useState([])
    const [subCategories, setSubCategories] = useState([])
    const [statuss, setStatuss] = useState([])
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    const [showModal, setShowModal] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModalDetail, setShowModalDetail] = useState(false)
    const [showModalUpdate, setShowModalUpdate] = useState(false)

    // const [nameProduct, setNameProduct] = useState('');
    // const [color, setColor] = useState('');
    // const [quantity, setQuantity] = useState('');
    // const [sellPrice, setSellPrice] = useState('');
    // const [originPrice, setOriginPrice] = useState('');
    // const [brandId, setBrandId] = useState(1);
    // const [subCategoryId, setSubCategoryId] = useState(1);

    const [dataDelete, setDataDelete] = useState({})
    const [dataDetail, setDataDetail] = useState({})
    const [dataUpdate, setDataUpdate] = useState({})

    /**Call api */
    const fetchCategories = async () => {
        let res = await axios.get(URL + 'cate/')
        setCategories(res.data)
    }

    const fetchProduct = async () => {
        let res = await axios.get(URL + 'product/')
        setProducts(res.data)
    }

    const fetchBrands = async () => {
        let res = await axios.get(URL + 'brand/')
        setBrands(res.data)
    }

    const fetchSubCategories = async () => {
        let res = await axios.get(URL + 'subcate/')
        setSubCategories(res.data)
    }

    const fetchStatuss = async () => {
        let res = await axios.get(URL + 'status/')
        setStatuss(res.data)
    }

    const [nameProduct, setNameProduct] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [statusId, setStatusId] = useState('1');
    const [brandId, setBrandId] = useState('1');
    const [categoryId, setCategoryId] = useState('1');

    const [listSearch, setListSearch] = useState([]);
    // const [searchParam, setSearchParam] = useState({
    //     productName: '',
    //     sellPrice: '',
    //     categoryId: '1',
    //     statusId: '1',
    //     brandId: '1',
    // });

    const alertComfirm = (title, mess, icon) => {
        Swal.fire({
            position: 'top-end',
            icon: icon,
            title: title,
            text: mess,
            showConfirmButton: false,
            timer: 1500
        })
    }

    const fetchSearch = async () => {

        console.log("check<><><><><><>")
        console.log("nameProduct: ", nameProduct)
        console.log("sellPrice: ", sellPrice)
        console.log("categoryId: ", categoryId)
        console.log("statusId: ", statusId)
        console.log("brandId: ", brandId)

        // Hùng
        let res = await axios.get(`http://localhost:8080/product/search?productName=${nameProduct}&sellPrice=${sellPrice}&CategoryId=${categoryId}&statusId=${statusId}&brandId=${brandId}`)
        console.log(res)

        // Cường
        // let res = await axios.get(URL + `product/search`, {
        //     params: searchParam
        // })
        console.log(res.data)

        setListSearch(res.data)

    }

    useEffect(() => {
        fetchBrands();
        fetchSubCategories();
        fetchStatuss();
        fetchCategories();
        fetchProduct();
    }, [])

    const handleBtnDelete = (product) => {
        setShowModalDelete(true)
        setDataDelete(product)
    }

    const handleBtnDetail = (product) => {
        setShowModalDetail(true)
        setDataDetail(product)
    }

    const handleBtnUpdate = (product) => {
        setShowModalUpdate(true)
        setDataUpdate(product)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        fetchSearch()
    }



    return (
        <>
            <div className="container container-fluid p-0">
                <form action="" method="post" >
                    <div className="row m-0 p-0">
                        <div className="form-group col-sm-2 p-1 ml-0">
                            <label>Name</label>
                            <input type="text" className="form-control"
                                // value={searchParam.productName} onChange={(e) => setSearchParam({ ...searchParam, productName: e.target.value })}
                                value={nameProduct} onChange={(e) => setNameProduct(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Price</label>
                            <input type="text" className="form-control"
                                // value={searchParam.sellPrice} onChange={(e) => setSearchParam({ ...searchParam, sellPrice: e.target.value })}
                                value={sellPrice} onChange={(e) => setSellPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Brand</label>
                            <select className="form-control"
                                // value={searchParam.brandId} onChange={(e) => setSearchParam({ ...searchParam, brandId: e.target.value })}
                                value={brandId} onChange={(e) => setBrandId(e.target.value)}
                            >
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
                            <select className="form-control"
                                // value={searchParam.categoryId} onChange={(e) => setSearchParam({ ...searchParam, categoryId: e.target.value })}
                                value={categoryId} onChange={(e) => setCategoryId(e.target.value)}
                            >
                                {
                                    categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.cate_name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group col-sm-2 p-1">
                            <label>Status</label>
                            <select className="form-control"
                                // value={searchParam.statusId} onChange={(e) => setSearchParam({ ...searchParam, statusId: e.target.value })}
                                value={statusId} onChange={(e) => setStatusId(e.target.value)}
                            >
                                {
                                    statuss.map((status) => (
                                        <option key={status.id} value={status.id}>
                                            {status.status_name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group col-sm-2 p-1 mt-4">
                            <button className="btn btn-success" onClick={(e) => handleSearch(e)}>Search</button>
                        </div>
                    </div>
                </form>
                <Button onClick={() => setShowModal(!showModal)} className="btn-success">Add product</Button>
                <TableProduct
                    listProduct={listSearch.length > 0 ? listSearch : products}
                    setListProduct={setProducts}
                    handleBtnDelete={handleBtnDelete}
                    handleBtnDetail={handleBtnDetail}
                    handleBtnUpdate={handleBtnUpdate}
                />
                <AddModal
                    alertComfirm={alertComfirm}
                    listProduct={products}
                    setListProduct={setProducts}
                    listBrand={brands}
                    listSubCategory={subCategories}
                    show={showModal}
                    setShow={setShowModal}
                    fetchProduct={fetchProduct}
                />
                <DeleteModal
                    dataDelete={dataDelete}
                    showModalDelete={showModalDelete}
                    setShowModalDelete={setShowModalDelete}
                    listProduct={products}
                    setListProduct={setProducts}
                />
                <DetailModal
                    show={showModalDetail}
                    setShow={setShowModalDetail}
                    dataDetail={dataDetail}
                />
                <UpdateModal
                    show={showModalUpdate}
                    setShow={setShowModalUpdate}
                    dataUpdate={dataUpdate}
                    listProduct={products}
                    setListProduct={setProducts}
                    listBrand={brands}
                    listSubCategory={subCategories}
                    listStatus={statuss}
                    fetchProduct={fetchProduct}
                />
                {/* <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                /> */}
                <ToastContainer />
            </div>
        </>
    )
}

export default ManageProduct;