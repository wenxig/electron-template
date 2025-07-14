declare global {
  interface Error {
    toJSON: () => string
    [x: symbol]: any
  }
  interface Set<T> {
    toJSON: () => Array<T>
  }
  interface Map<K, V> {
    toJSON: () => Record<T, V>
  }
}

export { }