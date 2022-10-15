import React from 'react';
import {useState, useEffect} from 'react';

function Sold(props){
    const [ userImage, setUserImage ] = useState([])

    useEffect(() => {

        let userAlreadySeeked = false;
        let users = [];

        if (props.dataUsers !== undefined){
            props.dataUsers.forEach((user,i) => {

                for(let j = 0; j < users.length; j++){
                user.id === users[j] ? userAlreadySeeked = true : userAlreadySeeked = false;
                }
    
                if (!userAlreadySeeked){
                    users.push(user.id)
                    fetch(`http://localhost:3000/api/users/${user.id}`)
                        .then(response => response.json())
                        .then(data => {
                            setUserImage(prevUserImage => [...prevUserImage, {id: data.id, URL: data.URL}]);
                        })
                        .catch(error => console.log(error));
                }
            });
        }
        
    }, [])

    let dataUsers = props.dataUsers;

    return (
        <div>
             <h1 className="col-lg-9">Total de ventas: {props.dataTotalExchanges}</h1>
            {dataUsers !== undefined && dataUsers.map((user,i) => {
                let fullName = user.firstName + " " + user.lastName;
                let urlImage;
                userImage.forEach((image) => {
                    if (image.id === user.id){
                        return urlImage = image.URL;
                    }
                });
                    return (
                        <React.Fragment key={i}>
                            
                            <div className="col-lg-8 mb-4">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={urlImage} alt = "imagen Usuario" />
                                <div className="card bg-dark text-white shadow ">
                                    <div className="card-body">
                                        {fullName}
                                        <hr />
                                        {props.dataProductName[i].productName}
                                    </div>
                                </div>
                            </div>
                            
                        </React.Fragment>
                    )
                })}
            
        </div>
    )
    
}

export default Sold;