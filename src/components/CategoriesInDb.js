import React from 'react';
//Importar nuestro componente
import Category from './Category';
import Sold from './Sold';
import MostSold from './MostSold'
import {useEffect, useState} from 'react';


function CategoriesInDb(){

    const [ categoriesInDb, setCategoriesInDb ] = useState([])
    const [ dataSelected, setDataSelected ] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setCategoriesInDb(data.countByCategory)
            setDataSelected("categorias")
        })
        .catch(error => console.log(error));
    }, [])

    function displayData(selection){
        console.log(dataSelected);
        switch (selection) {
            case "categorias":
                    fetch('http://localhost:3000/api/products')
                    .then(response => response.json())
                    .then(data => {
                        setCategoriesInDb(data.countByCategory)
                        setDataSelected("categorias")
                    })
                    .catch(error => console.log(error));
                break;

            case "Ventas":
                fetch('http://localhost:3000/api/soldTotal')
                .then(response => response.json())
                .then(data => {
                    let soldTotal = [{dataUsers: data.users, dataTotalExchanges: data.totalExchanges, dataProductName: data.usersExchanges}]
                    setCategoriesInDb(soldTotal)
                    setDataSelected("ventasTotal")
                })
                .catch(error => console.log(error));
                break;

            case "Vendidos":
                fetch('http://localhost:3000/api/soldTotal')
                .then(response => response.json())
                .then(data => {
                    let soldTotal = [{dataUsers: data.users, dataTotalExchanges: data.totalExchanges, dataProductName: data.usersExchanges}]
                    setCategoriesInDb(soldTotal)
                    setDataSelected("Vendidos")
                })
                .catch(error => console.log(error));
                break;
                
            case "Creación":
                    console.log("Creación");
                break;

            case "Edición":
                    console.log("Edición");
                break;

            case "Eliminar":
                    console.log("Eliminar");
                break;
        
            default:
                fetch('http://localhost:3000/api/products')
                    .then(response => response.json())
                    .then(data => {
                        setCategoriesInDb(data.countByCategory)
                        setDataSelected("categorias")
                    })
                    .catch(error => console.log(error));
                break;
        }
    }
    if (dataSelected === "categorias"){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className='btnAll'>
                            <button className='btn-Selection' onClick={() => displayData("Categorias")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Categorias</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Ventas")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Ventas</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Vendidos")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Vendidos</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Creación")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Creación</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Edición")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Edición</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Eliminar")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Eliminar</h5>
                                </div>
                            </button>
                        </div>
                        
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {dataSelected ===  "Categorias" && <p>Cargando...</p> }
                                {
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
    
    

    if (dataSelected === "ventasTotal"){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className='btnAll'>
                            <button className='btn-Selection' onClick={() => displayData("Categorias")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Categorias</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Ventas")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Ventas</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Vendidos")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Vendidos</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Creación")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Creación</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Edición")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Edición</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Eliminar")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Eliminar</h5>
                                </div>
                            </button>
                        </div>
                        
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {dataSelected ===  "Categorias" && <p>Cargando...</p> }
                                {
                                    categoriesInDb.map((category,index)=>{
                                        return  <Sold  {...category }  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment> 
        )
    }



    if (dataSelected === "Vendidos"){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className='btnAll'>
                            <button className='btn-Selection' onClick={() => displayData("Categorias")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Categorias</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Ventas")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Ventas</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Vendidos")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Vendidos</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Creación")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Creación</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Edición")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Edición</h5>
                                </div>
                            </button>

                            <button className='btn-Selection' onClick={() => displayData("Eliminar")}>
                                <div className="card-header py-3">
                                    <h5 className="m-0 font-weight-bold text-gray-800 titulo">Eliminar</h5>
                                </div>
                            </button>
                        </div>
                        
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {dataSelected ===  "Categorias" && <p>Cargando...</p> }
                                {
                                    categoriesInDb.map((category,index)=>{
                                        return  <MostSold  {...category }  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment> 
        )
    }
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
