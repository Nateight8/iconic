import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box, Container } from "@mui/material";
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
    <Container maxWidth="md">
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "",
          marginY: "2rem",
        }}
      >
        {data.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            sx={{ background: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="body1">{item.quest}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default FrequentlyAQ;
