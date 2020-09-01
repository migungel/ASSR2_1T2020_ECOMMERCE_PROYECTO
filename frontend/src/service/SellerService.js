import axios from 'axios';

 class SellerServices{
    baseUrl = "http://localhost:8083/seller/"; 

    getAll(){
        return axios.get(this.baseUrl + "findAllSeller").then(res => res.data);
    }

    save(seller) {
        return axios.post(this.baseUrl + "addSeller", seller).then(res => res.data);
    }
/*
    getOne(seller){
        //String userclient = "user1";//=client.getUser
        return axios.get(this.baseUrl + '/findCustomer/{'+ "seller1" + '}').then(res => res.data);
    }*/
}
export default SellerServices;