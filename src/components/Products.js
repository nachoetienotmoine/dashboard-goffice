//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import ProductList from './ProductList';

class Products extends Component{
    constructor(){
        super()
        this.state ={
            products : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
    
        //fetch('https://verdumarket8.herokuapp.com/api/products')
        fetch('https://verdumarket8.herokuapp.com/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
            //console.log(movies)
            this.setState({products: products.data.products})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- Product LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Detalle de Productos en BD</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    //console.log(this.state.movies)
                                    this.state.products.map((product,index)=>{
                                        return <ProductList  {...product} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    </React.Fragment>
    )
    }
}
export default Products;