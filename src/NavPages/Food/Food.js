import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { store } from "../../Utility/ContextData";

const Food = () => {
  const [data] = useContext(store);

  const ScrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <Layout>
      <h1 className="head-bolly text-center text-danger my-4">
        Delightful Cuisines
      </h1>

      {data
        .filter((item) => item?.category === "food")
        .map((item, index) => {
          return (
            <div className="container my-5" key={index}>
              <div className="row featurette my-4 mx-3">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1">
                    {item?.title}
                  </h2>
                  <p className="lead">{item?.description}</p>
                  <p className="text-body-secondary">Origin: {item?.origin}</p>
                  <p className="text-body-secondary">Category/ {item?.category}</p>
                  {item?.type === "veg" ? (
                    <>
                      <p className="text-success" style={{fontSize:"17px", fontWeight:"500"}}>Type: {item?.type}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-danger" style={{fontSize:"17px", fontWeight:"500"}}>Type: {item?.type}</p>
                    </>
                  )}
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src={item?.url}
                    alt="food"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
              </div>
              <hr className="featurette-divider"></hr>
            </div>
          );
        })}

      <div className="back-top text-center my-3" onClick={ScrollTop}>
        <i className="fa-solid fa-circle-arrow-up fa-beat fa-2xl"></i>
      </div>
    </Layout>
  );
};

export default Food;
