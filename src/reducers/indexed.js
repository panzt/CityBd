import { GET_DATA} from '../constants'

const initialState = {
  data: [],
}

export default function indexed(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return Object.assign([], state, {
        data:action.data
      });
      default:
        return state
  }
}
