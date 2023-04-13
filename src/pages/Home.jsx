import React from "react";
import HomeProductCategories from "../components/main-page-modules/HomeProductCategories";
import NewsletterModule from "../components/main-page-modules/NewsletterModule";
import Slider from "../components/Slider";
import MainDescription from "../components/main-page-modules/MainDescription";

const Home = () => {
  return (
    <>
      <Slider />
      <HomeProductCategories />
      <MainDescription />
      <NewsletterModule/>
    </>
  );
};

export default Home;