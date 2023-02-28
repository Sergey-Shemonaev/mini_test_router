import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Sity from "./component/sity";
import Sight from "./component/sight";
import Attractions from "./component/attractions";
import Form from "./component/form";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                Sity
              </Link>
            </li>
            <li>
              <Link to="singht" style={{ textDecoration: "none" }}>
                Singht
              </Link>
            </li>
            <li>
              <Link to="attractions" style={{ textDecoration: "none" }}>
                Attractions
              </Link>
            </li>
            <li>
              <Link to="form" style={{ textDecoration: "none" }}>
                Forms
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Sity />} />
          <Route path="singht" element={<Sight />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
