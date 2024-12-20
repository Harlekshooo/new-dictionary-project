import React from 'react'
import './homescreen.css'
import Header from "../Header/header"
import SearchSection from '../searchSection/searchSection'

const homescreen = () => {
  return (
    <div className='homescreenContainer'>
        <Header />
        <SearchSection />
    </div>
  )
}

export default homescreen