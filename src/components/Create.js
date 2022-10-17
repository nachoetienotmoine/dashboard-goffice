import React from 'react';
import {useEffect, useState} from 'react';

function Create (props){

        return (
            <div>
                <h1 className="col-lg-9">Creación de productos</h1>
                <form action="http://localhost:3000/api/createProduct" method="POST" className='CreateForm' encType='multipart/form-data'>
                    <label name='name'>Name</label>
                    <input name='name'></input>

                    <label name='category'>Category</label>
                    <select name="category">
                        <option value={1}>monitores</option>
                        <option value={2}>camaras</option>   
                        <option value={3}>parlantes</option>   
                        <option value={4}>luces</option>   
                        <option value={5}>pads</option>   
                        <option value={6}>sillas</option>   
                        <option value={7}>teclados</option>   
                        <option value={8}>auriculares</option>   
                        <option value={9}>micrófonos</option>                                   
                    </select>

                    <label name='description'>Description</label>
                    <input name='description'></input>

                    <label name='discount'>Discount</label>
                    <input type={"number"} name='name'></input>

                    <label name='price'>Price</label>
                    <input type={"number"} name='price'></input>

                    <label name='image'></label>
                    <input type={"file"} name="image"></input>

                    <label name='stock'></label>
                    <select name="stock" >
                        <option value="0">Out of Stock</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>            
                    </select> 

                    <br></br>
                    <button type="submit">Save Changes</button>             
                </form>
            </div>
        )
    
}

export default Create;