import React, {Component} from 'react';
//Importar nuestro componente
import Category from './Category';
import {useEffect, useState} from 'react';


function CategoriesInDb(){
    
    const [ categoriesInDb, setCategoriesInDb ] = useState([])
    
    useEffect(() => {
        console.log('%Categories', 'color: red');
    
        fetch('https://verdumarket8.herokuapp.com/api/products')
        .then(response => response.json())
        .then(data => {
            setCategoriesInDb(data.data.countByCategory)
        })
        .catch(error => console.log(error));
    }, [])

    return (
        <React.Fragment>
            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4 " >
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800 titulo">Categorias</h5>
                    </div>
                    <div className="card-body fondoCaja">
                        <div  className="row">
                            {
                                //console.log(this.state.genresList)
                                categoriesInDb.map((category,index)=>{
                                    return  <Category  {...category}  key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}

// class CategoriesInDb extends Component{
    
//     constructor(){
//         super()
//         this.state ={
//             categoryList : []
//         }
//     }
//     //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
//     //Montaje 
//     componentDidMount(){
//         fetch('https://verdumarket8.herokuapp.com/api/products')
//         .then(respuesta =>{
//             return respuesta.json()
//         })
//         .then(categories =>{
            
//             this.setState({categoryList: categories.data.countByCategory})
//         })
//         .catch(error => console.log(error))

//     }




//     render(){
//         return (
//             <React.Fragment>
//                 {/*<!-- Genres in DB -->*/}
//                 <div className="col-lg-6 mb-4">						
//                     <div className="card shadow mb-4 " >
//                         <div className="card-header py-3">
//                             <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Productos por Categoria</h6>
//                         </div>
//                         <div className="card-body fondoCaja">
//                             <div  className="row">
//                                 {
//                                     //console.log(this.state.genresList)
//                                     this.state.categoryList.map((category,index)=>{
//                                         return  <Category  {...category}  key={index} />
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
    
//     </React.Fragment>
//     )
//     }
// }
export default CategoriesInDb;
