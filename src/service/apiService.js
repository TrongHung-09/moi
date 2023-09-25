import axios from "axios"

const getAllProduct = () => {
    axios.get('http://localhost:8080/product/')
}

export { getAllProduct };