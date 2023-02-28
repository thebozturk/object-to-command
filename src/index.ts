import _ from 'lodash'

/**
 * It takes an object and returns a string of arguments
 * @param obj - The object you want to convert to an argument.
 * @returns A string
 */

function objectToCommand(obj: { [key: string]: string | boolean | number }) {
  let arg = ''
  // If the value is true, return the key with a leading double dash,
  // otherwise return the key and value with a leading double dash
  const isTrue = (key: string, val: string | boolean | number) =>
    val === true ? ` --${key}` : ` --${key}="${val}"`
  // Iterating through the object and replacing the key with a kebab case version of the key.
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    const newKey = _.kebabCase(key.replace(/--/g, ''))
    arg += isTrue(newKey, obj[key])
  }
  return arg
}

export default objectToCommand
