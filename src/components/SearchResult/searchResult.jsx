import React, { useState } from 'react'
import './searchResult.css'

const searchResult = ({storedTerm, storedArray}) => {

    // const [storedResultArr, setStoredResultArr] = useState(storedArray == null ? [] : storedArray)

    let emptyAntonym = false
    let emptySynonym = false
    // console.log(storedResultArr);
  return (
    <div className='searchResultContainer'>
        <div className="searchResultInnerContainer">
        <h2 className="searchResultHeader">{storedTerm}</h2>

{storedArray.map((resultItem, i) => {
  if(resultItem.antonyms.length >= 1){
      emptyAntonym = false
  }else{
      emptyAntonym = true
  }
  
  if(resultItem.synonyms.length >= 1){
      emptySynonym = false
  }else{
      emptySynonym = true
  }

  return(
    <section key={i} className="searchResultDetailsContainer">
  <div className="searchResultDeatils">
    <h5 className="searchResultDetailsSpeech">Part of speech:</h5>
    <p className="searchResultDetailsParagraph">{resultItem.partOfSpeech}</p>
  </div>

  <div className="searchResultDeatils">
    <h5 className="searchResultDetailsHeader">Definition:</h5>
    <div>
      {resultItem.definitions.map((resultDefinition, i) => {
        return(
          <ul className="searchResultDetailsListContainer" key={i}>
            <li>
              {resultDefinition.definition}
              <p className={resultDefinition.example == undefined ? "searchResultDetailsListAbsent" : "searchResultDetailsListPresent"}>e.g {resultDefinition.example}</p>
            </li>

          </ul>
        )
      })}
    </div>
  </div>
  
  {!emptyAntonym && (<div className="searchResultDeatils">
    <h5 className="searchResultDetailsHeader">Antonyms:</h5>
    <div>
      {resultItem.antonyms.map((resultAntonym, i) => {
        return(
          <ul className="searchResultDetailsAntonymListContainer" key={i}>
            <li className="searchResultDetailsAntonymList">{resultAntonym}</li>
          </ul>
        )
      })}
    </div>
  </div>)}
  
  {!emptySynonym && (<div className="searchResultDeatils">
    <h5 className="searchResultDetailsHeader">Synonyms:</h5>
    <div>
      {resultItem.synonyms.map((resultSynonym, i) => {
        return(
          <ul className="searchResultDetailsSynonymListContainer" key={i}>
            <li className="searchResultDetailsSynonymList">{resultSynonym}</li>
          </ul>
        )
      })}
    </div>
  </div>)}
</section>
  )
})}

        </div>
    </div>
  )
}

export default searchResult