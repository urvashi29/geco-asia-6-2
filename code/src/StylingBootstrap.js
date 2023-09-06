import React from "react";
import downloadImage from "./images/download.png";

const StylingBootstrap = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={downloadImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={downloadImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={downloadImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={downloadImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-8 col-sm-12 col-lg-6 mt-3">col-8</div>
        <div className="col-4 col-sm-12 col-lg-6">col-4</div>
      </div>

      <div className="row">
        <div className="col-3">1</div>
        <div className="col-4">2</div>
        <div className="col-5">3</div>
      </div>
    </div>
  );
};

export default StylingBootstrap;
