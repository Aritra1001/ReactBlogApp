import React, { useContext } from "react";
import { store } from "../../Utility/ContextData";

const LatestArticle = () => {
  const [data] = useContext(store);

  const a = new Date();
  const date = a.getDate();
  const month = a.getMonth() + 1;
  const year = a.getFullYear();
  const currDate = date + "/" + month + "/" + year;

  return (
    <>
      {data
        .filter((item) => item?.category === 'LatestArticle')
        .map((item, index) => {
          return (
            <div className="container my-5" key={index}>
              <div className="row featurette my-4 mx-3">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading fw-normal lh-1 my-2">
                    {item?.title}
                  </h2>
                  <p className="lead my-3">{item?.description}</p>
                  <p className=" text-muted">Today's date: {currDate}</p>
                  <p className="text-secondary">Category: {item?.category}</p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    src={item?.url}
                    alt="LatestArticles"
                    style={{ height: "300px", width: "300px" }}
                  />
                </div>
              </div>
              <hr className="featurette-divider"></hr>
            </div>
          );
        })}
    </>
  );
};

export default LatestArticle;
