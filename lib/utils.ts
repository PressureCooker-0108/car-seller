export function formatPrice(amount: number): string {
  // Format to Indian number system: ₹47,90,000
  const num = Math.round(amount)
  const str = num.toString()
  let result = ''
  if (str.length <= 3) return '₹' + str
  result = str.slice(-3)
  const remaining = str.slice(0, -3)
  for (let i = remaining.length; i > 0; i -= 2) {
    const start = Math.max(0, i - 2)
    result = remaining.slice(start, i) + ',' + result
  }
  return '₹' + result
}

export function formatKM(km: number): string {
  return km.toLocaleString('en-IN') + ' km'
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
