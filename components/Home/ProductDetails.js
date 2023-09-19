import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SyncLoader } from "react-spinners";
import config from "./../../config";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `${config.API_URL}/api/products/${id}`;
  const { data, error } = useSWR(API_URL, fetcher);
  const main = data?.images?.[0];
  const [mainImage, setMainImage] = useState(main);
  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div
        class="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <SyncLoader color="#36d7b7" />
      </div>
    );

  function changeImage(newImageSrc) {
    setMainImage(newImageSrc);
  }

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  {mainImage ? (
                    <Image
                      src={mainImage}
                      alt="Main Product"
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,..."
                      width={350}
                      height={300}
                      loading="eager"
                    />
                  ) : null}
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    {data.images[0] ? (
                      <li>
                        <Image
                          onClick={() => changeImage(data.images[0])}
                          src={data.images[0]}
                          alt="Main Product"
                          width={70}
                          height={50}
                          layout="responsive"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,..."
                          loading="eager"
                        />
                      </li>
                    ) : null}

                    {data.images[1] ? (
                      <li>
                        <Image
                          onClick={() => changeImage(data.images[1])}
                          src={data.images[1]}
                          alt="Thumbnail 2"
                          width={70}
                          height={50}
                          layout="responsive"
                          placeholder="blur"
                          loading="eager"
                          blurDataURL="data:image/png;base64,..."
                        />
                      </li>
                    ) : null}

                    {data.images[2] ? (
                      <li>
                        <Image
                          onClick={() => changeImage(data.images[2])}
                          src={data.images[2]}
                          alt="Thumbnail 3"
                          width={70}
                          height={50}
                          loading="eager"
                          layout="responsive"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,..."
                        />
                      </li>
                    ) : null}

                    {data.images[3] ? (
                      <li>
                        <Image
                          onClick={() => changeImage(data.images[3])}
                          src={data.images[3]}
                          alt="Thumbnail 4"
                          width={70}
                          height={50}
                          loading="eager"
                          layout="responsive"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,..."
                        />
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                fontFamily: "sens-serif",
                textTransform: "capitalize",
              }}
            >
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h2 style={{ fontFamily: "monospace", color: "#333" }}>
                    {data.title}
                  </h2>
                </div>
                <div className="mt-2 pr-3">
                  <p>{data.description}</p>
                </div>
                <h3 style={{ display: "flex", fontFamily: "monospace" }}>
                  Base Value:{" "}
                  <span style={{ color: "red" }}>{data.price} Tk</span>
                </h3>
                <div className="mt-3">
                  <h2
                    style={{
                      fontFamily: "monospace",

                      color: "#333",
                    }}
                  >
                    Product Info:
                  </h2>
                  <ul>
                    <li>
                      <strong style={{ color: "#555" }}>Condition:</strong>{" "}
                      {data.condition}
                    </li>
                    <li>
                      <strong style={{ color: "#555" }}>Authenticity:</strong>{" "}
                      {data.condition2}
                    </li>
                    <li>
                      <strong style={{ color: "#555" }}>Brand:</strong>{" "}
                      {data.brand}
                    </li>
                    <li>
                      <strong style={{ color: "#555" }}>Model:</strong>{" "}
                      {data.model}
                    </li>
                  </ul>
                  <p>
                    <strong style={{ color: "#555" }}>Location:</strong>{" "}
                    {data.selectedDistric}, {data.selectedDivision}
                  </p>
                </div>
                <div className="mt-3">
                  <h2
                    style={{
                      fontFamily: "monospace",

                      color: "#333",
                    }}
                  >
                    Seller Info:
                  </h2>
                  <ul>
                    <li>
                      <strong style={{ color: "#555" }}>Name:</strong>{" "}
                      {data.name}
                    </li>
                    <li>
                      <strong style={{ color: "#555" }}>Email:</strong>{" "}
                      {data.email}
                    </li>
                    <li>
                      <strong style={{ color: "#555" }}>Phone:</strong>{" "}
                      {data.number}
                    </li>
                    <li>
                      <strong style={{ color: "#555" }}>
                        Alternate Phone:
                      </strong>{" "}
                      {data.number1}
                    </li>
                  </ul>
                </div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <button className="btn btn-outline-dark">Buy Now</button>
                  <button className="btn btn-dark">Add to Basket</button>
                </div>
              </div>
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
