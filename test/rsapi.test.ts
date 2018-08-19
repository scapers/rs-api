import RSapi from '../src/rsapi';
import { GameVersion } from '../src/game-version';

describe('RsApi', () => {
  it('RsApi is instantiable', () => {
    expect(new RSapi()).toBeInstanceOf(RSapi);
  });
  describe('GameVersion', () => {
    it('rs is instantiable', () => {
      expect(new RSapi().rs()).toBeInstanceOf(GameVersion);
    });
  });
  /*describe('OSRS', () => {
    it('OSRS is instantiable', () => {
      expect(new RSapi().osrs()).toBeInstanceOf(OSRS)
    })
  })*/
});
