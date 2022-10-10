import React from 'react';
import CategoriesInDb from './CategoriesInDb';
import LastProduct from './LastProduct';
import Cards from './Cards';
import logo from '../assets/images/Logo_GOffice.png';




function AllContent(props){
	let data = props.data;
	
    return(
        <React.Fragment>
				      <header className="App-header bg-gradient-secondary">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
			Goffice Dashboard
        </h1>
        <nav>

        </nav>
      </header>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Tablero de Control</h1>
					</div>
				
					{/*<!-- Contenedor de tarjetas-->*/}
					<Cards data={data}/>
					{/*<!-- End Contenedor de tarjetas -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!--ultimo producto en Base de datos -->*/}
						<LastProduct lastProduct={null}/>
						
						{/*<!-- End content row último producto en DB -->*/}

						{/*<!-- Categories in DB -->*/}
						<CategoriesInDb />

						{/*<!--End Categories in Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}
        </React.Fragment>
    )

}
export default AllContent;