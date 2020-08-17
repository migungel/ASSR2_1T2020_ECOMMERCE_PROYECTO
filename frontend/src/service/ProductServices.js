import axios from 'axios';

 class ProductServices{
    baseUrl = "http://localhost:8083/product/";
    getAll(){
        return axios.get(this.baseUrl+"findAllProducts").then(res =>res.data);
    }
/*
    save(product){
        return axios.post(this.baseUrl+"addProduct").then(res => res.data);
    }*/
}
export default ProductServices;