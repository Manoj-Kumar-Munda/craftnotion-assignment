import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Header />
        <MainContent />
      </div>
        <Footer />
    </>
  );
};

export default LandingPage;
