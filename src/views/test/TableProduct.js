import axios from "axios";
import React from "react";
import ReactPaginate from "react-paginate";

const TableProduct = (props) => {

    const { listProduct, handleBtnDelete, handleBtnDetail, handleBtnUpdate } = props

    const handlePageClick = () => {

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
                                    <td>{product.brand_name}</td>
                                    <td>{product.subcate_name}</td>
                                    <td>{product.sell_price}</td>
                                    <td>{product.status_name}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning" onClick={() => handleBtnUpdate(product)}>Edit</button>
                                        <button type="button" className="btn btn-success" onClick={() => handleBtnDetail(product)}>Detail</button>
                                        <button type="button" className="btn btn-warning" onClick={() => handleBtnDelete(product)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={10}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default TableProduct;