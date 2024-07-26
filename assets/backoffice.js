// campi che mi servono:
// "name"
// "description"
// "brand"
// "imageUrl"
// "price"

const urlParameters = new URLSearchParams(location.search)
const productId = urlParameters.get("productId")

if(productId) {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWFjYmYyNjBjYzAwMTVjYzBkZGIiLCJpYXQiOjE3MjE5ODE2NDMsImV4cCI6MTcyMzE5MTI0M30.NB77mKPUYENKSvg3TEHSp0e4536g_p7lHxz0F_YHWKg"
        }
    })
    .then(response => {
        if(response.ok){
            return response.json()
        } else {
            throw new Error("impossibile recuperare il prodotto")
        }
    })
    .then((singleComponent) => {
        console.log("componente richiamato", singleComponent)
        document.getElementById("name").value = singleComponent.name
        document.getElementById("description").value = singleComponent.description
        document.getElementById("brand").value = singleComponent.brand
        document.getElementById("imageUrl").value = singleComponent.imageUrl
        document.getElementById("price").value = singleComponent.price
    })
    .catch((error) => {
        console.log(error)
    })
}



const productForm = document.getElementById("product-form")
productForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const nameInput = document.getElementById("name")
    const descriptionInput = document.getElementById("description")
    const brandInput = document.getElementById("brand")
    const imageUrlInput = document.getElementById("imageUrl")
    const priceInput = document.getElementById("price")

    const nameValue = nameInput.value
    const descriptionValue = descriptionInput.value
    const brandValue = brandInput.value
    const imageValue = imageUrlInput.value
    const priceValue = priceInput.value

    const newProduct = {
        name: nameValue,
        description: descriptionValue,
        brand: brandValue,
        imageUrl: imageValue,
        price: priceValue,
    }


    let methodToUse
    if(productId){
        methodToUse= "PUT"
    } else {
        methodToUse = "POST"
    }

    let urlToUse
    if(productId) {
        urlToUse = URL + productId
    } else {
        urlToUse = URL
    }

    const URL = "https://striveschool-api.herokuapp.com/api/product/"

    fetch(urlToUse, {
        method: methodToUse,
        body: JSON.stringify(newProduct),
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNWFjYmYyNjBjYzAwMTVjYzBkZGIiLCJpYXQiOjE3MjE5ODE2NDMsImV4cCI6MTcyMzE5MTI0M30.NB77mKPUYENKSvg3TEHSp0e4536g_p7lHxz0F_YHWKg"
        },
    })
    .then(response => {
        if (response.ok) {
            alert("SALVATAGGIO RIUSCITO")
        } else {
            alert("ERRORE NEL SALVATAGIO")
            throw new Error ("errore nel salvataggio")
        }
    })
    .catch((error) => {
        console.log("errore", error)
    })
})