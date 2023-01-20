const indexCharacterContainer = document.querySelector('#index-character-container')
const messageContainer = document.querySelector('#message-container')
const showCharacterContainer = document.querySelector('#show-character-container')

const indexCampaignContainer = document.querySelector("#index-campaign-container")
const showCampaignContainer = document.querySelector("#show-campaign-container")

export const onIndexCharacterSuccess = (characters) => {
    characters.forEach(character => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${character.firstName}  ${character.lastName}</h3>
            <button data-id="${character._id}" >Show Character</button>
        `

        indexCharacterContainer.appendChild(div)
    })
}



export const onIndexCampaignSuccess = (campaigns) => {
    campaigns.forEach(campaign => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${campaign.name}</h3>
            <button data-id="${campaign._id}" >Show Campaign</button>
        `

        indexCampaignContainer.appendChild(div)
    })
}




export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}



export const onCreateCharacterSuccess = () => {
    messageContainer.innerText = 'You have created a character!! :)'
}


export const onCreateCampaignSuccess = () => {
    messageContainer.innerText = 'You have created a campaign!! :)'
}



export const onShowCharacterSuccess = (character) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${character.firstName}  ${character.lastName}</h3>
        <p>${character.class}</p>
        <p>${character.strength}</p>
        <p>${character._id}</p>

        <form data-id="${character._id}">
            <input type="text" name="firstName" value="${character.firstName}" />
            <input type="text" name="lastName" value="${character.lastName}" />
            <input type="text" name="class" value="${character.class}" />
            <input type="number" name="strength" value="${character.strength}" />
            <input type="submit" value="Update Character" />
            
        </form>

        <button data-id="${character._id}">Delete Character</button>
    `
    showCharacterContainer.appendChild(div)
}



export const onShowCampaignSuccess = (campaign) => {
    const div = document.createElement("div")
    div.innerHTML = `
    <h3>${campaign.name}</h3>
        <p>${campaign._id}</p>

        <form data-id="${campaign._id}">
            <input type="text" name="firstName" value="${campaign.name}" />
            <input type="submit" value="Update Campaign" />
            
        </form>

        <button data-id="${campaign._id}">Delete Campaign</button>

    `
   
}




export const onUpdateCharacterSuccess = () => {
    messageContainer.innerText = 'Character Update was Successful :)'
}

export const onDeleteCharacterSuccess = () => {
    messageContainer.innerText = 'Delete was successful :)'
}




export const onUpdateCampaignSuccess = () => {
    messageContainer.container.innerText = "Campaign Update Successful"
}