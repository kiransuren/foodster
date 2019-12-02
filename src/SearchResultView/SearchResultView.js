import React from 'react';
import './SearchResultView.css';
import ResultCard from '../ResultCard/ResultCard';

const SearchResultView = ({results}) => {
  return(
    <div id="searchResult-View">
    {
      results.map((value, index) => {
       return <ResultCard key={index} title = {value.title} imageURL={value.image_url} referal={value.source_url}/>
     })

    }
    </div>
  );
}

export default SearchResultView;
