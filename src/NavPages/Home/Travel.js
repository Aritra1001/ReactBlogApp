import React, { useContext } from "react";
import { store } from "../../Utility/ContextData";

const Travel = () => {
  const [data] = useContext(store);

  const method = new Date();
  const date = method.getDate();
  const month = method.getMonth() + 1;
  const year = method.getFullYear();
  const currDate = date + "/" + month + "/" + year;
  console.log("curr date", currDate);

  return (
    <div className="container">
      {/* <div className="row align-center travel-item"> */}
      <div class="row row-cols-1 row-cols-md-3 g-4 my-3 ">
        {data
          .filter((item) => item?.category === "Travel")
          .map((item, index) => {
            return (
              // <div className="my-3 col-lg-3 col-md-6 " key={index}>
              //   <div className="card border-primary card-container" style={{ width: "18rem" }}>
              //     <img src={item?.url} className="card-img-top" alt="travel" height="230px"/>
              //     <div className="card-body">
              //       <h5 className="card-title">{item?.title}</h5>
              //       <p className="card-text">
              //         {item?.description}
              //       </p>
              //       <p className="card-text text-muted">
              //         {currDate} / {item?.category}
              //       </p>
              //       <button href="/" className="btn btn-primary">
              //         Go somewhere
              //       </button>
              //     </div>
              //   </div>
              // </div>

              <div class="col " key={index}>
                <div class="card border-primary">
                  <img
                    src={item?.url}
                    class="card-img-top"
                    alt="travel"
                    style={{ height: "250px" }}
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">{item?.title}</h5>
                    <p class="card-text">{item?.description}</p>
                    <p class="card-text text-muted">
                      {currDate} / {item?.category}
                    </p>
                    <button href="/" className="btn btn-primary">
                      Continue reading
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Travel;