// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ArrowIcon from '@material-ui/icons/KeyboardArrowLeft'

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
  static defaultProps = {
    showAdd: false,
    showBack: false,
    title: '',
  }

  goBack = () => {
    const { history } = this.props
    history.goBack()
  }

  goToPageNew = () => {
    const { history } = this.props
    history.push('/new')
  }

  render() {
    const {
      showAdd,
      showBack,
      title,
      classes,
    } = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          {showBack && (
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <ArrowIcon onClick={this.goBack} />
            </IconButton>
          )}
          <Typography variant="title" color="inherit" className={classes.flex}>
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

export default withRouter(withStyles(styles)(NavBar))
