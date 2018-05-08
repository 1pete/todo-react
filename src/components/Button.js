// @flow

import React from 'react'
import classNames from 'classnames'


type Props = {
  active: boolean,
  children: any,
  onClick: Function,
}

function Button({ active, children, onClick }: Props) {
  return (
    <button
      className={classNames('pt-button', 'pt-minimal', active && 'pt-active')}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button
