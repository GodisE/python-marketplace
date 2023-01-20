import { indexCharacter, createCharacter, showCharacter, updateCharacter, deleteCharacter,
	indexCampaign, createCampaign

} from './api.js'
import {
	onIndexCharacterSuccess,
	onFailure,
	onCreateCharacterSuccess,
	onShowCharacterSuccess,
	onUpdateCharacterSuccess,
	onDeleteCharacterSuccess,
	onIndexCampaignSuccess,
	onCreateCampaignSuccess,
	onShowCampaignSuccess
} from './ui.js'

const createCharacterForm = document.querySelector('#create-character-form')
const indexCharacterContainer = document.querySelector('#index-character-container')
const showCharacterContainer = document.querySelector('#show-character-container')

const createCampaignForm = document.querySelector("#create-campaign-form")
const showCampaignContainer = document.querySelector("#show-campaign-container")
const indexCampaignContainer = document.querySelector("#index-campaign-container")




indexCharacter()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexCharacterSuccess(res.characters)
    })
    .catch(onFailure)

indexCampaign()
	.then(res => res.json())
	.then(res => {
		console.log(res)
		onIndexCampaignSuccess(res.campaigns)
	})
	.catch(onFailure)



createCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const characterData = {
			character: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				class: event.target['class'].value,
				strength: event.target['strength'].value,
			},
		}

    // console.log(characterData)
    createCharacter(characterData)
			.then(onCreateCharacterSuccess)
			.catch(onFailure)
})


createCampaignForm.addEventListener("submit", (event) => {
	event.preventDefault()
	
	const camapignData = {
		campaign: {
			name: event.target['name'].value
		} 
		
	}
	createCampaign(camapignData)
			.then(onCreateCampaignSuccess)
			.catch(onFailure)
})




indexCharacterContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

	if(!id) return

    showCharacter(id)
			.then((res) => res.json())
			.then((res) => onShowCharacterSuccess(res.character))
			.catch(onFailure)
})




indexCampaignContainer.addEventListener("click", (event) => {
	const id = event.target.getAttribute("data-id")
	if(!id) return


	indexCampaign(id)
	.then((res) => res.json())
	.then((res) => onShowCampaignSuccess(res.campaign))
	.catch(onFailure)
})





showCharacterContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')	
	if(!id) return

	const characterData = {
		character: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			class: event.target['class'].value,
			strength: event.target['strength'].value,
		},
	}

	updateCharacter(characterData, id)
		// this function (onUpdateCharacterSuccess) does not need anything to run. NO params
		.then(onUpdateCharacterSuccess)
		.catch(onFailure)
})

showCharacterContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')
	if(!id) return

	deleteCharacter(id)
		.then(onDeleteCharacterSuccess)
		.catch(onFailure)
})

showCampaignContainer.addEventListener("submit", (event) => {
	event.preventDefault()
	
	const id = event.target.getAttribute("data-id")
	if(!id) return
	
	const campaignData = {
		campaign: {
			name: event.target['name'].value
		} 
		
	}
	updateCampaign(campaignData, id)
	
	.then(onUpdateCampaignSuccess)
	.catch(onFailure)
})
