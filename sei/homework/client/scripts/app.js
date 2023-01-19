import { indexPerson, createPerson, showPerson } from "./api.js";
import { onIndexPersonSuccess, 
         onFailure, 
         onCreatePersonSuccess, 
         onShowPersonSuccess 
        } from 
"./ui.js";
const createPersonForm = document.querySelector("#create-character-form")
const indexPersonContainer = document.querySelector("#index-person-container")

createPersonForm.addEventListener("submit", (event) => {
    //stops page from reloading once submit is clicked
    event.preventDefault()
    const personData = {
        person: {
            //grabbing by input name from html
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            age: event.target['age'].value

        }
    }
    createPerson(personData)
    .then(onCreatePersonSuccess)
    .catch(onFailure)
})

indexPersonContainer.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id")

    if (!id) return

    showPerson(id)
    .then((res) => res.json())
    .then(res => {
        onShowPersonSuccess(res.person)
    })
    .catch(onFailure)
})

indexPerson()
  .then((res) => res.json())
  .then((res) => onIndexPersonSuccess(res.person))
  .catch(onFailure);


