const urlParameters = new URLSearchParams(location.search)
const productId = urlParameters.get("productId")


const productURL = "https://striveschool-api.herokuapp.com/api/product/"

fetch(productURL + productId, {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWFjYmYyNjBjYzAwMTVjYzBkZGIiLCJpYXQiOjE3MjE5ODE2NDMsImV4cCI6MTcyMzE5MTI0M30.NB77mKPUYENKSvg3TEHSp0e4536g_p7lHxz0F_YHWKg"
    }
})
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("errore")
        }
    })
    .then((singleComponent) => {
        console.log("COMPONENTE SINGOLO", singleComponent)

        const infoRow = document.getElementById("info-row")
        infoRow.innerHTML = `
            <div class="col-12 col-md-10">
                <div class="card">
                    <img src=${singleComponent.imageUrl} class="card-img-top p-3" alt="immagine componente">
                    <div class="card-body text-center">
                        <h2 class="card-title fs-1">${singleComponent.name}</h2>
                        <p class="card-text fs-3">${singleComponent.description}</p>
                        <p class="card-text fs-3">${singleComponent.brand}</p>
                        <p class="card-text fs-2">${singleComponent.price}€</p>
                        <a href="#" class="btn btn-danger w-100">COMPRA ORA!</a>
                    </div>
                </div>
            </div>
        `
    })
    .catch((error) => {
        console.log("ERRORE", error)
    })