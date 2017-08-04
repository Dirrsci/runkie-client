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
        <h2>Advocates for Change Setlist Voting</h2>
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
          <h4 className='alignLeft'>Prizes</h4>
          <p className="alignLeft">Each individual vote will be an entry into a raffle to win a FREE GA Ticket to Resonance Music Festival 2017 courtesy of Essential Productions.</p>
          <p className="alignRight">Thank you!</p>
          <p className="alignRight">Advocates of Change, <br /> Essential Productions, <br />Resonance Music Festival, <br /> & Rumpke Mountain Boys,</p>
        </div>

        <hr className="divider" style={{color: '#ffffff', backgroundColor: '#ffffff'}}/>

        <div className="alignLeft">
          <h4 className="alignLeft">About Advocates of Change</h4>
          <img className="img-box floatRight" width="200" src={require('../../../layouts/assets/afc-logo.png')} />
          <p className="alignLeft">
            Advocates of Change is a 501(c)3 nonprofit organization mobilizing and empowering the music community to positively impact our communities through art and activism. Our mission is to nurture our society and environment by empowering our peers through education, inclusive action, music, and the arts. By utilizing the passion and creativity of the music and arts community, we raise funds, goods, and awareness for humanitarian causes, while encouraging the arts and community activism. From our perspective, there are so many individuals that want to help, that want to create change, that want to impact their communities in a positive way; we are a platform for these inspired individuals. We want to inspire individuals just as individuals have inspired us.
          </p>
        </div>

        <div className="alignRight">
          <h4 className='alignRight'>About the Rumpke Mountain Boys</h4>
          <img className="img-box floatLeft" width="250" src={require('../../../layouts/assets/rumpke.jpg')} />
          <p className="alignRight">The Rumpke Mountain Boys combine signature vocals, a unique command of string instruments (acoustic guitar, mandolin, upright bass and banjo) and dynamic special effects into a singular musical experience. An emotion filled musical stream of consciousness with no setlist, minimal structure, and intuitive improvisational flow. In this way, they summon the energy of the crowd as their guide in linking just the right music to precise moments in time.</p>
          <p className="alignRight">Grateful Dead Hour host David Gans proclaimed, “One of the things I love about the Rumpke Mountain Boys is that there’s a fundamental honesty in their presentation. This is something they share with my other heroes, Donna the Buffalo and the Grateful Dead. They don’t make set lists ahead of time, they don’t rehearse their songs to a fare-thee-well-- they perform in real time. All four of them write, which is very important, and they draw songs from a tremendous variety of sources... being a musician is a life-long learning experience, if you’re doing it right, and they are.”</p>
        </div>

        <div className="alignLeft">
          <h4 className="alignLeft">About Essential Productions</h4>
          <img className="img-box floatRight" width="200" src={require('../../../layouts/assets/ep-logo.png')} />
          <p className="alignLeft">
            Essential Productions is a community driven event planning and promotion company with an emphasis on music and art. EP hosts many events in the Greater Cincinnati area focusing on empowering those in their own community as well as bringing in talent from across the country. The company hosts two music & arts festivals each year – Paradise Music and Arts Festival and Resonance Music and Arts Festival – embodying their goals and mentalities on a much larger scale. EP strives to keep pushing the limits and boundaries of a typical ‘concert’ experience and hopes to provide a platform for the talented and supportive members of their community in the process.
          </p>
        </div>
      </div>
    )
  }
}
