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
    this.props.getSongsWithVotes();
    console.log('this.props: ', this.props);
  }


  getLabels() {
    const songs = this.props.songs && this.props.songs.data;
    if (!songs) return;
    return songs.map((song) => { return song.title });
  }

  getCounts() {
    const songs = this.props.songs && this.props.songs.data;
    if (!songs) return;
    return songs.map((song) => { return song.count });
  }

  render() {
    console.log('this.props.songs: ', this.props.songs);
    let data = {
      labels: this.getLabels(),
      datasets: [
        {
          label: 'Votes',
          data: this.getCounts()
        }
      ]
    }

    return (
      <div className="index-container">
        <HorizontalBar
          data={data}
          legend={{ display: false }}
          scales={{
            xAxes: [{
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }]
          }}
        />
        test test test

      </div>
    )
  }
}
