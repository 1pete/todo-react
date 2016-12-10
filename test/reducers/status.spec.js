import { expect } from 'chai'

import reducer from '../../src/reducers/status'
import { FILTER_TODO } from '../../src/actions'

describe('reducer: status', () => {
  it('should has default state', () => {
    expect(reducer(undefined, {})).to.equal('ALL')
  })

  it('should set state properly', () => {
    expect(reducer('aaa', { type: 'unknown' })).to.equal('aaa')
    expect(reducer('aaa', { type: FILTER_TODO, status: 'bbb' })).to.equal('bbb')
  })
})
