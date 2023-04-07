import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PayStack from "./PayStack";

type Props = {};

function DepositTabs({}: Props) {
  const indicatorWidth = "30%";
  const [value, setValue] = React.useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="tabs"
            sx={{
              padding: 0,
              display: "flex",
              justifyContent: "center",

              "& button": {
                marginRight: { xs: "0rem", md: "2rem" },
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 400,
                textTransform: "capitalize",
              },
              "& button.Mui-selected": {
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
            <Tab label="Bank Transfer" value="1" />
            <Tab label="Quick Teller" value="2" />
            <Tab label="Direct Bank" value="3" />
          </TabList>

          <TabPanel sx={{ padding: { xs: " 1rem 0", sm: "1rem" } }} value="1">
            <PayStack />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default DepositTabs;
