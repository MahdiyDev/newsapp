import { Header } from "components";
import { About, Home } from "pages";
import { Route, Routes } from "react-router-dom";
import "./app.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
