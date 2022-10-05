import react from 'react';
import logo from '../assets/images/Logo_GOffice.png';

function LastUserCreate() {
  return (
    <div className="lastCrated mb-4">
    <div className="col-lg-6 mb-4">
          <div className="crd shadow mb-4">
              <div className="crd-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">Last Product Create</h5>
              </div>
              <div className="card-body">
                  <div className="text-center">
                      <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={logo} alt=" Star Wars - Mandalorian "/>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                  <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
              </div>
          </div>
      </div>
  </div>
  )
}

export default LastUserCreate;