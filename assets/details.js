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
            <div class="col-12 col-md-8 text-center">
                <div class="card text-bg-dark">
                    <img src=${singleComponent.imageUrl} class="card-img-top p-3" alt="immagine componente">
                    <div class="card-body text-center">
                        <h2 class="card-title fs-1">${singleComponent.name}</h2>
                        <p class="card-text fs-3">${singleComponent.description}</p>
                        <p class="card-text fs-3">${singleComponent.brand}</p>
                        <p class="card-text fs-2">${singleComponent.price}€</p>
                        <a href="#" class="btn btn-danger my-3 w-100 btn-lg">COMPRA ORA!</a>
                    </div>
                    <div>
                        <h2>ADMIN CONTROL PANNEL</h2>
                        <p>tu utente non mi vedi ;)</p>
                        <div>
                            <a href="backoffice.html?productId=${singleComponent._id}" class="btn btn-light text-warning btn-lg">MODIFICA</a>                        
                            <button class="btn btn-light text-danger btn-lg" onclick="deleteComponent()" >ELIMINA</button>                        
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    .catch((error) => {
        console.log("ERRORE", error)
    })


    const deleteComponent = function (){
        fetch(productURL + productId, {
            method:"DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWFjYmYyNjBjYzAwMTVjYzBkZGIiLCJpYXQiOjE3MjE5ODE2NDMsImV4cCI6MTcyMzE5MTI0M30.NB77mKPUYENKSvg3TEHSp0e4536g_p7lHxz0F_YHWKg"
            }
        })
        .then(response => {
            if(response.ok){
                alert("HAI CANCELLATO IL PRODOTTO!")
                location.assign("index.html")
            } else {
                throw new Error("errore nella cancellazione prodotto")
            }
        })
        .catch((error) => {
            console.log("errore nella cancellazione", error)
        })
    }