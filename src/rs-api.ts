// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { Bosses } from './bosses/bosses'

export default class RsApi {
  bosses(): Bosses {
    return new Bosses()
  }
}
