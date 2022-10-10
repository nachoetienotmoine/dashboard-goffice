import React        from 'react';
import AllContent   from './AllContent';
import Footer       from './Footer';
import Products     from './Products';
import {useEffect, useState} from 'react';

function ContentWrapper(){

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
    

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    {/* <TopBar /> */}
                    {console.log('productsdb',productsDb)}
                    {console.log('usersDb',usersDb)}
                    <AllContent data={productsDb,usersDb} />
                    <Products />
                    <Footer  />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;