import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import More from "./screens/More";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop";
import About from "./screens/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/more" element={<More />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
