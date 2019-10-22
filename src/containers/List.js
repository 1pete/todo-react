// @flow

import { connect } from 'react-redux'

import List from '../components/List'

const getFlag = (status) => {
  switch (status) {
    case 'COMPLETED':
      return true
    case 'ACTIVE':
      return false
    default:
      return null
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  flag: getFlag(state.status),
})

export default connect(mapStateToProps)(List)
