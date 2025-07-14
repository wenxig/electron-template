import { fromPairs } from "lodash-es"

export const injectToJSON = () => {
  Error.prototype.toJSON = function () {
    return this.stack ?? this.message
  }
  Map.prototype.toJSON = function () {
    return fromPairs([...this.entries()])
  }
  Set.prototype.toJSON = function () {
    return [...this.values()]
  }
}