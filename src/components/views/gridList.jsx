import React from 'react'
// import classNames from 'classnames'
// import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
// import StarBorderIcon from '@material-ui/icons/StarBorder'
import gridListStyle from './styling/gridListStyle'
import tileDataWedding from './tileDataWedding'

function WeddingGridList({...props}) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileDataWedding.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              // actionIcon={
              //     <IconButton aria-label={`star ${tile.title}`}>
              //         <StarBorderIcon className={classes.title} />
              //     </IconButton>
              // }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default withStyles(gridListStyle)(WeddingGridList)
