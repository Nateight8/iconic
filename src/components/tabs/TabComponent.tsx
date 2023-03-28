import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Overview from "../overview/Overview";
import Account from "../account/Account";
import Payment from "../payment/Payment";

type Props = {};

function TabComponent({}: Props) {
  const [value, setValue] = React.useState("1");

  const indicatorWidth = "30%";

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs"
            sx={{
              padding: 0,
              display: "flex",
              justifyContent: "center",

              "& button": {
                padding: 0,
                marginRight: { xs: "0rem", md: "2rem" },
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 400,
                textTransform: "capitalize",
              },
              "& button.Mui-selected": {
                padding: 0,
                marginRight: { xs: "0rem", md: "2rem" },
                color: "white",
                opacity: 1,
                fontWeight: 500,
              },
            }}
            TabIndicatorProps={{
              children: <span className="MuiTabs-indicatorSpan" />,
              sx: {
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
                ".MuiTabs-indicatorSpan": {
                  maxWidth: indicatorWidth,
                  width: indicatorWidth,
                  backgroundColor: "#FD4743",
                  borderRadius: "2rem",
                },
              },
            }}
          >
            <Tab label="Overview" value="1" />
            <Tab label="Account" value="2" />
            <Tab label="Opportunities" value="3" />
            <Tab label="Payment" value="4" />
          </TabList>
          {/* </Box> */}
          <TabPanel value="1">
            <Overview />
          </TabPanel>
          <TabPanel value="2">
            <Account />
          </TabPanel>
          <TabPanel value="3">
            <Payment />
          </TabPanel>
          <TabPanel value="4">
            <Payment />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default TabComponent;
