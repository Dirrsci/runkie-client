import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import './HomeView.scss'

const songData = [
  {
    title: 'Something To Say',
    selected: false
  },
  {
    title: 'Mermandingo',
    selected: false
  },
  {
    title: 'Red Hat',
    selected: false
  },
  {
    title: 'Call Your Bluff',
    selected: false
  },
  {
    title: 'Cold Hearted Whine',
    selected: false
  },
  {
    title: 'The Vogue',
    selected: false,
  }
]

export default class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.onCellClick = this.onCellClick.bind(this)
    this.cell = this.cell.bind(this)
    this.columns = this.columns.bind(this)
  }

  onCellClick(e) {
    console.log(value);
    const value = e.target.value;
  }

  cell(c) {
    const isSelected = c.original.selected;
    return <div onClick={this.onCellClick}>
      {JSON.stringify(isSelected)}
    </div>
  }

  columns() {
    const columns = []
    columns.push({ Header: 'Select', accessor: 'selected', Cell: this.cell })
    columns.push({ Header: 'Song Title', accessor: 'title' })
    return columns
  }

  render() {
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
