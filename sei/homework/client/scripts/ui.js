//for success of our index action

const indexPersonContainer = document.querySelector("#index-person-container");

const messageContainer = document.querySelector("#message-container");

const showPersonContainer = document.querySelector("#show-person-container");

export const onIndexPersonSuccess = (person) => {
  person.forEach((person) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>${person.firstName} ${person.lastName}</h3>
    <button data-id="${person._id}">Show Character</button>
        `;
    indexPersonContainer.appendChild(div);
  });
};

export const onFailure = (error) => {
  messageContainer.innerHTML = `
        <h3>You've encountered an error. Try again later</h3>
        <p>${error}</p>
    `;
};

//handle for success on create
export const onCreatePersonSuccess = () => {
  messageContainer.innerText = "You have created a person!";
};

//handlind for success on show
export const onShowPersonSuccess = (person) => {
  const div = document.createElement("div");
  div.innerHTML = `
            <h3>${person.firstName} ${person.lastName}</h3>
            <p>${person.age}</p>
            <p>${person._id}</p>
            
    `
    showPersonContainer.appendChild(div)
}