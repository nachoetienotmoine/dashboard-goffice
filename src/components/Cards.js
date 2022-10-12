import React from 'react';
import SmallCard from './SmallCard';
import {useEffect, useState} from 'react';
// import CategoriesInDb from './CategoriesInDb';

function Cards(){
    const [ productsDb, setProductsDb ] = useState([])
    const [ usersDb, setUsersDb ]       = useState([])
 
    useEffect(() => {
        console.log('%cProducts', 'color: green');
    
        fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            setProductsDb(data)
        })
        .catch(error => console.log(error));
    }, [])

 
    useEffect(() => {
        console.log('%cUsers', 'color: yellow');
    
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then(data => {
            setUsersDb(data)
        })
        .catch(error => console.log(error));
    }, [])

      
    let productInDataBase = {
        color:   "primary",
        titulo: "Total productos en la BD",
        valor: productsDb.count,
        icono: "fas fa-shopping-basket",
    }

    let amount ={
        color:   "success",
        titulo: "Total categorias en la BD",
        valor: productsDb.categoryCount,
        icono: "fas fa-award",
    }
    
    let user = {
        color:   "warning",
        titulo: "Total de usuarios en la Base De Datos",
        valor: usersDb.count ,
        icono: "fas fa-user",
    }
    
    let cardProps = [productInDataBase,amount,user];

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default Cards;


