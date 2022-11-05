import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordianSummary from '@mui/material/AccordionSummary'
import AccordianDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            doloribus laborum, soluta dolore voluptates et doloremque animi
            laboriosam obcaecati libero architecto officia! Dolore quaerat
            repellat reprehenderit reiciendis, doloribus unde sint?
          </Typography>
        </AccordianDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            doloribus laborum, soluta dolore voluptates et doloremque animi
            laboriosam obcaecati libero architecto officia! Dolore quaerat
            repellat reprehenderit reiciendis, doloribus unde sint?
          </Typography>
        </AccordianDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favourite Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            doloribus laborum, soluta dolore voluptates et doloremque animi
            laboriosam obcaecati libero architecto officia! Dolore quaerat
            repellat reprehenderit reiciendis, doloribus unde sint?
          </Typography>
        </AccordianDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            doloribus laborum, soluta dolore voluptates et doloremque animi
            laboriosam obcaecati libero architecto officia! Dolore quaerat
            repellat reprehenderit reiciendis, doloribus unde sint?
          </Typography>
        </AccordianDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordianSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The final Question
          </Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            doloribus laborum, soluta dolore voluptates et doloremque animi
            laboriosam obcaecati libero architecto officia! Dolore quaerat
            repellat reprehenderit reiciendis, doloribus unde sint?
          </Typography>
        </AccordianDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ
