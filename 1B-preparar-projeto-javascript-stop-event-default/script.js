const configs = {
    method: 'GET'
}

const results = document.getElementById('results')
results.style.display = 'none'

const searchCep = (event) => {

    const cep = document.getElementById('cep').value || '000000000'

    fetch(`https://cdn.apicep.com/file/apicep/${cep}.json`, configs)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);

        if(data.status === 0) throw data.message

        showResults(data)
    })
    .catch(error => {
        console.log(error)
    })

    /* STOP  EVENT DEFAULT*/
    event = event || window.event
    if(event.preventDefault) event.preventDefault()
    if(event.preventValue) event.preventValue()
    return false
}


const showResults = (adress) => {
    results.style.display = 'block'

    const html = `
    <ul class="list-group">
                <li class="list-group-item"><strong>CEP:</strong> ${adress.code} </li>
                <li class="list-group-item"><strong>Cidade:</strong> ${adress.city} </li>
                <li class="list-group-item"><strong>Estado:</strong> ${adress.state} </li>
                <li class="list-group-item"><strong>Rua:</strong> ${adress.district} </li>
            </ul>
    `

    results.innerHTML = html
}