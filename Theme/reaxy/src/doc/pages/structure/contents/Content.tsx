import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IAccordionItem } from "@doc/models/IStructureProps";
import { styles } from "./styles";

interface ContentProps {
  data: IAccordionItem[];
}

const renderAccordionItems = (data: IAccordionItem[] | undefined) => {
  if (!data) {
    return null;
  }

  const [expandedAccordions, setExpandedAccordions] = useState<string[]>([]);

  // ** style
  const theme = useTheme();
  const style = styles(theme);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedAccordions(isExpanded ? [panel] : []);
    };

  return data.map((item) => (
    <Accordion
      sx={style.accordion}
      key={item.title}
      expanded={expandedAccordions.includes(item.title)}
      onChange={handleChange(item.title)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${item.title}-content`}
        id={`${item.title}-header`}
      >
        <Box sx={style.inside}>
          <Box sx={{ fontSize: "24px" }}>{item.icon}</Box>
          <Typography variant="h6">{item.title}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{item.content}</Typography>
        {renderAccordionItems(item.items)}
      </AccordionDetails>
    </Accordion>
  ));
};

const Content: React.FC<ContentProps> = ({ data }) => {
  // ** style
  const theme = useTheme();
  const style = styles(theme);

  return (
    <Box sx={style.container}>
      <Typography textAlign={"center"} variant="h4">
        Contents
      </Typography>
      {renderAccordionItems(data)}
    </Box>
  );
};

export default Content;
