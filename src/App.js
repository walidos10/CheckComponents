//import logo from './logo.svg';
import "./App.css";
import Photo from "./Component/Profile/ProfilPhoto";
import Fullname from "./Component/Profile/FullName";
import Adresse from "./Component/Profile/Address";
function App() {
  return (
    <div className="App container-fluid container ">
      <Photo />
      <div>
        <Fullname />
        <Adresse />
      </div>
    </div>
  );
}

export default App;
