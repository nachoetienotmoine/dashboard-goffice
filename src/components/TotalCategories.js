import react from 'react';
import SmallCard from './smallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Total Categories --> */

let Categories = {
  title: 'Total categories',
  color: 'primary', 
  cuantity: 2,
  icon: 'fa-clipboard-list'
}


/* <!-- Total Products --> */

let Products = {
  title:' Total Products', 
  color:'success', 
  cuantity: '6',
  icon:'fa-award'
}


/* <!-- Total Users --> */

let Users = {
  title:'Total Users' ,
  color:'warning',
  cuantity:'5',
  icon:'fa-user-check'
}


let cards = [Categories, Products, Users];

function TotalCategories() {
  return (
    
    <div className="Card2">
            
         <div className='conteiner'>
          <h2>Total Categories</h2>
         </div>

  </div>
);
}

export default TotalCategories;













