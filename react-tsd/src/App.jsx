import NavBarComponent from "./components/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
      <div style={{width: '100vw', height: '100vh'}}>
    <NavBarComponent/>
    <ItemListContainer greeting="Servicios"/>
    <ItemListContainer greeting="Planes"/>
    <ItemListContainer greeting="Que nos hace diferentes"/>
      </div>
  
  );
}

export default App;
