export const getArrayFromObject = obj => {
  return Object.keys(obj)?.map(key => obj[key])
}
