import Lay from "./components/Lay"
import Home from "./components/Home"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Bot from "./components/Bot";
import Signup from "./components/Signup";


function App() {

 


  return (
    <div>
   <Router>
    <Routes>
    <Route path="/" element={<Lay />} />
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contact / >} />
    <Route path="/About" element={<About / >} />
    <Route path="/Signup" element={<Signup / >} />
    </Routes>   
  </Router>
  <Bot />
  </div>
  );
}

export default App;
