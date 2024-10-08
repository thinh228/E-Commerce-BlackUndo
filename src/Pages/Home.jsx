import React from "react";
import Banner from "../Components/Home/Banner/Banner";
import CollectionBox from "../Components/Home/Collection/CollectionBox";
import Services from "../Components/Home/Services/Services";
import Trendy from "../Components/Home/Trendy/Trendy";
import DealTimer from "../Components/Home/Deal/DealTimer";

const Home = () => {
  return (
    <>
      <CollectionBox />
      <Trendy />
      <DealTimer />
      <Banner />
      <Services />
    </>
  );
};

export default Home;
