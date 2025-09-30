import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import StudentHousing from "./StudentHousing";
import CoLivingForPro from "./CoLivingForPro";
import ApartmentsRules from "./ApartmentsRules";

// Utility function for accessibility
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Tab panel component
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const HouseRulesTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="w-[60%] mx-auto flex  justify-center py-2 border border-gray-50 rounded-xl lg:rounded-full box-shadow ">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { backgroundColor: "#80bf1e", height: "2px" }, // orange underline
            }}
            sx={{
              "& .MuiTabs-flexContainer": {
                flexDirection: { xs: "column", md: "row" },
              },
              "& .MuiTabs-indicator": {
                display: { xs: "none", md: "block" },
              },
            }}
          >
            <Tab
              label="Modern Student Housing"
              {...a11yProps(0)}
              {...a11yProps(2)}
              sx={{
                color: "gray",
                "&.Mui-selected": { color: "#80bf1e", fontWeight: "bold" },
              }}
            />
            <Tab
              label="Co - Living For Professionals"
              {...a11yProps(1)}
              {...a11yProps(2)}
              sx={{
                color: "gray",
                "&.Mui-selected": { color: "#80bf1e", fontWeight: "bold" },
              }}
            />
            <Tab
              label="Managed Apartments"
              {...a11yProps(2)}
              {...a11yProps(2)}
              sx={{
                color: "gray",
                "&.Mui-selected": { color: "#80bf1e", fontWeight: "bold" },
              }}
            />
          </Tabs>
        </Box>
      </div>
      <CustomTabPanel value={value} index={0}>
        <StudentHousing />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <CoLivingForPro />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ApartmentsRules />
      </CustomTabPanel>
    </>
  );
};

export default HouseRulesTabs;
