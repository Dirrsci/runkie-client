import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

import 'react-table/react-table.css'
import './IndexView.scss'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCounts = this.getCounts.bind(this);
    this.getLabels = this.getLabels.bind(this);
  }

  componentDidMount() {
    this.props.getSongCounts();
  }

  render() {
    console.log('this.props.songs: ', this.props.songs);
    const { songData, vote } = this.props;
    let data = {
      labels: this.data.labels,
      datasets: [
        {
          label: 'Votes',
          data: this.data.counts
        }
      ]
    }



    return (
      <div className="index-container">
        <HorizontalBar />
        test test test

      </div>
    )
  }
}
