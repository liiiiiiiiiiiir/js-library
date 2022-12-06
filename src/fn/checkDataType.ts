type FuncType = (...args: unknown[]) => unknown

export const isString = (data: unknown): data is string => typeof data === "string"
export const isNumber = (data: unknown): data is number => typeof data === "number"
export const isBoolean = (data: unknown): data is boolean => typeof data === "boolean"
export const isNull = (data: unknown): data is null => data === null
export const isUndefined = (data: unknown): data is undefined => data === undefined
export const isArray = (data: unknown): data is unknown[] => Array.isArray(data)
export const isFunc = (data: unknown): data is FuncType => typeof data === "function"
export const isObject = (data: unknown): data is Record<string, unknown> => !isNull(data) && !isArray(data) && typeof data === "object"
