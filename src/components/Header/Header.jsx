import React from 'react'

// Styled Component
import { HeaderCtn, NavCtn, Menu, HeaderDesc } from './Styled'

function Header() {
    const langBtn = {color: "#fff", padding: "7px 17px", border: "2px solid #fff", letterSpacing: "1px", background: "transparent", fontWeight: "400", borderRadius: "2px", textDecoration: "none"};
  return (
    <HeaderCtn>
        <NavCtn>
            <div>
                <svg viewBox="0 0 111 30" data-uia="netflix-logo" class="svg-icon svg-icon-netflix-logo" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
            </div>
            <Menu>
                <li><a style={langBtn} href="#">English</a></li>
                <li><a style={{textDecoration: "none", color: "#fff", background:"#e50914", fontSize:"1rem", fontWeight: "400", padding:"7px 17px", borderRadius:"3px"}} href="#">Sign In</a></li>
            </Menu>
        </NavCtn>
        <HeaderDesc>
            <div>
                <h1 style={{fontSize: "4rem", lineHeight: "1.1"}}>Unlimited movies, TV<br />
                    shows, and more.
                </h1>
                <h3 style={{fontWeight:"400", marginTop:"1rem", fontSize:"1.625rem"}}>Watch anywhere. Cancel anytime.</h3>
                <p style={{fontSize:"1.2rem", paddingBottom:"20px", marginTop:"2rem"}}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                    <input style={{position:"relative", minWidth:"480px", height:"65px", paddingLeft:"0.5rem", fontSize:"1rem", border:"none", outline:"none"}} type="email" placeholder='Email address' />
                    <button style={{background:"#e50914",padding:"0 1em", color:"#fff", fontSize:"1.625rem", minHeight:"65px", width:"250px", position:"relative", top:"4px", left:"0", border:"none", cursor:"pointer", borderLeft:"1px solid #333"}} type="submit">Get Started</button>
                </div>
            </div>
        </HeaderDesc>
    </HeaderCtn>
  )
}

export default Header