import React from "react";

// Note that the array is sorted in place
function sortByScores(a, b) {
  return b.s - a.s;
}

const ProduceScores = (props) => {
  const listCountries = props.theScores.map((eachCountry, index) => {
    const copiedScores = [...eachCountry.scores]; // make a copy of the scores for each country
    copiedScores.sort(sortByScores); // sort in descending order
    // render the result
    return (
      <div key={index} className="country">
        {countryName(eachCountry)}
        {renderTheScores(copiedScores)}
      </div>
    );
  });
  return listCountries;
};

// The Country Heading
function countryName(eachCountry) {
  return <h2>{`HIGH SCORES: ${eachCountry.name}`}</h2>;
}

function renderTheScores(scorers) {
  return (
    <div>
      <div>
        {renderEachName(scorers)}
        {renderEachScore(scorers)}
      </div>
    </div>
  );
}

function renderEachName(scorers) {
  // Produce a list of Names
  const listNames = scorers.map((element, index) => (
    <p key={index}>{element.n}</p>
  ));

  // render the result
  return <div>{listNames}</div>;
}

function renderEachScore(scorers) {
  // Produce a list of Scores
  const listScores = scorers.map((element, index) => (
    <p key={index}>{element.s}</p>
  ));

  // render the result
  return <div>{listScores}</div>;
}

export default ProduceScores;
