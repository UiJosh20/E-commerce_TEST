var productArray = [];


function submitAll(){
  var product = productName.value;
  var description = descriptionName.value;
  var price = priceAmt.value;
  var commerceObj = {product,description, price}
  console.log(commerceObj);
  if (product == "" || description == "" || price == ""){
    showErr.innerHTML = `<p class="alert alert-danger text-center fw-bold">all inputs must be filled</p>`
  }else{
    showErr.innerHTML = ""
    productArray.push(commerceObj);
    productName.value = ""
    descriptionName.value = ""
    priceAmt.value = ""
    displayAll()
  }
}

function deleteAny(i){
  var check = confirm("Do you want to edit")

  if(check == true){

    showErr.innerHTML = ""
    productArray.splice(i, 1)
    displayAll()
    showErr.innerHTML = `<p class="alert alert-success text-center fw-bold">Deleted successfully</p>`
  }else{
    
  }
}

function editAny(i){
  var check = confirm("Do you want to edit?")
  
    if(check == true){
      if (productName.value !== "" && descriptionName.value !== "" && priceAmt.value !== ""){
        showErr.innerHTML = `<p class="alert alert-success text-center fw-bold">Edit successfully</p>`
        productArray[i]["product"] = productName.value;
        productArray[i]["description"] = descriptionName.value;
        productArray[i]["price"] = priceAmt.value;
        productName.value = ""
        descriptionName.value = ""
        priceAmt.value = ""
        displayAll()
      }else{
        showErr.innerHTML = `<p class="alert alert-danger text-center fw-bold">all inputs must be filled</p>`
        
      }
    }else{
      showErr.innerHTML = `<p class="alert alert-warning text-center fw-bold">Edit cancelled</p>`

    }
  }



function displayAll(){
  display.innerHTML = ""
  productArray.map((element, i)=>{
    display.innerHTML += `<tr>
    <td>${i+1}</td>
    <td>${element.product}</td>
    <td>${element.description}</td>
    <td>${element.price}</td>
    <td><button onclick="deleteAny(${i})" class="btn btn-success">Delete</button></td>
    <td><button onclick="editAny(${i})" class="btn btn-warning">Edit</button></td>

    </tr>`
  })
}