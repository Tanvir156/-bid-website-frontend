// import * as React from "react";
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Login from "./../components/Auth/Login";
// import Registration from "./../components/Auth/Registration";
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

// const Auth = () => {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//           style={{ background: "#fff", color: "black" }}
//         >
//           <Tab label="Sign In" {...a11yProps(0)} />
//           <Tab label="Sign Up" {...a11yProps(1)} />
//         </Tabs>
//       </AppBar>

//       <TabPanel value={value} index={0}>
//         <Login />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Registration />
//       </TabPanel>
//     </Box>
//   );
// };
// export default Auth;
import React from "react";

const auth = () => {
  return <div>auth</div>;
};

export default auth;
