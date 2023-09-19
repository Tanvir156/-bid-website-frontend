import React, { useState, useEffect } from "react";
import Carousell from "./Carousell";
import ProductCard from "./ProductCard";
import img1 from "./../../public/caro4.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import config from "./../../config";
const API_URL = `${config.API_URL}/api/products/productlist`;

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Home = ({ products }) => {
  const theme = useTheme();
  const router = useRouter();

  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const categories = Array.from(
    new Set(products.map((product) => product.selectedCategory))
  );
  const productNames = products.map((product) => ({ title: product.name }));
  const filteredProductsByCategory = products.filter((product) => {
    return personName.includes(product.selectedCategory);
  });

  const filteredProductsByName = products.filter((product) => {
    return personName.includes(product.name);
  });

  // Filtering based on selected product names and categories
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      personName.length === 0 || personName.includes(product.selectedCategory);
    const matchesName =
      personName.length === 0 || personName.includes(product.name);

    return matchesCategory || matchesName; // Change && to ||
  });
  // Selecting the products to display on the current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Carousell />
      </div>
      <div className="container custom-margin">
        <div className="row">
          <div className="col-12 text-center ">
            <h1>Feature Product</h1>
          </div>
        </div>
      </div>
      <div style={{ margin: "20px", display: "flex" }}>
        <div className="gridflex">
          {/* Dropdown for selecting product categories */}
          <FormControl sx={{ m: 2, width: 300 }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select Category</em>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem disabled value="">
                <em>Select Category</em>
              </MenuItem>
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                  style={getStyles(category, personName, theme)}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Autocomplete for selecting product names */}
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={productNames}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ margin: 17, width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Item"
                placeholder="Select Item"
              />
            )}
          />
        </div>
      </div>
      <div className="product-list">
        <Container fluid>
          <Row xs={2} md={4} lg={5}>
            {currentProducts.map((product) => (
              <Col key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
        <div className="pagination-container">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Home;
