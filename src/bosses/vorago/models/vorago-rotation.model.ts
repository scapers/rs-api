export class VoragoRotation {
  normal: string
  hard: VoragoHardmode
  /* istanbul ignore next */
  constructor(normal?: string, hard?: VoragoHardmode) {
    this.normal = normal || ''
    this.hard = hard || new VoragoHardmode()
  }
}

/***
 * @hidden
 */
export class VoragoHardmode {
  phase10: string
  phase11: string
  unlock: string
  /* istanbul ignore next */
  constructor(phase10?: string, phase11?: string, unlock?: string) {
    this.phase10 = phase10 || ''
    this.phase11 = phase11 || ''
    this.unlock = unlock || ''
  }
}
