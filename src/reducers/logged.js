import { LOG_IN, LOG_OUT ,GET_DATA,  OPENLOADING,CLOSELOADING,ACCESSSUCCESS,ACCESSFAIL}
from '../constants'

const initialState = {
  logstatus: false,
  loadding: false,
}

export default function logged(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
    return Object.assign({}, state, {
      logstatus: true,
      loadding: false,
      username: action.text.username,
      password:action.text.userpass
    });
    case GET_DATA:
      return Object.assign([], state, {
        data:action.data
      });
    case LOG_OUT:
        return Object.assign({}, state, {
            user: {},
            islogin: false,
        });
      case OPENLOADING:
        return Object.assign({}, state, {
          loadding: true,
        });
      case CLOSELOADING:
        return Object.assign({}, state, {
          loadding: false,
        });
      case ACCESSSUCCESS:
        return Object.assign({}, state, {
          user: action.user,
          islogin: true,
        });
      default:
        return state
  }
}
