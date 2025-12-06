

const properties = [
    {
        propertyName: "Sunshine Residency",
        location: "Mumbai, Maharashtra",
        type: "Apartment",
        area: "1200 sq ft",
        price: "₹1.2 Cr",
        image: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
    },
    {
        propertyName: "Green Valley Villa",
        location: "Pune, Maharashtra",
        type: "Villa",
        area: "2200 sq ft",
        price: "₹2.1 Cr",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    },
    {
        propertyName: "Skyline Heights",
        location: "Bengaluru, Karnataka",
        type: "Penthouse",
        area: "1800 sq ft",
        price: "₹1.8 Cr",
        image: "https://images.unsplash.com/photo-1486304873000-235643847519"
    },
    {
        propertyName: "Royal Heritage Homes",
        location: "Delhi",
        type: "Independent House",
        area: "1500 sq ft",
        price: "₹95 Lakh",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
    },
    {
        propertyName: "Ocean Breeze Residency",
        location: "Chennai, Tamil Nadu",
        type: "Apartment",
        area: "1350 sq ft",
        price: "₹88 Lakh",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    {
        propertyName: "Crystal Park Towers",
        location: "Hyderabad, Telangana",
        type: "Apartment",
        area: "1600 sq ft",
        price: "₹1.1 Cr",
        image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
    },
    {
        propertyName: "Eco Smart Homes",
        location: "Ahmedabad, Gujarat",
        type: "Row House",
        area: "1900 sq ft",
        price: "₹1.4 Cr",
        image: "https://images.unsplash.com/photo-1599423300746-b62533397364"
    },
    {
        propertyName: "Palm View Apartments",
        location: "Kochi, Kerala",
        type: "Apartment",
        area: "1100 sq ft",
        price: "₹78 Lakh",
        image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
    },
    {
        propertyName: "Hillside Retreat",
        location: "Dehradun, Uttarakhand",
        type: "Villa",
        area: "2500 sq ft",
        price: "₹1.9 Cr",
        image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
    },
    {
        propertyName: "Urban Edge Living",
        location: "Jaipur, Rajasthan",
        type: "Apartment",
        area: "1250 sq ft",
        price: "₹82 Lakh",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
        propertyName: "City Crown Residency",
        location: "Nagpur, Maharashtra",
        type: "Apartment",
        area: "1400 sq ft",
        price: "₹90 Lakh",
        image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
    },
    {
        propertyName: "Maple Leaf Homes",
        location: "Lucknow, Uttar Pradesh",
        type: "Independent House",
        area: "2000 sq ft",
        price: "₹1.3 Cr",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
    },
    {
        propertyName: "Riverfront Villas",
        location: "Surat, Gujarat",
        type: "Villa",
        area: "2600 sq ft",
        price: "₹2.4 Cr",
        image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
    },
    {
        propertyName: "Silverline Residency",
        location: "Chandigarh",
        type: "Penthouse",
        area: "2000 sq ft",
        price: "₹1.75 Cr",
        image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
    }
];
let search = document.getElementById("search")



search.addEventListener("click", function () {







    let land = document.getElementById("land").value
    console.log(land)
    let s = document.getElementById("s")

    let c = document.getElementById("c")

    if (land != "") {

        document.getElementById("or").innerText = ""

        let result = document.getElementById("result")
        document.getElementById("close").style.display = "block"


        for (i = 0; i < properties.length; i++) {



            if (properties[i].type == land) {

                // let result = document.getElementById("result")



                result.innerHTML += `<div class="product"</div>
    <img src="${properties[i].image}">
    <p><b>Name of the property:</b> ${properties[i].propertyName}</p>
     <p><b>Location:</b> ${properties[i].location}</p>
      <p><b>Type of the property: </b>${properties[i].type}</p>
      <p><b>Area:</b> ${properties[i].area}</p>
       <p><b>Price:</b> ${properties[i].price}</p>`






            }

        }


    } else {

        // console.log("Asdasd")
        document.getElementById("or").style.display = "block"

    }




}






)




let close = document.getElementById("close")
close.addEventListener("click", function () {

    close.style.display = "none"


    document.getElementById("result").innerHTML = ""

    document.getElementById("land").value = ""
    document.getElementById("s").value = "--NA--"
    document.getElementById("c").value = "--NA--"
})



let reset = document.getElementById("reset")
reset.addEventListener("click", function () {
    document.getElementById("land").value = ""
    document.getElementById("s").value = "--NA--"
    document.getElementById("c").value = "--NA--"
    document.getElementById("or").innerText = ""

})

