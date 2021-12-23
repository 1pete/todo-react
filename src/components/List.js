// @flow

import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import {
  List as MuiList,
  Typography,
} from '@material-ui/core'
import { Inbox as InboxIcon } from '@material-ui/icons'

import Item from '../containers/InteractiveItem'

const styles = (theme) => ({
  root: {
    width: '100%',
    paddingRight: 10,
    backgroundColor: theme.palette.background.paper,
  },

  emptyState: {
    position: 'absolute',
    top: '30%',
    width: '100%',
    textAlign: 'center',
    transition: 'opacity 0.4s',
  },
})

type Props = {
  flag?: boolean,
  items: Array<any>,
  classes: Object,
}

const List = function List({ items, flag, classes }: Props) {
  const filteredItems = flag == null ? items : items.filter((item) => !!item.completed === flag)

  return (
    <div className={classes.root}>
      <div className={classes.emptyState} style={{ opacity: +!filteredItems.length }}>
        <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
          <InboxIcon style={{ fontSize: 60 }} />
        </div>
        <Typography variant="h5">
          List is empty
        </Typography>
        <Typography variant="subtitle1">
          Try create a new to-do.
        </Typography>
      </div>
      <MuiList>
        {filteredItems.map((data) => <Item key={data.id} {...data} />)}
      </MuiList>
    </div>
  )
}

List.defaultProps = {
  flag: undefined,
}

export default withStyles(styles)(List)
