import react from 'react';

function ProdList() {
  return (
    <div >
    
      <div className="card">

        <div className="DivTitulo">
          <h5 className="Titulo">Products List</h5>
        </div>


        <div className="card-body">

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="Product">Monitor</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="Product">Microfono</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="Product">Mouse Pad</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="Product">teclado</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="Product">Parlante</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="Product">Luces</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default ProdList;