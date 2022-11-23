
import MainNav from "./components/MainNav/MainNav";
import Public from "./Routes/Public";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import firebase from "./config/firebase"
import AppProvider from "./Context/AuthContext"
import BuyProvider from "./Context/BuyContext";

console.log(firebase)

function App() {

  return (<>
    <div className="App">
      <div className="container">
        <Router>
          <AppProvider>
            <BuyProvider>
              <MainNav />
              <hr />
              <Public />
            </BuyProvider>
          </AppProvider>
        </Router>
      </div>
    </div>
    <Footer />
  </>
  );
}

export default App;
