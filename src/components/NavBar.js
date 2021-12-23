// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { KeyboardArrowLeft as ArrowIcon } from '@material-ui/icons'

import type { RouterHistory } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

type Props = {
  showAdd?: boolean,
  showBack?: boolean,
  title?: string,
  classes: Object,
  history: RouterHistory,
}

class NavBar extends Component<Props> {
  goBack = () => {
    const { history } = this.props
    history.goBack()
  }

  goToPageNew = () => {
    const { history } = this.props
    history.push('/new')
  }

  render() {
    const { showAdd, showBack, title, classes } = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          {showBack && (
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.goBack}
            >
              <ArrowIcon />
            </IconButton>
          )}
          <Typography variant="h5" color="inherit" className={classes.flex}>
            {title || 'To-Do List'}
          </Typography>
          {showAdd && (
            <Button color="inherit" onClick={this.goToPageNew}>
              new item
            </Button>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

NavBar.defaultProps = {
  showAdd: false,
  showBack: false,
  title: '',
}

export default withRouter(withStyles(styles)(NavBar))
