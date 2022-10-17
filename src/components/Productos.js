import React from 'react';
import {useEffect, useState} from 'react';

function Products (props){

    const [productos, setProductos] = useState(null)
    const [imagenProductos, setImagenProductos] = useState([])

    const getImages = async (product) => {
        for (let i = 0; i < product.length; i++){
            let response = await fetch(`http://localhost:3000/api/products/${product[i].id}`);
            let data = await response.json();
            setImagenProductos(oldData => [...oldData, data]);
        }
    }

    useEffect(() => {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then((data) => {
                setProductos(data);
                getImages(data.products);
            })  
    }, [])

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