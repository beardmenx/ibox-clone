import "./App.css";
import Footer from "./components/Footer/Footer";
import { Mainscreen } from "./components/Mainscreen/Mainscreen";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <Sidebar />
        <Mainscreen />
      </div>
      <Footer />
    </div>
  );
}

export default App;
