import React, {Component} from 'react';
import Product from './Product';


class LastProductInDB extends Component {
    constructor() {
        super();
        this.state = { 
            product : {},
        }
    }
 
    componentDidMount(){
            fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then((promiseData) => {
                let lastProduct = promiseData.products[promiseData.products.length-1];
                this.setState({product: lastProduct})
            }) 
    }
    render() { 
        return (
            <React.Fragment>
                    <Product  {...this.state.product}  />
            </React.Fragment>
          );
    }
}
 
export default LastProductInDB;