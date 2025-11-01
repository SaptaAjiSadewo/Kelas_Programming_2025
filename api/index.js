fetch("https://dummyjson.com/products/?limit=9")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const produk = data.products;
    //const products = data.title;

    console.log(produk);

    /* 
    produk.forEach(function (data, index) {
    //   document.getElementById("card").innerHTML += `
    //   <img src="${data.images}" class="card-img-top" alt="..." />
    //   <div class="card-body">
    //     <h5 class="card-title" id="card-title">${data.title}</h5>
    //     <p class="card-text">
    //         ${data.description}
    //     </p>
    //     <a href="#" class="btn btn-primary">${data.price}</a>
    //   </div>`;
     });
    */

    produk.forEach(function (data, index) {
      document.getElementById("product-row").innerHTML += `
      
      <div class="col-md-4 justify-content-center">
        <div class="card mb-5 mt-5" style="width: 18rem; height: 36rem;">
          <img src="${data.images[0]}" class="card-img-top bg-info" alt="${data.title}" />
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">
                ${data.description}
            </p>
            <a href="#" class="btn btn-primary">$${data.price}</a>
          </div>
        </div>
      </div>`;
    });

  });
