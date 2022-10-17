import React from 'react';
import {useEffect, useState} from 'react';

function MostSold(props){

    const [fiveMostSold, setFiveMostSold] = useState()
    const [soldData, setSoldData] = useState([])
    
    const getImages = async (product) => {
        for (let i = 0; i < product.length; i++){
            let response = await fetch(`http://localhost:3000/api/products/${product[i].id}`);
            let data = await response.json();
            setSoldData(oldData => [...oldData, data]);
        }
    }

    useEffect(() => {
            fetch('http://localhost:3000/api/fiveMostSold')
                .then(res => res.json())
                .then((data) => {
                    setFiveMostSold(data);
                    getImages(data)
                })
    }, [])

    return (
        <div>
             <h1 className="col-lg-9">5 productos más vendidos</h1>
            {fiveMostSold && fiveMostSold[0] !== null && fiveMostSold.map((user,i) => {
                    return (
                        <React.Fragment key={i}>
                            
                            <div className="col-lg-8 mb-4">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={soldData[i] && soldData[i].URL} alt = "imagen Usuario" />
                                <div className="card bg-dark text-white shadow ">
                                    <div className="card-body">
                                        {soldData[i] && "Loading Product Image" && soldData[i].productData[0].name}
                                        <hr />
                                        {fiveMostSold[i] && fiveMostSold[i].repeats}
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