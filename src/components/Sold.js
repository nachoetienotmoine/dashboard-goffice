import React from 'react';

import {useEffect, useState} from 'react';

function Sold(props){
    const [ userImage, setUserImage ] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/api/users/3`)
        .then(response => response.json())
        .then(data => {
            setUserImage(data);
        })
        .catch(error => console.log(error));
    }, [])

    if(props.dataUsers !== undefined){
        if(props.dataUsers.length > 0){
            props.dataUsers.map((user,i) => {
                return (
                    <React.Fragment>
                        <h1 className="col-lg-9">Total de ventas: {props.dataTotalExchanges}</h1>
                        
                        <div className="col-lg-8 mb-4">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={user.URL} alt = "imagen producto" />
                            <div className="card bg-dark text-white shadow ">
                                <div className="card-body">
                                    {props.dataUsers[i].firstName + " " + props.dataUsers[i].lastName}
                                    <hr />
                                    {props.dataProductName[i].productName}
                                </div>
                            </div>
                        </div>
                        
                    </React.Fragment>
                )
            })
        }else{ <p>Loading...</p>}
    }
}
export default Sold;