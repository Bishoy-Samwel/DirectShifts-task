import { getToken } from "./auth";

// Actions Types
const GET_REFERRED_LIST = 'GET_REFERRED_LIST'
const GET_REFERRED_LIST_DONE = 'GET_REFERRED_LIST_DONE'
const LOADING_REFERRED_LIST = 'LOADING_REFERRED_LIST'

// Initial State
const initialState = {
  referredList: [],
  loading: false
};
// Reducer
export default function referralReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_REFERRED_LIST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_REFERRED_LIST: {
      console.log(action.payload);
      return {
        ...state,
        referredList: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
}

// Action Creators


// Thunks ( or any side effects )

export const getReferredList = () => {
  return (dispatch) => {
    dispatch({type:LOADING_REFERRED_LIST});
    return fetch("http://localhost:3000/referral/show", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: getToken(),
      },
    }).then((res) => {
      if (res.ok) {
        return res
          .json()
          .then((res) =>
            dispatch({ type: GET_REFERRED_LIST, payload: res.referred_users_status })
          );
      } else if (res.status == '401') {
        return res.text().then((text) => Promise.reject(text))
      }
    })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err))
  };
};

