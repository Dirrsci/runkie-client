import React from 'react'
import ReactTable from 'react-table'
import Checkout from './Checkout'
import { Elements } from 'react-stripe-elements'
import classnames from 'classnames';

import 'react-table/react-table.css'
import './IndexView.scss'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onCellClick = this.onCellClick.bind(this);
    this.voteCell = this.voteCell.bind(this);
    this.audioPlaybackCell = this.audioPlaybackCell.bind(this);
    this.columns = this.columns.bind(this);
  }

  onCellClick(original) {
    // const { isSelected, id, title } = original;
    return () => this.props.selectSong(original.id)
  }

  voteCell(c) {
    const { isSelected } = c.original;
    return (
      <div onClick={this.onCellClick(c.original)}>
        {JSON.stringify(isSelected)}
      </div>
    )
  }

  audioPlaybackCell(c) {
    return (
      <div onClick={this.togglePlay}>
        <i className={classnames("fa", {"fa-play": !this.state.is_playing, "fa-pause": this.state.is_playing})} aria-hidden="true"></i>
      </div>
    )
  }

  columns() {
    const columns = []
    columns.push({ Header: '', sortable: false, resizable: false, Cell: this.audioPlaybackCell });
    columns.push({ Header: 'Select', accessor: 'isSelected', Cell: this.voteCell });
    columns.push({ Header: 'Song Title', accessor: 'title' });
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
