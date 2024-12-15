var productNameInput = document.getElementById("productname");
var productPriceInput = document.getElementById("productprice");
var productCategoryInput = document.getElementById("productcategory");
var productDescriptionInput = document.getElementById("productdescription");

var productlist = [];

function addproduct() {
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    description: productDescriptionInput.value,
  };

  productlist.push(product);
  displaydata();
  localStorage.setItem("product-container", JSON.stringify(productlist));
  console.log(productlist);
  clearform();
}

function clearform() {
  productNameInput.value = null;
  (productPriceInput.value = null),
    (productCategoryInput.value = null),
    (productDescriptionInput.value = null);
}

if (localStorage.getItem("product-container") !== null) {
  productlist = JSON.parse(localStorage.getItem("product-container"));
  displaydata();
}

function deleteitem(index) {
  productlist.splice(index, 1);
  localStorage.setItem("product-container", JSON.stringify(productlist));
  displaydata();
}

function displaydata() {
  var cartona = "";
  for (i = 0; i < productlist.length; i++) {
    cartona += `
    <div class="col-md-3">
              <div>
                <div class="card" style="width: 18rem">
                  <img
                    src="./img/FB_IMG_1730935867711.jpg"
                    class="card-img-top"
                    alt="${productlist[i].name}"
                  />
                  <div class="card-body bg-danger bg-opacity-50">
                    <h5 class="card-title text-center pb-4">Product</h5>
                    <p class="card-text">Product Name  :${productlist[i].name}</p>
                    <p class="card-text">Product Price :${productlist[i].price}</p>
                    <p class="card-text">Product Category:${productlist[i].category}</p>
                    <p class="card-text">Product Description :${productlist[i].description}</p>

                  </div>
                  <footer class="bg-danger bg-opacity-50 border">
                    <div
                      class="d-flex align-items-center justify-content-center p-3"
                    >
                      <button
                        class="btn btn-primary change-btn"
                        onclick=" deleteitem(${i})"
                      >Delete</button>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
    `;
  }

  document.getElementById("rowdata").innerHTML = cartona;
}





console.log(0);
