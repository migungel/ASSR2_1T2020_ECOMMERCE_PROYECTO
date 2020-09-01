import axios from 'axios';

 class CustomerService{
    baseUrl = "http://localhost:8083/customer/"; 

    getAll(){
        return axios.get(this.baseUrl + "findAllCustomer").then(res => res.data);
    }

    save(customer) {
        return axios.post(this.baseUrl + "addCustomer", customer).then(res => res.data);
    }
/*
    getOne(seller){
        //String userclient = "user1";//=client.getUser
        return axios.get(this.baseUrl + '/findCustomer/{'+ "seller1" + '}').then(res => res.data);
    }*/
}
export default CustomerService;