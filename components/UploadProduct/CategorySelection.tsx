import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CategoryData } from "./CategoryData"; // Create a data file for ategories and subcategories
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
const CategorySelection = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedDistric, setSelectedDistric] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory("");
  };
  const selectedDivisionchange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedDistric("");
  };
  const handleNextClick = () => {
    router.push({
      pathname: "/uploadproductdetails",
      query: {
        selectedCategory,
        selectedSubcategory,
        selectedDivision,
        selectedDistric,
      },
    });
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Select Category</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select a Category</option>
              {CategoryData.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        {selectedCategory && (
          <Col md={6}>
            <Form.Group>
              <Form.Label>Select Subcategory</Form.Label>
              <Form.Control
                as="select"
                value={selectedSubcategory}
                onChange={(event) => setSelectedSubcategory(event.target.value)}
              >
                <option value="">Select a Subcategory</option>
                {CategoryData.subcategories[selectedCategory].map(
                  (subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  )
                )}
              </Form.Control>
            </Form.Group>
          </Col>
        )}
      </Row>
      <Row>
        {selectedSubcategory && selectedCategory && (
          <Col md={6}>
            <Form.Group>
              <Form.Label>Select Division</Form.Label>
              <Form.Control
                as="select"
                value={selectedDivision}
                onChange={selectedDivisionchange}
              >
                <option value="">Select Division</option>
                {CategoryData.division.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        )}
        {selectedDivision && (
          <Col md={6}>
            <Form.Group>
              <Form.Label>Select Distric</Form.Label>
              <Form.Control
                as="select"
                value={selectedDistric}
                onChange={(event) => setSelectedDistric(event.target.value)}
              >
                <option value="">Select Your Distric</option>
                {CategoryData.distric[selectedDivision].map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        )}
      </Row>
      {selectedDistric && (
        <Row>
          <Col className="d-flex justify-content-center m-3">
            <Button variant="primary" onClick={handleNextClick}>
              Next
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CategorySelection;
