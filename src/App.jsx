import './App.css'
import Nav from './components/Nav'
import Pricing from './components/pricingCards/Pricing'
import { Suspense } from 'react'

const pricingData = fetch('../json/card.json').then(res => res.json())


function App() {



  return (
    <>
      <Nav />

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Pricing pricingData={pricingData} />

      </Suspense>
    </>
  )
}

export default App
