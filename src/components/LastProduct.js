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
            fetch('https://verdumarket8.herokuapp.com/api/products/lastProduct')
            .then(res => res.json())
            .then((promiseData) => {
                let lastProduct = promiseData.data;
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