import React from 'react'

import tvImg from '../../assets/tv-bg.png'
import { EnjoyCtn } from './Styled'

function Enjoy() {
  return (
    <EnjoyCtn>
        <div style={{width:"100%", display:"flex", justifyContent:"center",alignItems:"center"}}>
            <div>
                <h1 style={{fontSize:"3.125rem", fontWeight:"600"}}>Enjoy on your TV.</h1>
                <p style={{marginTop:"1rem", fontSize:"1.5rem", fontWeight:"500"}}>
                    Watch on Smart TVs, Playstation, Xbox, <br />
                    Chromecast, Apple TV, Blu-ray players, and <br />
                    more.
                </p>
            </div>
        </div>
        <div style={{position:"relative", width:"100%"}}>
            <img style={{position:"relative", zIndex:"1", width:"100%"}} src={tvImg} alt="" />
            <video style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -54%)", width:"73%"}} autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
        </div>
    </EnjoyCtn>
  )
}

export default Enjoy