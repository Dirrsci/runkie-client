import React from 'react'
import ReactTable from 'react-table'
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
    return e => {
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

  render() {
    const { songData } = this.props;
    return (
      <div>
        <ReactTable
          minRows={3}
          data={songData}
          columns={this.columns()}
          />
      </div>
    )
  }
}
