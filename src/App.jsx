import React from "react";
import Sildebar from "./components/sildebar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./page/home";
import Test from "./page/test";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container style={{overflow: "hidden"}}>
        <Row>
          <Router>
            <Sildebar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/test" element={<Test/>}/>
              <Route path="/service" element={<Test/>}/>
            </Routes>
          </Router>
        </Row>
    </Container>
  );
};

export default App;
