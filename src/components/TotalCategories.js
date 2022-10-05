import react from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Total Categories --> */

let Categories = {
  title: 'Total categories',
  color: 'primary', 
  cuantity: "9",
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
    
    <div className="row">
            
    {cards.map( (Categories, i) => {

        return <SmallCard {...Categories} key={i}/>
    
    })}

</div>
);
}

export default TotalCategories;













