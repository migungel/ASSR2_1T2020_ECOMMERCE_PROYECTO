import React from 'react';
import SellerServices from './service/SellerService';
import {Button} from 'primereact/button'
export class Registrarse extends React.Component{
    constructor(){
        super();
        this.state={
            seller:{
                user:'',
                mail:'',
                passwd:'',
                phone:'',
                direccion:'',
                productList:[1,2]
            }
        };
        this.sellerServices= new SellerServices();
        this.save=this.save.bind(this);
      }

      save(){
          this.sellerServices.save(this.state.seller).then(data => {
            this.seState({
                seller:{
                    user:'',
                    mail:'',
                    passwd:'',
                    phone:'',
                    direccion:'',
                    productList:[1,2]
                }
            });
            console.log(data);
        })
      }
    
      render(){
        return(
            <div className="contact-wthree">
                <form id="seller-form"action="http://localhost:8080/">
                    
                    <h3>Paso 1 :</h3>
                    <div className="form-w3step1">
                        <input type="email" className="email agileits-btm" name="Email" placeholder="Email" required="" 
                            value={this.state.seller.mail} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let seller = Object.assign({},prevState.seller);
                                    seller.mail=val;
                                    return {seller};
                                })}
                            }/> 
                    </div> 
                    <h3>Paso 2 :</h3>
                    <div className="form-w3step1">  
                        <input type="text" name="User Name" placeholder="Username" required="" 
                            value={this.state.seller.user} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let seller = Object.assign({},prevState.seller);
                                    seller.user=val;
                                    return {seller};
                                })}
                            }/>
                        <input type="password" name="Password" placeholder="Password" required="" 
                            value={this.state.seller.passwd} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let seller = Object.assign({},prevState.seller);
                                    seller.passwd=val;
                                    return {seller};
                                })}
                            }/>
                    </div>
                    <h3>Paso 3 :</h3>
                    <div className="form-w3step1 w3ls-formrow">
                        <input type="text" name="Number" placeholder="Número de Teléfono" required="" 
                            value={this.state.seller.phone} 
                            onChange={(e) => {
                                let val = e.target.value;
                                this.setState(prevState => {
                                    let seller = Object.assign({},prevState.seller);
                                    seller.phone=val;
                                    return {seller};

                                })}
                            }/>
                    </div>
                    <h4>Paso 4 :</h4>
                    <div className="tipo">
                        <p>Tipo:
                            Usuario <input type = "radio" name = "ice" value = "usuario"/>  
                            Vendedor <input type = "radio" name = "ice" value = "vendedor"/> 
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
