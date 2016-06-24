import * as types from '../constants'
import * as load from './loadingaction';
import * as server from './serveraction';
/*
 * action 创建函数
 */

export function getData(data) {
    return {
      type: types.GET_DATA,
      data:data
    }
}

export function getdataSource(){
  return (dispatch) => {
    dispatch(load.openLoading());
    return server.makeRequest('http://api.panbx.com/user/getdata.html','get')
      .then(function(response) {
          dispatch(load.closeLoading());
          return response.json();
      })
      .then(function(data) {
            // console.log(data);
            return dispatch(getData(data));
      });
  };
}
