// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_SONG = 'SELECT_SONG'
export const UNSELECT_SONG = 'UNSELECT_SONG'

// ------------------------------------
// Actions
// ------------------------------------
export function selectSong (songName) {
  return {
    type : SELECT_SONG,
    songName
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  selectSong
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_SONG]    : (state, action) => {
    return state.songData[action.song]
  },
  [UNSELECT_SONG] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  songData: {
    'Something To Say': false
    'Mermandingo': false
    'Red Hat': false
    'Call Your Bluff': false
    'Cold Hearted Whine': false
    'The Vogue': false
  }
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
