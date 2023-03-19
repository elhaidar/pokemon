const contents = document.getElementById("contents");
const btn = document.getElementById("btn");
const alertElement = document.getElementById("alert");

btn.addEventListener("click", () => {
  alertElement.style.display = "block";
  fetchDatas();
  alertElement.style.display = "none";
});

const fetchDatas = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36");
  const json = await response.json();
  let res,
    jsonItem,
    content = "";
  for (let i = 1; i <= json.results.length; i++) {
    res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    jsonItem = await res.json();
    content += `<div class="content ${jsonItem.types[0].type.name}">
    <p>${jsonItem.id}: ${jsonItem.name}</p>
    <img src="${jsonItem.sprites.front_default}" width="100%">
    <p>type: ${jsonItem.types[0].type.name}</p></div>`;
  }
  contents.innerHTML = content;
  contents.style.display = "flex";
};
