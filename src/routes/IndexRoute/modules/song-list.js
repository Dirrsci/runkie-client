import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_SONG = 'SELECT_SONG'
export const POST_VOTE = 'POST_VOTE'

// ------------------------------------
// Actions
// ------------------------------------
export function selectSong(id) {
  return {
    type: SELECT_SONG,
    id
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const vote = (token) => {
  return (dispatch, getState) => {
    const { songData } = getState().index
    const songs = Object.keys(songData).filter((songId) => songData[songId].isSelected)

    return axios.post('http://localhost:8080/vote', {
      songs,
      name: 'something',
      email: 's@mething',
      token
    })
    .then(() => {
      dispatch({
        type: POST_VOTE,
        vote: 'change pages'
      })
    })
    .catch(console.log)
  }
}

export const actions = {
  selectSong,
  vote
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SELECT_SONG]: (state, action) => {
    const newState = { ...state }
    newState.songData[action.id].isSelected = !state.songData[action.id].isSelected
    return {
      ...newState
    }
  },
  [POST_VOTE]: (state/*, action*/) => {
    return {
      ...state
    }
  }
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

export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
