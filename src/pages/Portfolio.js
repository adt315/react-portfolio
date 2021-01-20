import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../emojipedia";


function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      img={emojiTerm.img}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
      description2={emojiTerm.meaning2}
    />
  );
}

function Portfolio() {
  return (
    <div>
      <h1 class="text-center">
        My Projects
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default Portfolio;
