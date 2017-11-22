// @flow

import React from 'react'
import classNames from 'classnames'


type Props = {
  active: boolean,
  children: any,
  onClick: Function,
}

const Button = ({ active, children, onClick }: Props) => (
  <button
    className={classNames('pt-button', 'pt-minimal', active && 'pt-active')}
    onClick={() => { onClick() }}
  >
    {children}
  </button>
)

export default Button
