import { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import empty from "is-empty";

type TItemsArray = {
  title: string;
  description?: string | ReactNode;
};

interface ICustomAccordion {
  items: TItemsArray[];
  children: ReactNode;
}

export default function CustomAccordion({ items, children }: ICustomAccordion) {
  return (
    <div>
      {!empty(items)
        ? items.map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="span">
                  {item.description ? item.description : children}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        : "No dispone de elementos para mostrar"}
    </div>
  );
}
