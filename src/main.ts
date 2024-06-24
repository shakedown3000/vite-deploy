import "./style.css";
import * as lodash from "lodash";

console.log("Deployment Test");

const names = ["Anna", "Ben", "Jessica"];
const otherNames = ["Lilly", "Emmy"];
// aus der Bib Lodash die Funktion unionwith nutzen und:
// vereinigt zwei Arrays und nimmt nur die eindeutigen Werte
const uniqueNames = lodash.unionWith(names, otherNames);

const appDiv = document.getElementById("app");

if (appDiv) {
  appDiv.innerHTML = uniqueNames.join(", ");
}
