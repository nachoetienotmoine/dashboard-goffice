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
        <h1>
          Dashboard Goffice
        </h1>
        <nav>


        </nav>
      </header>

      <body>
      <div> 
          <LastProductCreate />
          <LastUserCreate />
          <ProdList />
          <TotalCategories />
          <TotalProducts />
          <TotalUsers />
        </div>
      </body>
    </div>
  );
}

export default App;
