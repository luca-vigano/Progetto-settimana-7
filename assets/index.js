const getProduct = function () {

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWFjYmYyNjBjYzAwMTVjYzBkZGIiLCJpYXQiOjE3MjE5ODE2NDMsImV4cCI6MTcyMzE5MTI0M30.NB77mKPUYENKSvg3TEHSp0e4536g_p7lHxz0F_YHWKg"
        }
    })
        .then((response) => {
            if (response.ok) {
                console.log(response)

                return response.json()
            } else {
                throw new Error("errore nella response")
            }
        })
        .then((arrayOfProduct) => {
            console.log("componenti a db", arrayOfProduct)

            arrayOfProduct.forEach(product => {
                const newProductCol = `
                    <div class="col">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOv8VzVPsbqmuNazJajM7nrYVxnOIfP5BZw&s" class="card-img-top" alt="immagine componente">
                            <div class="card-body text-center">
                                <h5 class="card-title">Nome Prodotto</h5>
                                <p class="card-text">Descrizione prodotto</p>
                                <p class="card-text">Prezzo</p>
                                <a href="#" class="btn btn-danger w-100">COMPRA</a>
                            </div>
                        </div>
                    </div>
                `

                const partsRow = document.getElementById("components-row")
                partsRow.innerHTML += newProductCol
            });


        })
        .catch((error) => {
            console.log("errore", error)
        })
}

getProduct()