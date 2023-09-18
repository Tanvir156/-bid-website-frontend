import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import useSWR from "swr";
import { SyncLoader } from "react-spinners";
import config from "./../../config";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Profile = () => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
      if (userInfo) {
        setUserInfo(userInfo);
      }
    }
  }, []);
  const API_URL = `${config.API_URL}/api/products/own/${userInfo._id}`;
  const { data, error } = useSWR(API_URL, fetcher);
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
  if (data.length < 0) return <div>No Ad yet</div>;
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <div>
          <h1 className="d-flex justify-content-center align-items-center mb-3">
            Welcome {userInfo.name}
          </h1>
          <Dropdown.Divider
            style={{ borderTop: "1px solid gray", marginBottom: "50px" }}
          />
        </div>
        <div>
          <h6 className="d-flex justify-content-center align-items-center mb-3">
            Your Ad
          </h6>
        </div>
        <div>
          <Container fluid>
            <Row xs={2} md={4} lg={5}>
              {data.map((product) => (
                <Col key={product._id}>
                  <ProductCard data={product} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Profile;
