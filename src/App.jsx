import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navegador from "./components/Navegador";
import Routes from "./routes/Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navegador  />
    <Routes />  
    <Footer />
    </>
  );
}

export default App;
