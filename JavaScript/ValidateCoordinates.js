const longitudeRegex = /^[\-\+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180\.0{1,10})$/
const latitudeRegex = /^[\-\+]?((0|([1-8]\d?))(\.\d{1,10})?|90(\.0{1,10})?)$/

/**
 * 写一个函数通过上面两个正则表达式验证一个经纬度是否合法 
 */
function validateCoordinates(longitude, latitude) {
  // 正则表达式匹配
  const longitudeMatch = longitude.match(longitudeRegex)
  const latitudeMatch = latitude.match(latitudeRegex)
  // 匹配失败
  if (!longitudeMatch ||!latitudeMatch) {
    return false
  }
  // 匹配成功
  return true
}


/**
 * https://developer.aliyun.com/article/618783
 */