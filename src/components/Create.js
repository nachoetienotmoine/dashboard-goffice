import React from 'react';
import {useEffect, useState} from 'react';

function Create (props){

    let [createForm, setCreateForm] = useState()

    useEffect (() => {
        fetch('http://localhost:3000/api/createProduct')
            .then((res) => {console.log(res);})
    })

    if (createForm){
        console.log(createForm);
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