import React, { useEffect, useState } from 'react';

function Product(props){

    let [ productUrlImage, setProductUrlImage ] = useState([])

    useEffect(() => {
        console.log('%cProducts', 'color: green');

        fetch(props.detail)
        .then(res => res.json())
        .then(data => setProductUrlImage(data))
        .catch(error => console.log(error));
    }, [props.detail])

    return(
        <React.Fragment>
           
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto cargado</h5>
                    </div>
                    <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={productUrlImage.URL} alt = "imagen producto" />
                    </div>
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )  
}
export default Product;