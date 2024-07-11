export function toFixedIfNecessary(value: number, decimal: number) {
  return +parseFloat(value.toString()).toFixed(decimal)
}
