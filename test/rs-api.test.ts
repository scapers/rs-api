import RsApi from '../src/rs-api'
import { Bosses } from '../src/bosses/bosses'
import { Araxxor } from '../dist/types/bosses/araxxor/araxxor'

describe('RsApi', () => {
  it('RsApi is instantiable', () => {
    expect(new RsApi()).toBeInstanceOf(RsApi)
  })
})
