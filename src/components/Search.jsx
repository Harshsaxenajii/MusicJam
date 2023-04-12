import React from "react";

function Search() {
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}> {name} </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
