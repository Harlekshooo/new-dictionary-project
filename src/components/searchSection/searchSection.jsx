import React, { useState } from 'react'
import './searchSection.css'
import { IoMdSearch } from "react-icons/io";
import SearchResult from '../SearchResult/searchResult';
import NotFound from "../Notfound/notFound"

const searchSection = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [present, setPresent] = useState(true)
    const [unstoredArray, setUnstoredArray] = useState([])

    const handleSearchSubmit = async (e) => {

        e.preventDefault()
        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            const data = await res.json()

            if(res.ok) {
                setPresent(true)
              }else{
                setPresent(false);
              }

            if(searchTerm == data[0].word){
                setSearchTerm(data[0].word)
              }

            setUnstoredArray(data[0].meanings)
            localStorage.setItem("storedSearchArray", JSON.stringify(data[0].meanings))
            localStorage.setItem("storedTerm", JSON.stringify(searchTerm))
        } catch (error) {
            console.log("Sorry there has been an error");
        }
    }

    const storedArray = JSON.parse(localStorage.getItem("storedSearchArray"))
    const storedTerm = JSON.parse(localStorage.getItem("storedTerm"))
    // localStorage.clear()

    const handleSearchChange = (e) => {
        let searchResult = e.target.value
        setSearchTerm(searchResult)
    }

  return (
    <div className='searchSectionContainer'>
        <main className="searchSectionInnerContainer">
            <form onSubmit={handleSearchSubmit} className='searchInputContainer'>
                <input className='searchInput' onChange={handleSearchChange} type="text" placeholder='Enter the text to search for' />
                <button className='mobileSearchBtn'>search</button>
                <button className='desktopSearchBtn'><IoMdSearch className='searchIcon' /></button>
            </form>

            {present ? (<SearchResult storedArray={storedArray == null ? unstoredArray : storedArray} storedTerm={storedTerm} />) : (<NotFound />)}
        </main>
    </div>
  )
}

export default searchSection