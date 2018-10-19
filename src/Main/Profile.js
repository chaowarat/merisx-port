import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  state = {
    hiAnimate: 'fadeInRight',
    nameAnimate: 'hidden',
    nickAnimate: 'hidden',
    avatarAnimate: 'hidden'
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ hiAnimate: 'fadeOutLeft slow' }) }, 2000)
    setTimeout(() => { this.setState({ hiAnimate: 'fadeIn slow static' }) }, 3000)
    setTimeout(() => { this.setState({ nameAnimate: 'zoomIn' }) }, 3500)
    setTimeout(() => { this.setState({ nameAnimate: 'zoomOut' }) }, 6000)
    setTimeout(() => { this.setState({ nickAnimate: 'zoomIn' }) }, 7000)
    setTimeout(() => { this.setState({ nickAnimate: 'zoomOut' }) }, 9000)
    setTimeout(() => { this.setState({ avatarAnimate: 'fadeIn' }) }, 10000)
  }

  render() {
    const { hiAnimate, nameAnimate, nickAnimate, avatarAnimate } = this.state
    return (
      <div className="section">
        <div className={"hi animated " + hiAnimate}>
          <span className="text">/ Hi,</span>
        </div>
        <div className={"name animated " + nameAnimate}>
          <span className="text">/ I’M SIWAPON SRIHAPONG</span>
        </div>
        <div className={"nick animated " + nickAnimate}>
          <span className="text">PIANO</span>
        </div>
        <div className={"avatar animated " + avatarAnimate}>
          <div className="circle"></div>
          <div>/ I’M SIWAPON SRIHAPONG</div>
          <div>PIANO</div>
        </div>
      </div>
    )
  }
}

export default Profile
