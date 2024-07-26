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
                            <img src=${product.imageUrl} class="card-img-top p-3" alt="immagine componente">
                            <div class="card-body text-center">
                                <h2 class="card-title">${product.name}</h3>
                                <p class="card-text">${product.brand}</p>
                                <p class="card-text fs-3">${product.price}€</p>
                                <a href="details.html?productId=${product._id}" class="btn btn-warning my-3 w-100">SPECIFICHE</a>
                                <a href="#" class="btn btn-danger w-100">COMPRA ORA!</a>
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