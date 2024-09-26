import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import emotionStyled from '@emotion/styled';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions({data, pa, pb, pc, pd}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const AccordianEx = emotionStyled(Accordion)`
        background: #001b3975;
        backdrop-filter: blur(10px);
        border-radius: 12px;
        margin-bottom: 10px;

        .MuiAccordionSummary-content p{
            width: 100%;
            margin: 0 !important;
            padding: 20px 0;
        }
        .MuiAccordionDetails-root p { text-align: left}
    `
  return (
    <div>
        {data.map((item, index) => (
            <AccordianEx key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <AccordionSummary
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                >
                <Typography variant='body2'>Phase {index+1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {(item.slice(1)).map((item, index) => (
                        <Typography key={index} variant='body2' textAlign='center'>- {item}</Typography>
                    ))}
                </AccordionDetails>
            </AccordianEx>
        ))}
    </div>
  );
}
