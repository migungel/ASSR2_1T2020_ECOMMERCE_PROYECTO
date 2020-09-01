import React from 'react';
import SellerServices from './service/SellerService';
import CustomerServices from './service/CustomerService';
import {Button} from 'primereact/button'
export class Registrarse extends React.Component{
    constructor(){
        super();
        this.state={
            userx:{
                user:'',
                mail:'',
                passwd:'',
                phone:'',
                direccion:'',
            },
            option:''
        };
        this.sellerServices= new SellerServices();
        this.customerServices=new CustomerServices();
        this.save=this.save.bind(this);
      }

      save(){
          if (this.state.option==="usuario"){
            this.customerServices.save(this.state.userx).then(data => {
                this.seState({
                    userx:{
                        user:'',
                        mail:'',
                        passwd:'',
                        phone:'',
                        direccion:'',
                        tarjeta:'',
                        numeroTarjeta:''
                    }
                });
            })
         }else{
            this.sellerServices.save(this.state.userx).then(data => {
                this.seState({
                    userx:{
                        user:'',
                        mail:'',
                        passwd:'',
                        phone:'',
                        direccion:'',
                        productList:[]
                    }
                });
            })
         }
      }
    
      render(){
        return(
            <div className="contact-wthree">
                <form id="userx-form"action="http://localhost:8080/">
                    
                    <h3>Paso 1 :</h3>
                    <div className="form-w3step1">
                        <input type="email" className="email agileits-btm" name="Email" placeholder="Email" required="" 
                            value={this.state.userx.mail} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let userx = Object.assign({},prevState.userx);
                                    userx.mail=val;
                                    return {userx};
                                })}
                            }/> 
                    </div> 
                    <h3>Paso 2 :</h3>
                    <div className="form-w3step1">  
                        <input type="text" name="User Name" placeholder="Username" required="" 
                            value={this.state.userx.user} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let userx = Object.assign({},prevState.userx);
                                    userx.user=val;
                                    return {userx};
                                })}
                            }/>
                        <input type="password" name="Password" placeholder="Password" required="" 
                            value={this.state.userx.passwd} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let userx = Object.assign({},prevState.userx);
                                    userx.passwd=val;
                                    return {userx};
                                })}
                            }/>
                    </div>
                    <h3>Paso 3 :</h3>
                    <div className="form-w3step1 w3ls-formrow">
                        <input type="text" name="Number" placeholder="Número de Teléfono" required="" 
                            value={this.state.userx.phone} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let userx = Object.assign({},prevState.userx);
                                    userx.phone=val;
                                    return {userx};

                                })}
                            }/>
                    </div>
                    <h4>Paso 4 :</h4>
                    <div className="tipo">
                        <p>Tipo:
                            Usuario <input type = "radio" name = "ice" value = "usuario"
                            onChange={(e) =>{
                                let val=e.target.value;
                                this.setState(prevOpt => {
                                    let option = Object.assign('',prevOpt.option);
                                    option=val;
                                    return{option};
                            })}
                            }/>  
                            Vendedor <input type = "radio" name = "ice" value = "vendedor"
                            onChange={(e) =>{
                                let val=e.target.value;
                                this.setState(prevOpt => {
                                    let option = Object.assign('',prevOpt.option);
                                    option=val;
                                    return{option};
                            })}
                            }/> 
                        </p>
                    </div>
                        
                    <div className="agileits-row2 w3ls-formrow2">
                        <input type="checkbox" id="brand2" value=""/>
                        <label htmlFor="brand2"><span></span>Aceptar Terminos y Condiciones</label> 
                    </div>  
                    <Button  name="ENVIAR" id="btn_enviar" onClick={this.save} href="http://localhost:8080/"></Button>
                    
                </form>
			</div>
        );
    }
}
