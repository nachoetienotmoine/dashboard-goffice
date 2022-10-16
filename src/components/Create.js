import React from 'react';
import {useEffect, useState} from 'react';

function Create (props){

    let [createFrom, setCreateForm] = useState([])

    // useEffect (() => {
    //     fetch('http://localhost:3000/api/createProduct')
    //         .then(res => res.body.getReader())
    //         .then(data => {setCreateForm(ReactDOM.createRoot(data))
    // })

    console.log(createFrom);

    if (createFrom){
        return (
            <div>
                <h1 className="col-lg-9">Creación de productos</h1>
                
    
            </div>
        )
    }else{
        <h1 className="col-lg-9">Cargando...</h1>
    }

    
    
}

export default Create;