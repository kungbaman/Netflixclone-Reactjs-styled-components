import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Enjoy from './components/Enjoy/Enjoy'
import Download from './components/Download/Download'
import Watch from './components/Watch/Watch'
import Kids from './components/KidsProfile/Kids'
import Questions from './components/Questions/Questions'

import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div>
      <Header />
      <Enjoy />
      <Download />
      <Watch />
      <Kids />
      <div style={{ padding: "3rem", background: "#000", color: "#fff", textAlign: "center", borderBottom: "8px solid #222" }}>
        <h3 style={{ fontSize: "3rem", marginBottom: "2rem" }}>Frequently Asked Questions</h3>
        {questions.map((question) => {
          return <Questions key={question.id} {...question} />
        })}
        <p style={{ margin: "5rem 0 1rem", fontSize: "1.2rem" }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <input style={{ width: "500px", padding: "1.5rem 1rem" }} type="email" placeholder="Email Address" />
        <button style={{ width: "200px", padding: "1.2rem 1rem", color: '#fff', backgroundColor: "#e50914", fontSize: "1.5rem", border: "none", position: "relative", top: "4px" }} type="submit">Get Started</button>
      </div>
    </div>
  )
}

export default App
