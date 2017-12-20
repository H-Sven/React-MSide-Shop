import * as actionTypes from '../constants/userinfo.redux'

export function update(data) {
  return{
    type:actionTypes.USERINFO_UPDATE,
    data
  }
}
