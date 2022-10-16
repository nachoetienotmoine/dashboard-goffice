import React from 'react';
import {useEffect, useState} from 'react';

function MostSold(props){

    const [fiveMostSold, setFiveMostSold] = useState()
    const [dataUsers, setDataUsers] = useState()
    const [soldData, setSoldData] = useState([])
    
    useEffect(() => {
        if (props.dataProductName !== undefined){
            setDataUsers(props.dataUsers);
            
            fetch('http://localhost:3000/api/fiveMostSold')
                .then(res => res.json())
                .then((data) => {setFiveMostSold(data);})
        }  
    }, [])

    useEffect(() => {
        if (fiveMostSold){
            fiveMostSold.forEach((sold) => {
                fetch(`http://localhost:3000/api/products/${sold.id}`)
                    .then(res => res.json())
                    .then((data) => {setSoldData(oldData => [...oldData, data]);}) 
            })

        }
    },[fiveMostSold])

    return (
        <div>
             <h1 className="col-lg-9">5 productos más vendidos</h1>
            {fiveMostSold && fiveMostSold.map((user,i) => {
                    return (
                        <React.Fragment key={i}>
                            
                            <div className="col-lg-8 mb-4">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={soldData[i] && soldData[i].URL} alt = "imagen Usuario" />
                                <div className="card bg-dark text-white shadow ">
                                    <div className="card-body">
                                        {soldData[i] && "Loading Product Image" && soldData[i].productData[0].name}
                                        <hr />
                                        {fiveMostSold[i].repeats}
                                    </div>
                                </div>
                            </div>
                            
                        </React.Fragment>
                    )
                })}
            
        </div>
    )
    
}

export default MostSold;