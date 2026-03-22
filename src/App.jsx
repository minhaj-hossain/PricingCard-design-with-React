import './App.css'
import Nav from './components/Nav'
import Pricing from './components/pricingCards/Pricing'
import { Suspense } from 'react'


const pricingData = fetch('./card.json').then(res => res.json()).catch(e => console.log(e, 'the fuck is going on'))


function App() {

  return (
    <>
      <Nav />

      <Suspense fallback={
        <div className='w-11/12 mx-auto flex justify-center'>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      }>

        <Pricing pricingData={pricingData} />

      </Suspense>
    </>
  )
}

export default App
