import logo from '../assets/images/Logo_GOffice.png';
import '../assets/css/App.css';
import LastProductCreate from './LastProductCreate';
import LastUserCreate from './LastUserCreate';
import ProdList from './ProdList';
import TotalCategories from './TotalCategories';
import TotalProducts from './TotalProducts';
import TotalUsers from './TotalUsers';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¿y Karina?
        </p>
       
       <div>
          <LastProductCreate />
          <LastUserCreate />
          <ProdList />
          <TotalCategories />
          <TotalProducts />
          <TotalUsers />
        </div>
       
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          AK VAMO A SE EL DASBOR PAL ADMIN
        </a>
      </header>
    </div>
  );
}

export default App;
