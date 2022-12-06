import { isArray, isString } from "./checkDataType"

type AnyObject = Record<string, unknown>
type KeysItem = {
  alias: string, // 别名
  default?: unknown, // 默认值
  formatter?: (...args: unknown[]) => unknown // 值的格式化函数
}
type KeyFormate = Record<string, KeysItem>
type KeysType = string | (string | Record<string, string | number>)[]

export const getDataFromObj = (targetData: AnyObject, keys: KeysType, formates: KeyFormate = {}) => {
  const result: AnyObject = {}
  if (isArray(keys)) {
    keys.forEach(item => {
      if (isString(item)) {
        if (formates[item]) {
          const formate = formates[item]
          result[formate.alias || item] = formate.formatter ? formate.formatter(targetData[item]) : (formate.default || targetData[item])
        } else {
          result[item] = targetData[item]
        }
      } else {
        Object.keys(item).forEach((key) => (result[item[key]] = targetData[key]))
      }
    })
    return result
  }
  return targetData[keys]
}
