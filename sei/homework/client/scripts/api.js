export const indexPerson = () => {
    return fetch(`http://localhost:8000/person`)
  }



export const createPerson = (data) => {
    return fetch(`http://localhost:8000/person`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const showPerson = (id) => {
    return fetch(`http://localhost:8000/person/${id}`)
  }