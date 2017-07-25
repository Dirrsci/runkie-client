import React from 'react'
import ReactTable from 'react-table'
import Checkout from './Checkout'
import { Elements } from 'react-stripe-elements'

import 'react-table/react-table.css'
import './IndexView.scss'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.onCellClick = this.onCellClick.bind(this)
    this.cell = this.cell.bind(this)
    this.columns = this.columns.bind(this)
  }

  onCellClick(original) {
    const { isSelected, id, title } = original;
    const { selectSong } = this.props;
    return () => {
      selectSong(id)
    }
  }

  cell(c) {
    const { isSelected } = c.original;
    return (
      <div onClick={this.onCellClick(c.original)}>
        {JSON.stringify(isSelected)}
      </div>
    )
  }

  columns() {
    const columns = []
    columns.push({ Header: 'Select', accessor: 'isSelected', Cell: this.cell })
    columns.push({ Header: 'Song Title', accessor: 'title' })
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
