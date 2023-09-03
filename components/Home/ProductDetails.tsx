import React, { useState } from "react";
import Image from "next/image";

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("https://i.imgur.com/TAzli1U.jpg");

  function changeImage(newImageSrc) {
    setMainImage(newImageSrc);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <div className="main_image">
                <Image
                  src={mainImage}
                  alt="Main Product"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,..."
                  width={350}
                  height={300}
                />
              </div>
              <div className="thumbnail_images">
                <ul id="thumbnail">
                  <li>
                    <Image
                      onClick={() =>
                        changeImage("https://i.imgur.com/TAzli1U.jpg")
                      }
                      src="https://i.imgur.com/TAzli1U.jpg"
                      alt="Main Product"
                      width={70}
                      height={50}
                    />
                  </li>
                  <li>
                    <Image
                      onClick={() =>
                        changeImage("https://i.imgur.com/w6kEctd.jpg")
                      }
                      src="https://i.imgur.com/w6kEctd.jpg"
                      alt="Thumbnail 2"
                      width={70}
                      height={50}
                    />
                  </li>
                  <li>
                    <Image
                      onClick={() =>
                        changeImage("https://i.imgur.com/L7hFD8X.jpg")
                      }
                      src="https://i.imgur.com/L7hFD8X.jpg"
                      alt="Thumbnail 3"
                      width={70}
                      height={50}
                    />
                  </li>
                  <li>
                    <Image
                      onClick={() =>
                        changeImage("https://i.imgur.com/6ZufmNS.jpg")
                      }
                      src="https://i.imgur.com/6ZufmNS.jpg"
                      alt="Thumbnail 4"
                      width={70}
                      height={50}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 right-side">
              <div className="d-flex justify-content-between align-items-center">
                <h3>IIlana</h3>
              </div>
              <div className="mt-2 pr-3 content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <h3>$430.99</h3>
              <div className="ratings d-flex flex-row align-items-center">
                <div className="d-flex flex-row">
                  {" "}
                  <i className="bx bxs-star"></i>{" "}
                  <i className="bx bxs-star"></i>{" "}
                  <i className="bx bxs-star"></i>{" "}
                  <i className="bx bxs-star"></i> <i className="bx bx-star"></i>{" "}
                </div>
                <span>441 reviews</span>
              </div>
              <div className="mt-5">
                <span className="fw-bold">Color</span>
                <div className="colors">
                  <ul id="marker">
                    <li id="marker-1"></li>
                    <li id="marker-2"></li>
                    <li id="marker-3"></li>
                    <li id="marker-4"></li>
                    <li id="marker-5"></li>
                  </ul>
                </div>
              </div>
              <div className="buttons d-flex flex-row mt-5 gap-3">
                {" "}
                <button className="btn btn-outline-dark">Buy Now</button>{" "}
                <button className="btn btn-dark">Add to Basket</button>{" "}
              </div>
            </div>
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
