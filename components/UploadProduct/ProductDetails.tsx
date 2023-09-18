import React, { useState, useEffect, useCallback } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { CategoryData } from "./CategoryData";
import { useDropzone } from "react-dropzone";
import { uploadproducts } from "./../../pages/api/uploadproduct/uploadproduct";
import styles from "./../../styles/Home.module.css";
import axios from "axios";
import { SyncLoader } from "react-spinners";
import { Toaster, toast } from "react-hot-toast";

const ProductDetails = ({
  selectedCategory,
  selectedSubcategory,
  selectedDivision,
  selectedDistric,
}) => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
      if (userInfo) {
        setUserInfo(userInfo);
      }
    }
  }, []);
  const userId = userInfo._id;
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [closeall, setCloseall] = useState(true);
  const [condition, setCondition] = useState("");
  const [condition2, setCondition2] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState();
  const [email, setEmail] = useState("");
  const [number1, setNumber1] = useState("");
  const [number, setNumber] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: "image/*", maxFiles: 4 });

  const onUpload = async (e) => {
    setLoading(true);
    e.preventDefault();
    setUploadStatus("Checking Image....");
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("file", image);
    });
    try {
      const response = await axios.post("/api/upload", formData);
      setImages(response.data.imageUrls);
      setUploadStatus("Ready for Post");
      setLoading(false);
      setOpen(true);
      toast.success("Ready for Post");
    } catch (error) {
      console.log("imageUpload" + error);
      setUploadStatus("Choose Valid Image file");
      setLoading(false);
      toast.error("Select Valid Image File");
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = {
        userId,
        selectedCategory,
        selectedSubcategory,
        selectedDivision,
        selectedDistric,
        condition,
        condition2,
        brand,
        model,
        price,
        description,
        name,
        email,
        number,
        number1,
        images,
        title,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const response = await uploadproducts(data, config);

      setLoading(false);
      setUploadStatus("Your Product is Added");
      toast.success("Product Added Successfully");
      setCloseall(false);
    } catch (error) {
      // Handle any errors that occurred during the reques
      console.error("Error inserting data:", error);
      toast.error("Fill Necessary Field");
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <h1 className="d-flex justify-content-center align-items-center mb-3">
          Fill Details
        </h1>
        <Dropdown.Divider
          style={{ borderTop: "1px solid lightgray", marginBottom: "50px" }}
        />
      </div>
      <div
        style={{
          margin: "20px",
          border: "1px solid lightgray",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} xs={6}>
              <Form.Group className="mb-3">
                <Form.Text className="text-muted">Condition: </Form.Text>
                <Form.Check
                  type="radio"
                  label="New"
                  name="condition"
                  value="new"
                  checked={condition === "new"}
                  onChange={(e) => setCondition(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Old"
                  name="condition"
                  value="old"
                  checked={condition === "old"}
                  onChange={(e) => setCondition(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6} xs={2}>
              <Form.Group className="mb-3">
                <Form.Text className="text-muted m-2">Authenticity: </Form.Text>
                <Form.Check
                  type="radio"
                  label="Original"
                  name="condition"
                  value="new"
                  checked={condition2 === "Original"}
                  onChange={(e) => setCondition2(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Refurbished"
                  name="condition"
                  value="old"
                  checked={condition2 === "Refurbished"}
                  onChange={(e) => setCondition2(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Brand</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setBrand(e.target.value)}
            >
              <option>Open this select menu</option>
              {CategoryData.optionsArray.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                placeholder="write description about product"
                style={{ height: "100px" }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Dropdown.Divider
            style={{ borderTop: "1px solid lightgray", marginBottom: "50px" }}
          />
          <h3 className="d-flex justify-content-center align-items-center mb-3">
            Add photo(Maximum 4) * required
          </h3>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className={styles.containerr}>
              <div className={styles.dropzonee} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop file(s) here ...</p>
                ) : (
                  <p>Drag and drop file(s) here, or click to select files</p>
                )}
              </div>
              <div className={styles.imagess}>
                {selectedImages.length > 0 &&
                  selectedImages.map((image, index) => (
                    <img
                      src={`${URL.createObjectURL(image)}`}
                      key={index}
                      alt=""
                    />
                  ))}
              </div>
            </div>
          </Form.Group>
          <Dropdown.Divider
            style={{ borderTop: "1px solid lightgray", marginBottom: "50px" }}
          />
          <h3 className="d-flex justify-content-center align-items-center mb-3">
            Contact Details
          </h3>
          <Form.Group className="mb-3">
            <Form.Label>Seller Name</Form.Label>
            <Form.Control
              placeholder="Seller Name"
              type="text"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Seller Email</Form.Label>
            <Form.Control
              placeholder="Seller Email"
              type="email"
              Value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Number 1</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number 1"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Number 2</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number 2"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            />
          </Form.Group>
          {selectedImages.length === 0 && (
            <p>Select photos(Atleast 1) for next step</p>
          )}
          {loading ? (
            <SyncLoader color="#36d7b7" /> // Show loading indicator when loading is true
          ) : (
            selectedImages.length > 0 && (
              <div>
                {!open && (
                  <Button variant="primary" type="submit" onClick={onUpload}>
                    Upload for check
                  </Button>
                )}
                <p>{uploadStatus}</p>
              </div>
            )
          )}

          {open && closeall && !loading && (
            <Button variant="primary" type="submit">
              Post Ad
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
};

export default ProductDetails;
