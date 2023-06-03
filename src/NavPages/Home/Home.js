import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { store } from "../../Utility/ContextData";

const Home = () => {
  const [data] = useContext(store);

  const ScrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <Layout>
      {data
        .filter((item) => item?.category === "carouselImg")
        .map((item, index) => {
          return (
            <>
              
            </>
          );
        })}

      <div className="back-top text-center my-3" onClick={ScrollTop}>
        <i className="fa-solid fa-circle-arrow-up fa-beat fa-2xl"></i>
      </div>
    </Layout>
  );
};

export default Home;
