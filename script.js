// alert("loading");
function addNewWEField() {
    //   console.log("Adding new field");
  
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
  
    weOb.insertBefore(newNode, weAddButtonOb);
  }
  
  function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
  
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
  
    aqOb.insertBefore(newNode, aqAddButtonOb);
  }
  
  //generating cv
  function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("gitT").innerHTML = '<a href="' + document.getElementById("GitHubField").value + '" target="_blank">' + document.getElementById("GitHubField").value + '</a>';
document.getElementById("linkedT").innerHTML = '<a href="' + document.getElementById("linkedField").value + '" target="_blank">' + document.getElementById("linkedField").value + '</a>';

    
    function populateList(listId, inputId) {
      let input = document.getElementById(inputId).value;
      let list = document.getElementById(listId);
      list.innerHTML = "";
    
      input.split(",").forEach(item => {
        let listItem = document.createElement("li");
        listItem.textContent = item.trim();
        list.appendChild(listItem);
      });
    }
    
    populateList("plT", "pgField");
    populateList("ssT", "slField");
    populateList("hobbiesT", "hobbiesField");
  
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    
    let wes = document.getElementsByClassName("weField");
    let weT = document.getElementById("weT");
    weT.innerHTML = "";
    for (let e of wes) {
      let listItem = document.createElement("li");
      listItem.innerHTML = e.value;
      weT.appendChild(listItem);
    }
    
    let aqs = document.getElementsByClassName("eqField");
    let aqT = document.getElementById("aqT");
    aqT.innerHTML = "";
    for (let e of aqs) {
      let listItem = document.createElement("li");
      listItem.innerHTML = e.value;
      aqT.appendChild(listItem);
    }
    
    let file = document.getElementById("imgField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      document.getElementById("imgTemplate").src = reader.result;
    };
  
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
  }
  
  
  
  //print cv
  function printCV() {
    window.print();
  }