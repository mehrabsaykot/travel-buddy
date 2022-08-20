var carObject={
    vecicle: "Car",
    imageUrl:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    farePerKilo: 5,
    capacity: 4,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};
var bikeObject={
    vecicle: "Bike",
    imageUrl:"https://images.unsplash.com/photo-1558979159-2b18a4070a87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    farePerKilo: 4,
    capacity: 2,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};
var busObject={
    vecicle: "Bus",
    imageUrl:"https://images.unsplash.com/photo-1525962898597-a4ae6402826e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    farePerKilo: 3,
    capacity: 40,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};


function displayServices(service){
    const mainSection= document.getElementById('main-section');
    const stringified= JSON.stringify({service});
    console.log(service);
    console.log(stringified);
    const div= document.createElement('div');

    div.innerHTML=`
        <div class="card mb-3 mx-auto my-4" style="max-width: 800px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Transport Type: ${service.vecicle}</h5>
                    <p class="card-text">${service.description}</p>
                    <p class="card-text"><small class="text-muted">Fare per kilo: ${service.farePerKilo}</small> <small class="text-muted mx-3">Capacity: ${service.capacity}</small></p>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='bookingHandeling(${stringified})' data-bs-target="#exampleModal">
                    Book Now
                    </button>
                </div>
                </div>
            </div>  
        </div>  
    `
    mainSection.appendChild(div);

}

displayServices(carObject);
// displayServices(busObject);
// displayServices(bikeObject);

// booking Handeling

function bookingHandeling(obj){
    // const modalBody= document.getElementById("modal-body")
    // const object= JSON.parse(obj);
    console.log(obj);

    // modalBody.innerHTML=`
    //         <div class="card" style="width: 18rem;">
    //     <img src=${object.imageUrl} class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">Vehicle Type: ${object.vecicle}</h5>
    //         <p class="card-text">${object.description}</p>
    //         <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //     </div>
    // ` 
    
}


