import React from 'react'

import { Button as MuiButton } from '@material-ui/core'

type Props = {
  active: boolean,
  children: any,
  onClick: Function,
}

const Button = function Button({ active, children, onClick }: Props) {
  return (
    <MuiButton
      variant="raised"
      color={active ? 'primary' : 'default'}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  )
}

export default Button
