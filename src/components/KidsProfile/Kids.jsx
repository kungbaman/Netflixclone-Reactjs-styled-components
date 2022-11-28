import React from 'react'

import kidsImg from '../../assets/kids-img.png'
import { KidsCtn } from './Styled'

function Kids() {
    const kids = { width: '100%'}
  return (
    <KidsCtn>
        <div style={kids}>
            <img width='100%' src={kidsImg} alt="" />
        </div>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center'}}>
            <div>
                <h1 style={{ fontSize: '3rem', fontWeight: '550' }}>Create profiles for kids.</h1>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginTop: '1rem', letterSpacing: '1.5px' }}>Send kids on adventures with their favorite <br />
                    characters in a space made just for them—free <br />
                    with your membership.
                </h3>
            </div>
        </div>
    </KidsCtn>
  )
}

export default Kids