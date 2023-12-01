type LocalStorageKey = ""
type LocalStorageItem = { key: LocalStorageKey; value: string | number | object }

export default abstract class LocalStorageHelper {
  static SaveLocalStorageItem = ({ key, value }: LocalStorageItem) => window.localStorage.setItem(key, JSON.stringify(value))
  static GetLocalStorageItem = <T>(key: LocalStorageKey) => JSON.parse(window.localStorage.getItem(key) ?? "{}") as T
  static DeleteLocalStorageItem = (key: LocalStorageKey) => window.localStorage.removeItem(key)
}
