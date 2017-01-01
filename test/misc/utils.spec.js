import { expect } from 'chai'

import * as utils from '../../src/utils'

describe('utils', () => {
  it('should get uuid correctly', () => {
    expect(utils.uuid()).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  })

  it('should get today in proper format', () => {
    expect(utils.today()).to.match(/^20[0-9]{2}-[01][0-9]-[0123][0-9]$/)
  })
})
