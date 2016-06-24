import * as types from '../constants'
import * as load from './loadingaction';
import * as server from './serveraction';
import { notification } from 'antd';
/*
 * action 创建函数
 */

 export function getAccessSuccess(data) {
     return {
         type: types.ACCESSSUCCESS,
         user: data,
     };
 }

 function getAccessFail() {
     return {
         type: types.ACCESSFAIL,
     };
 }

export function logIn(text) {
    return {
      type: types.LOG_IN,
      text
    }
}

export function logOut(text) {
    return {
      type: types.LOG_OUT,
      text
    }
}

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

export function validateAccessToken(_accesstoken) {
    return (dispatch) => {
        dispatch(load.openLoading());
        return server.makeRequest('http://api.panbx.com/user/onlogin.html?username='
          +_accesstoken.username+ "&password=" +_accesstoken.userpass, 'post')
            .then(function(response) {
                dispatch(load.closeLoading());
                if (response.status >= 400) {
                    dispatch(getAccessFail());
                    return null;
                }
                return response.json();
            })
            .then(function(data) {
                if (data.flag == 1) {
                  notification['error']({
                    message: '登陆失败',
                    description: data.message
                  });
                } else {
                  notification['success']({
                    message: '成功登陆',
                    description: data.message
                  });

                  // const user = Object.assign({},data,{accesstoken:_accesstoken});
                  // if(window&&typeof window.sendloginsuccess === 'function'){
                  //     window.sendloginsuccess(user);
                  // }
                  // return dispatch(getAccessSuccess(user));

                  window.localStorage.removeItem("logstatus");
                  window.localStorage.setItem("logstatus",true);
                  dispatch(load.openLoading());
                  setTimeout(function(){
                    dispatch(load.closeLoading());
                    document.location.href = '/';
                  },888);
                  return dispatch(logIn(_accesstoken));

                }

            });
    };
}
