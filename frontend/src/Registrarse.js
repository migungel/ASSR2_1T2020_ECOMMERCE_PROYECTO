import React from 'react';

export class Products extends React.Component{
    render(){
        return(
            <div class="contact-wthree">
                <form action="form.txt" method="post" name="formulario1">
                    <h3>Paso 1 :</h3>
                    <div class="form-w3step1">
                        <input type="text" name="Name" placeholder="Nombre" required=""/> 
                        <input type="email" class="email agileits-btm" name="Email" placeholder="Email" required=""/> 
                    </div> 
                    <h3>Paso 2 :</h3>
                    <div class="form-w3step1">  
                        <input type="text" name="User Name" placeholder="Username" required=""/>
                        <input type="password" name="Password" placeholder="Password" required=""/>
                    </div>
                    <h3>Paso 3 :</h3>
                    <div class="form-w3step1 w3ls-formrow">
                        <input type="text" name="Number" placeholder="Número de Teléfono" required=""/> 
                        <input type="text" class="agileits-btm" name="Your Address" placeholder="Direccion" required=""/>
                    </div>
                    <h4>Paso 4 :</h4>
                    <div class="tipo">
                        <p>Tipo:
                            Usuario <input type = "radio" name = "ice" value = "usuario"/>  
                            Vendedor <input type = "radio" name = "ice" value = "vendedor"/> 
                        </p>
                    </div>
                        
                    <div class="agileits-row2 w3ls-formrow2">
                        <input type="checkbox" id="brand2" value=""/>
                        <label for="brand2"><span></span>Aceptar Terminos y Condiciones</label> 
                    </div>  
                    <input type="submit" value="ENVIAR" id="btn_enviar"/>
                </form>
			</div>
        );
    }


    
	enviar_formulario(){
	   document.formulario1.submit()
	}
	
}
