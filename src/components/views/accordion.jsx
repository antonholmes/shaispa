import React from 'react'
// import classNames from 'classnames'
// import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import accordionStyle from './styling/accordionStyle'

function LinksAccordion({...props}) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          GMA News Playlist
        </AccordionSummary>
        <AccordionDetails>
          Watch reports here
          {/* <a href="https://www.youtube.com/watch?v=FAFUl8uzrVc&list=PLG5yvmTxvDF1b5C57aEIlu4lmQiKsIAOD">here</a> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          COVID-19 Playlist
        </AccordionSummary>
        <AccordionDetails>
          <div>
            I've been covering COVID-19 since the first person under
            investigation landed in the Philippines. I do the daily updates on
            GMA News, along with maintaining our COVID-19 dashboard.
          </div>
          {/* <div>
                        <a href="https://www.youtube.com/watch?v=7dAfaoMZg0A&list=PLG5yvmTxvDF0iU06V6iq1Bh_rGpSZi_pr">here</a>
                    </div> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Korea Playlist
        </AccordionSummary>
        <AccordionDetails>
          Watch reports here
          {/* <a href="https://www.youtube.com/watch?v=n5ec3fGvF8Q&list=PLG5yvmTxvDF294Ygoy69n8DoPhkIb6MRO">here</a> */}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default withStyles(accordionStyle)(LinksAccordion)
