import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import Header from './Header'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>
    <div className='container text-center'>
      <img src={require('../assets/site-banner.png')} width={'100%'}/>
      <div className="header-nav">
        <Link to="/rules" style={{marginRight: 10}}><button>What Is This?</button></Link>
        <Link to="/" style={{marginRight: 10}}><button>Vote</button></Link>
        <Link to="/results"><button>Standings</button></Link>
      </div>
      {/*
        // this activeClassName is super cool
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
      {' · '}
      <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}
      <div className='page-layout__viewport'>
        {children}
      </div>
    </div>
    <div className="footer">
      <div className="footer-left">
        Resonance is a weekend long gathering of like minded, motivated, music loving individuals happening September 21 - 23, 2017 at Legend Valley in Thornville, OH.
      </div>
      <div className="footer-center"></div>
      <div className="footer-right">
        Advocates for Change is a 501(c)3 public charity non-profit organization aimed at *** GET VERBAGE FROM CHAD ***.
      </div>

    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
