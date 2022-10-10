import React from 'react';
import SmallCard from './SmallCard';
import {useEffect, useState} from 'react';
import CategoriesInDb from './CategoriesInDb';

function Cards(){
    const [ productsDb, setProductsDb ] = useState([])
    const [ usersDb, setUsersDb ]       = useState([])
 
    useEffect(() => {
        console.log('%cProducts', 'color: green');
    
        fetch('https://verdumarket8.herokuapp.com/api/products')
        .then(response => response.json())
        .then(data => {
            setProductsDb(data.data)
        })
        .catch(error => console.log(error));
    }, [])

 
    useEffect(() => {
        console.log('%cUsers', 'color: yellow');
    
        fetch('https://verdumarket8.herokuapp.com/api/users')
        .then(response => response.json())
        .then(data => {
            setUsersDb(data.data)
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
        valor: productsDb.totalCategories,
        icono: "fas fa-award",
    }
    
    let user = {
        color:   "warning",
        titulo: "Total de usuarios en la Base De Datos",
        valor: usersDb.total ,
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


