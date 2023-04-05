import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box, Stack, Container } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";

type Props = {};

function FrequentlyAQ({}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const data = [
    {
      id: "1",
      quest: "How to Fund account?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.architecto assumenda voluptatem recusandae esse ratione dicta vel,nemo asperiores harum qui voluptas natus soluta minus beataesdelectus dolorem doloribus exercitationem?",
    },
    {
      id: "2",
      quest: "How to sign up?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.architecto assumenda voluptatem recusandae esse ratione dicta vel,nemo asperiores harum qui voluptas natus soluta minus beataesdelectus dolorem doloribus exercitationem?",
    },
    {
      id: "3",
      quest: "When to get dummy question here",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.architecto assumenda voluptatem recusandae esse ratione dicta vel,nemo asperiores harum qui voluptas natus soluta minus beataesdelectus dolorem doloribus exercitationem?",
    },
    {
      id: "4",
      quest: "When to get paid and expect cash",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit.architecto assumenda voluptatem recusandae esse ratione dicta vel,nemo asperiores harum qui voluptas natus soluta minus beataesdelectus dolorem doloribus exercitationem?",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        color: "white",
        minHeight: "100svh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginY: "2rem",
      }}
    >
      <Box>
        <Stack
          sx={{
            width: "100%",
            marginTop: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
              paddingY: "0.75rem",
            }}
            variant="h2"
          >
            FAQ
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            alias. Lorem ipsum dolor sit amet.
          </Typography>
        </Stack>
        <Box
          sx={{
            // paddingY: "3rem",
            background: "",
            marginY: "2rem",
            width: "100%",
            // height: "90vh",
            marginX: "auto",
          }}
        >
          {data.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{ color: "white" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "white" }} />}
                aria-label="Expand"
                aria-controls="-content"
                id="-header"
              >
                <Typography variant="body1">{item.quest}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.65, fontWeight: 300 }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default FrequentlyAQ;
