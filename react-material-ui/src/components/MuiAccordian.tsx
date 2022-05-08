import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
      console.log(isExpanded)
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel-1" ? true : false}
        onChange={(_, isExpanded) => handleChange(isExpanded, "panel-1")}
      >
        <AccordionSummary
          id="email-header"
          aria-controls="panel-1-content"
          expandIcon={<ExpandMoreRoundedIcon />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            voluptatem. Aperiam molestiae laudantium tenetur ratione aliquid,
            dolor est totam nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste tempora aliquid beatae illum earum vel
            perspiciatis non delectus eos? Tenetur veritatis ab, aliquid quasi
            ex molestias illo facilis. Magni, dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-2" ? true : false}
        onChange={(_, isExpanded) => handleChange(isExpanded, "panel-2")}
      >
        <AccordionSummary
          id="email-header"
          aria-controls="panel-1-content"
          expandIcon={<ExpandMoreRoundedIcon />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            voluptatem. Aperiam molestiae laudantium tenetur ratione aliquid,
            dolor est totam nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste tempora aliquid beatae illum earum vel
            perspiciatis non delectus eos? Tenetur veritatis ab, aliquid quasi
            ex molestias illo facilis. Magni, dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel-3" ? true : false}
        onChange={(_, isExpanded) => handleChange(isExpanded, "panel-3")}
      >
        <AccordionSummary
          id="email-header"
          aria-controls="panel-3-content"
          expandIcon={<ExpandMoreRoundedIcon />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
            voluptatem. Aperiam molestiae laudantium tenetur ratione aliquid,
            dolor est totam nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste tempora aliquid beatae illum earum vel
            perspiciatis non delectus eos? Tenetur veritatis ab, aliquid quasi
            ex molestias illo facilis. Magni, dolor!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordian;
