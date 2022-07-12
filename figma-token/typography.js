const tokens = require('./tr-tokens.json')
const list = Object.entries(tokens.global).filter(
  ([key, value]) => value?.type === 'typography'
)
const output = list.map(([key, { value }]) => {
  const mapVal = Object.entries(value).map(([k, val]) => {
    return [getKebabCase(k), `var(--${key}-${getKebabCase(k)})`]
  })
  return [`.${key}`, Object.fromEntries(mapVal)]
})
module.exports = Object.fromEntries(output)

function getKebabCase(str) {
  const newStr = str.replace(/[A-Z]/g, function(i) {
    return '-' + i.toLowerCase()
  })
  return newStr.slice(0, 1) === '-' ? newStr.slice(1) : newStr
}