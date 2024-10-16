import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TermnsConditions from './TermnsConditions'
import OffRocket from './OffRocket'
import Tripsichore from './Tripsichore'
import Mandala from './Mandala'
import Foundation from './Foundation'
import DiscoveryCall from './DiscoveryCall'
import YinYoga from './YinYoga'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/off-rocket" element={<OffRocket />} />
        {/* <Route path="/tripsichore-immersion" element={<Tripsichore />} /> */}
        <Route path="/50-yin-yoga" element={<YinYoga />} />
        <Route path="/20-hours-mandala-mastery" element={<Mandala />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/discovery-call" element={<DiscoveryCall />} />
        <Route path="/terms-conditions" element={<TermnsConditions />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App