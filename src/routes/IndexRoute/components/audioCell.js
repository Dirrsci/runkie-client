import React from 'react'
import classnames from 'classnames';

export default class AudioCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_playing: false
    };
  }

  render() {
    const { url, vote } = this.props;
    return (
      <div onClick={this.togglePlay}>
        <audio ref={(ref) => this._player = ref} autoPlay={this.state.is_playing}>
            <source src={this.props.url} />
            <source/>
        </audio>
        <i className={classnames('fa', {'fa-play': !this.state.is_playing, 'fa-pause': this.state.is_playing})} aria-hidden='true'></i>
      </div>
    )
  }
}
