const character = document.querySelector("#character-bar");

fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    const animalNames = document.querySelector("div#character-bar");
    data.forEach((animal) => {
      const cuteAnimal = animal.name;
      const spanTag = document.createElement("span");
      const animalList = document.createElement("ul");
      spanTag.innerHTML = cuteAnimal;
      animalNames.appendChild(spanTag);
      spanTag.appendChild(animalList);
      spanTag.addEventListener("click", () => {
        characterDetails(animal.id);
      });
    });
  });

const characterDetails = (id) => {
  const detailedInfo = document.querySelector("div#detailed-info");
  detailedInfo.innerHTML = "";
  fetch(`http://localhost:3000/characters/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const animalName = document.createElement("h2");
      animalName.innerHTML = data.name;
      detailedInfo.appendChild(animalName);

      const animalImage = document.createElement("img");
      animalImage.src = data.image;
      animalImage.alt = data.name;
      detailedInfo.appendChild(animalImage);

      const animalVotes = document.createElement("p");
      animalVotes.innerHTML = data.votes;
      detailedInfo.appendChild(animalVotes);

      const inputVotes = document.createElement("input");
      const button = document.createElement("button");
      inputVotes.innerHTML = data.votes;
      button.innerHTML = `Add votes`;
      detailedInfo.appendChild(inputVotes);
      detailedInfo.appendChild(button);

      button.addEventListener("click", () => {
        animalVotes.innerHTML = inputVotes.value;
      });
    });
};
