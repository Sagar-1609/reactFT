import React from "react";

export default function Anime({
  anime_name,
  description,
  Price,
  orginal_price,
  Image,
}) {
  return (
    <>
      <div>
        <div className="wholefirst">
          <div className="product-info">
            <div className="tshirt">
              <div className="box-image1">{Image}</div>

              <div className="BIGINFO">
                <div className="INFO">
                  <div className="naruto">
                    {" "}
                    <h3>{anime_name}</h3>
                  </div>
                  <div className="nar">
                    {" "}
                    <p> {description}</p>
                  </div>
                  <div className="rate">
                    <div className="price">
                      <h4> price={Price}</h4>
                    </div>
                    <div className="discount">
                      <h5> Orginial price={orginal_price}/-</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
