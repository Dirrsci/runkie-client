// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_SONG = 'SELECT_SONG'
export const UNSELECT_SONG = 'UNSELECT_SONG'

// ------------------------------------
// Actions
// ------------------------------------
export function selectSong(id) {
  return {
    type : SELECT_SONG,
    id
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
  [SELECT_SONG] : (state, action) => {
    const newState = { ...state };
    newState.songData[action.id].isSelected = !state.songData[action.id].isSelected;
    return {
      ...newState,
    }
  },
  [UNSELECT_SONG] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  songData: {
    Something_To_Say_1: {
      title: 'Something To Say',
      isSelected: false
    },
    Mermandingo_1: {
      title: 'Mermandingo',
      isSelected: false
    },
    Red_Hat_1: {
      title: 'Red Hat',
      isSelected: false
    },
    Call_Your_Bluff_1: {
      title: 'Call Your Bluff',
      isSelected: false
    },
    Cold_Hearted_Whine_1: {
      title: 'Cold Hearted Whine',
      isSelected: false
    },
    The_Vogue_1: {
      title: 'The Vogue',
      isSelected: false
    }
  }
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
