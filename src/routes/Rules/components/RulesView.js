import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

import './RulesView.scss'

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rules-container">
        <div className="alignLeft">
          <h4 className='alignLeft'>Win a Free Ticket to Resonance</h4>
          <p className="alignLeft">Do you want to win a free ticket to Resonance?</p>
          <p className="alignLeft">This year Resonance Music Festival is helping to raise funds for Advocates of Change, a a 501(c)3 public charity non-profit organization that is mobilizing and empowering the music community to positively impact our communities through art and activism.</p>
        </div>

        <div className="alignLeft">
          <h4 className='alignLeft'>What Is This?</h4>
          <p className="alignLeft">This year Resonance Music Festival is helping to raise funds for Advocates of Change, a a 501(c)3 public charity non-profit organization that is mobilizing and empowering the music community to positively impact our communities through art and activism.</p>
          <p className="alignLeft">In addition to prompting festival goers to donate money to Advocates of Change during the ticket buying process, Resonance and Advocates of Change have parntered with The Rumpke Mountain Boys to allow fans to vote on what songs will appear in their late night setlist in exchange for a monetary contribution to Advocates of Change.</p>
        </div>

        <div className="alignLeft">
          <h4 className='alignLeft'>How It Works</h4>
          <p className="alignLeft">Festival goers can cast their setlist ballot by going to the Vote page, selecting which songs they want to hear, and then clicking "Cast Ballot" at the bottom of the page. Voting ends on <u>September ***SOME DATE*** at ***SOME TIME***</u>. We will then tally up the number of votes each song got and hand them off the the Rumpke Mountain Boys for them to incorporate into their late-night setlist on *** SOME DATE*** at ***SOME TIME*** at the ***SOME STAGE***.</p>
        </div>
        <div className="alignLeft">
          <h4 className='alignLeft'>Pricing</h4>
          <p className="alignLeft">1 for $3, <br /> 2 for $5</p>
        </div>
        <div className="alignLeft">
          <p className="alignRight">Thank you!</p>
          <p className="alignRight">Advocates of Change, <br /> Essential Productions, <br />Resonance Music Festival, <br /> & Rumpke Mountain Boys,</p>
        </div>
      </div>
    )
  }
}
