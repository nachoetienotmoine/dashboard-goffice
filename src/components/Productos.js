import React from 'react';
import {useEffect, useState} from 'react';

function Products (props){

    const [productos, setProductos] = useState()
    const [imagenProductos, setImagenProductos] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then((data) => {setProductos(data);})  
                
    }, [])

    useEffect(() => {
        if (productos){
            productos.products.forEach((sold) => {
                if (sold){
                    fetch(`http://localhost:3000/api/products/${sold.id}`)
                        .then(res => res.json())
                        .then((data) => {setImagenProductos(oldData => [...oldData, data]);})
                } 
            })

        }
    },[productos])

    return (
        <div className='products-container'>
                {productos && productos.products.map((user,i) => {
                    return (
                        <React.Fragment key={i}>
                            
                            <div className="product-wrapper">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={imagenProductos[i] && imagenProductos[i].URL} alt = "Imagen De Productos" />
                                <div className="card bg-dark text-white shadow ">
                                    <div className="card-body">
                                        {user && user.name}
                                        <hr />
                                        {}
                                    </div>
                                </div>
                            </div>
                            
                        </React.Fragment>
                    )
                })}        
        </div>        
        )
    
}

export default Products;