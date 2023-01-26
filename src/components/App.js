import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AnimalList from "./AnimalList";
import Organization from "./OrganizationList";
import Login from "./Login";
import OrganizationDetails from "./OrganizationDetails";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/animalList" element={<AnimalList />}></Route>
        <Route path="/organizationList" element={<Organization />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/organizationDetails/:id" element={<OrganizationDetails/>}></Route>
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
