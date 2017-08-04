import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

import 'react-table/react-table.css'
import './ResultsView.scss'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCounts = this.getCounts.bind(this);
    this.getLabels = this.getLabels.bind(this);
  }

  componentDidMount() {
    this.props.getSongsWithVotes();
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
    let data = {
      labels: this.getLabels(),
      datasets: [
        {
          label: 'Votes',
          data: this.getCounts(),
          backgroundColor: ['#613d90', '#2a854f', '#613d90', '#2a854f', '#613d90',
                            '#2a854f', '#613d90', '#2a854f', '#613d90', '#2a854f',
                            '#613d90', '#2a854f', '#613d90', '#2a854f', '#613d90',
                            '#2a854f', '#613d90', '#2a854f', '#613d90', '#2a854f',
                            '#613d90', '#2a854f', '#613d90', '#2a854f', '#613d90']
        }
      ]
    }

    return (
      <div>
        <h2 style={{color: '#ffffff'}}>Current Standings</h2>
        <div className="results-container">
          <HorizontalBar
            data={data}
            legend={{ display: false }}
            options={{
              scales: {
                xAxes: [{
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1
                  }
                }]
              }
            }} />
      </div>
    </div>
    )
  }
}
