import React from 'react'
import ReactTable from 'react-table'
import Checkout from './Checkout'
import { Elements } from 'react-stripe-elements'

// import AudioPlayer from 'react-responsive-audio-player'
import FontAwesome from 'react-fontawesome'

import 'react-table/react-table.css'
import './IndexView.scss'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)

    // current playing song
    this.players = {};

    this.state = {};

    this.onCellClick = this.onCellClick.bind(this)
    this.selectCell = this.selectCell.bind(this)
    this.songCell = this.songCell.bind(this)
    this.play = this.play.bind(this)
    this.columns = this.columns.bind(this)
  }

  onCellClick(original) {
    // const { isSelected, id, title } = original;
    return () => this.props.selectSong(original.id)
  }

  selectCell(c) {
    const { isSelected } = c.original;
    return (
      <div onClick={this.onCellClick(c.original)}>
        {JSON.stringify(isSelected)}
      </div>
    )
  }

  play(id) {
    return () => {
      const songIds = Object.keys(this.players);
      for (let i = 0; i < songIds.length; i++) {
        const id = songIds[i]
        // resets all other song
        if (this.players[id].played.length > 0) {
          this.players[id].load()
        }
      }
      // if we played the currrent playing song, stop it and reload
      if (this.state.currentPlay === id) {
        this.players[id].load()
        this.setState({ currentPlay: null })
      } else {
        this.players[id].play()
        this.setState({ currentPlay: id })
      }
    }
  }

  songCell(c) {
    const { id, title } = c.original
    const { currentPlay } = this.state
    return (
      <div className="song-player-container">
        <FontAwesome name={currentPlay === id ? 'stop' : 'play'} className="play-button"
          onClick={this.play(id)} />
        <div className="song-title">{title}</div>

        <audio className="audio-player" controls="controls" data-test={id} preload ref={(ref) => this.players[id] = ref} >
          <source src="http://archive.org/download/rumpkemb2017-04-08.a24bit/rumpkemb04082017a24bit12.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )
  }

  columns() {
    const columns = []
    columns.push({ Header: 'Select', accessor: 'isSelected', Cell: this.selectCell })
    columns.push({ Header: 'Song Title', accessor: 'title', Cell: this.songCell })
    return columns
  }

  getNumSelected(songData) {
    // add up all songs voted for
    return [0, ...songData].reduce((sum, b) => {
      return b.isSelected ? sum + 1 : sum
    })
  }

  render() {
    const { songData, vote } = this.props;
    return (
      <div className="index-container">
        <ReactTable
          minRows={3}
          data={songData}
          columns={this.columns()}
        />

        <Elements>
          <Checkout vote={vote}/>
        </Elements>
        You selected {this.getNumSelected(songData)} songs
      </div>
    )
  }
}
