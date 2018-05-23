// @flow

import React from 'react'

import MuiButton from '@material-ui/core/Button'

type Props = {
  active: boolean,
  children: any,
  onClick: Function,
}

function Button({ active, children, onClick }: Props) {
  return (
    <MuiButton
      variant="raised"
      color={active ? 'primary' : null}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  )
}

export default Button
