export function getItem(key) {
  let value
  try {
    value = localStorage.getItem(key)
  } catch (e) {
    //开发环境提示error
    console.error('localStorage.getItem报错',e.message);
  } finally {
    return value
  }
}

export function setItem(key,value) {
  try {
    //safari
    localStorage.setItem(key,value)
  } catch (e) {
    console.error('localStorage.setItem报错',e.message);
  }
}
