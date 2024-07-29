import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type MuiAccordionProps = {
  title: string;
  contents: string[];
};

export const MuiAccordion = ({ title, contents }: MuiAccordionProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content" id="panel2-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      {contents.map((content, index) => (
        <AccordionDetails key={index}>
          <Typography>{content}</Typography>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};
