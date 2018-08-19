// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { GameVersion } from './game-version';

export default class RSapi {
  /*osrs(): GameVersion {
    return new GameVersion('osrs');
  }*/

  rs(): GameVersion {
    return new GameVersion('rs');
  }
}
