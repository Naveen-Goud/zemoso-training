async function getData() {
  var response = await fetch("./menu.json");
  var data = await response.json();
  console.log(data);

  localStorage.setItem("menu", JSON.stringify(data.menu));
  localStorage.setItem("tables", JSON.stringify(data.tables));
}

function showMenu() {
  var menu = JSON.parse(localStorage.getItem("menu"));
  console.log(menu);

  var menu_container = document.getElementById("menu-container");
  for (let i = 0; i < menu.length; i++) {
    var menu_div = document.createElement("div");
    menu_div.setAttribute("id", i + 1);
    menu_div.setAttribute("draggable", "true");
    menu_div.ondragstart = function drag(e) {
      console.log(e.target.id);
      e.dataTransfer.setData(`text`, e.target.id);
    };
    menu_div.classList.add("menu-item");
    var menu_title = document.createElement("span");
    menu_title.classList.add("menu-title");
    var menu_price = document.createElement("span");
    menu_price.classList.add("menu-price");
    var menu_image = document.createElement("img");
    menu_image.classList.add("menu-image");
    menu_title.innerText = menu[i].Name;
    menu_price.innerText = "Rs." + menu[i].price;
    menu_image.src = menu[i].image;

    menu_div.append(menu_image, menu_title, menu_price);

    menu_container.append(menu_div);
  }
}

function showTables() {
  var tables = JSON.parse(localStorage.getItem("tables"));
  console.log(tables);
}
function allowDrop(e) {
  e.preventDefault();
}

function drop1(ev) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData("text");

  var table = document.getElementById("table1");

  var menu = JSON.parse(localStorage.getItem("menu"));

  var existingRow = table.querySelector(`tr[id="${id}"]`);
  if (existingRow) {
    var cellQuantity = existingRow.querySelector(".quantity input");
    var cellPrice = existingRow.querySelector(".price");
    var newQuantity = Number(cellQuantity.value) + 1;
    cellQuantity.value = newQuantity;
    cellPrice.innerText = `${newQuantity *
      Number(menu[id - 1].price.slice(0))}`;

    updateTotal(table);
  } else {
    var row = table.insertRow(-1);
    row.setAttribute("id", id);

    var cellSerial = row.insertCell(0);
    var cellTitle = row.insertCell(1);
    var cellQuantity = row.insertCell(2);
    var cellPrice = row.insertCell(3);
    var cellDelete = row.insertCell(4);

    cellSerial.innerText = table.rows.length - 1;
    cellTitle.innerText = menu[id - 1].Name;
    // cellQuantity.innerText = "1";
    cellQuantity.classList.add("quantity");
    cellPrice.innerText = menu[id - 1].price.slice(3);
    cellPrice.classList.add("price");

    var quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.classList.add("quantity");
    cellQuantity.appendChild(quantityInput);

    var initialPrice = Number(menu[id - 1].price);
    cellPrice.innerText = initialPrice;

    cellDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    cellDelete.addEventListener("click", function() {
      var row = this.parentNode;
      var cellPrice = row.querySelector(".price");
      var price = Number(cellPrice.innerText.slice(0));
      table.deleteRow(row.rowIndex);
      updateTotal(table, price);
      updateInputBox(table);
    });

    quantityInput.addEventListener("click", function() {
      updatePrice();
      updateTotal(table);
      updateInputBox(table);
    });
  }

  updatePrice();
  updateTotal(table);
  updateInputBox(table);

  function updatePrice() {
    var quantityInput = cellQuantity.querySelector(".quantity");
    var quantity = Number(quantityInput.value);

    var price = Number(menu[id - 1].price);
    cellPrice.innerText = `${quantity * price}`;
  }

  function updateTotal(table, deletedPrice) {
    var totalItems = 0;
    var totalCost = 0;

    for (var i = 1; i < table.rows.length; i++) {
      var row = table.rows[i];
      var cellQuantity = row.querySelector(".quantity");
      var cellPrice = row.querySelector(".price");

      totalItems += Number(cellQuantity.querySelector("input").value);
      console.log(totalItems);
      totalCost += Number(cellPrice.innerText);

      var cellSerial = row.cells[0];
      cellSerial.innerText = i;
    }

    if (deletedPrice) {
      totalCost = totalCost;
    }

    var totalItemsTable1 = document.getElementById("total-items-table1");
    var totalCostTable1 = document.getElementById("total-cost-table1");
    var totalItemsDisplay = document.getElementById("total-items1");
    totalItemsDisplay.innerText = totalItems;
    var totalCostDisplay = document.getElementById("total-cost1");
    totalCostDisplay.innerText = `${totalCost}`;
    totalItemsTable1.innerText = "Total Items: " + totalItems;
    totalCostTable1.innerText = "Total Cost: " + `${totalCost}`;
  }
}

function drop2(ev) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData("text");

  var table = document.getElementById("table2");

  var menu = JSON.parse(localStorage.getItem("menu"));

  var existingRow = table.querySelector(`tr[id="${id}"]`);
  if (existingRow) {
    var cellQuantity = existingRow.querySelector(".quantity input");
    var cellPrice = existingRow.querySelector(".price");
    var newQuantity = Number(cellQuantity.value) + 1;
    cellQuantity.value = newQuantity;
    cellPrice.innerText = `${(
      newQuantity * Number(menu[id - 1].price.slice(0))
    ).toFixed(2)}`;
    updateTotal(table);
  } else {
    var row = table.insertRow(-1);
    row.setAttribute("id", id);

    var cellSerial = row.insertCell(0);
    var cellTitle = row.insertCell(1);
    var cellQuantity = row.insertCell(2);
    var cellPrice = row.insertCell(3);
    var cellDelete = row.insertCell(4);

    cellSerial.innerText = table.rows.length - 1;
    cellTitle.innerText = menu[id - 1].Name;
    // cellQuantity.innerText = "1";
    cellQuantity.classList.add("quantity");
    cellPrice.innerText = menu[id - 1].price.slice(3);
    cellPrice.classList.add("price");

    var quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.classList.add("quantity");
    cellQuantity.appendChild(quantityInput);

    var initialPrice = Number(menu[id - 1].price.slice(0));
    cellPrice.innerText = initialPrice.toFixed(2);

    cellDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    cellDelete.addEventListener("click", function() {
      var row = this.parentNode;
      var cellPrice = row.querySelector(".price");
      var price = Number(cellPrice.innerText.slice(0));
      table.deleteRow(row.rowIndex);
      updateTotal(table, price);
      updateInputBox(table);
    });

    quantityInput.addEventListener("change", function() {
      updatePrice();
      updateTotal(table);
      updateInputBox(table);
    });
  }

  updatePrice();
  updateTotal(table);
  updateInputBox(table);

  function updatePrice() {
    var quantityInput = cellQuantity.querySelector(".quantity");
    var quantity = Number(quantityInput.value);
    var price = Number(menu[id - 1].price.slice(0));
    cellPrice.innerText = `${(quantity * price).toFixed(2)}`;
  }

  function updateTotal(table, deletedPrice) {
    var totalItems = 0;
    var totalCost = 0;

    for (var i = 1; i < table.rows.length; i++) {
      var row = table.rows[i];
      var cellQuantity = row.querySelector(".quantity");
      var cellPrice = row.querySelector(".price");

      totalItems += Number(cellQuantity.querySelector("input").value);
      console.log(totalItems);
      totalCost += Number(cellPrice.innerText.slice(0));

      var cellSerial = row.cells[0];
      cellSerial.innerText = i;
    }

    if (deletedPrice) {
      totalCost = totalCost;
    }

    var totalItemsTable2 = document.getElementById("total-items-table2");
    var totalCostTable2 = document.getElementById("total-cost-table2");
    var totalItemsDisplay = document.getElementById("total-items2");
    totalItemsDisplay.innerText = totalItems;
    var totalCostDisplay = document.getElementById("total-cost2");
    totalCostDisplay.innerText = `${totalCost.toFixed(2)}`;
    totalItemsTable2.innerText = "Total Items: " + totalItems;
    totalCostTable2.innerText = "Total Cost: " + `${totalCost.toFixed(2)}`;
  }
}

function drop3(ev) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData("text");

  var table = document.getElementById("table3");

  var menu = JSON.parse(localStorage.getItem("menu"));

  var existingRow = table.querySelector(`tr[id="${id}"]`);
  if (existingRow) {
    var cellQuantity = existingRow.querySelector(".quantity input");
    var cellPrice = existingRow.querySelector(".price");
    var newQuantity = Number(cellQuantity.value) + 1;
    cellQuantity.value = newQuantity;
    cellPrice.innerText = `${newQuantity * Number(menu[id - 1].price)}`;
    updateTotal(table);
  } else {
    var row = table.insertRow(-1);
    row.setAttribute("id", id);

    var cellSerial = row.insertCell(0);
    var cellTitle = row.insertCell(1);
    var cellQuantity = row.insertCell(2);
    var cellPrice = row.insertCell(3);
    var cellDelete = row.insertCell(4);

    cellSerial.innerText = table.rows.length - 1;
    cellTitle.innerText = menu[id - 1].Name;
    // cellQuantity.innerText = "1";
    cellQuantity.classList.add("quantity");
    cellPrice.innerText = menu[id - 1].price.slice(3);
    cellPrice.classList.add("price");

    var quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("value", "1");
    quantityInput.classList.add("quantity");
    cellQuantity.appendChild(quantityInput);

    var initialPrice = Number(menu[id - 1].price.slice(0));
    cellPrice.innerText = initialPrice.toFixed(2);

    cellDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    cellDelete.addEventListener("click", function() {
      var row = this.parentNode;
      var cellPrice = row.querySelector(".price");
      var price = Number(cellPrice.innerText);
      table.deleteRow(row.rowIndex);
      updateTotal(table, price);
      updateInputBox(table);
    });

    quantityInput.addEventListener("change", function() {
      updatePrice();
      updateTotal(table);
      updateInputBox(table);
    });
  }

  updatePrice();
  updateTotal(table);
  updateInputBox(table);

  function updatePrice() {
    var quantityInput = cellQuantity.querySelector(".quantity");
    var quantity = Number(quantityInput.value);
    var price = Number(menu[id - 1].price);
    cellPrice.innerText = `${quantity * price}`;
  }

  function updateTotal(table, deletedPrice) {
    var totalItems = 0;
    var totalCost = 0;

    for (var i = 1; i < table.rows.length; i++) {
      var row = table.rows[i];
      var cellQuantity = row.querySelector(".quantity");
      var cellPrice = row.querySelector(".price");

      totalItems += Number(cellQuantity.querySelector("input").value);
      console.log(totalItems);
      totalCost += Number(cellPrice.innerText);

      var cellSerial = row.cells[0];
      cellSerial.innerText = i;
    }

    if (deletedPrice) {
      totalCost = totalCost;
    }

    var totalItemsTable3 = document.getElementById("total-items-table3");
    var totalCostTable3 = document.getElementById("total-cost-table3");
    var totalItemsDisplay = document.getElementById("total-items3");
    totalItemsDisplay.innerText = totalItems;
    var totalCostDisplay = document.getElementById("total-cost3");
    totalCostDisplay.innerText = `${totalCost}`;
    totalItemsTable3.innerText = "Total Items: " + totalItems;
    totalCostTable3.innerText = "Total Cost: " + `${totalCost}`;
  }
}

var bill = document.getElementById("billname1");

bill.addEventListener("click", () => {
  var table = document.getElementById("table1");
  var totalCostDisplay = document.getElementById("total-cost1");
  var totalCost = Number(totalCostDisplay.innerText);

  var result = confirm("Total cost: " + totalCost.toFixed(2));

  if (result == true) {
    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
    var totalItemsTable1 = document.getElementById("total-items-table1");
    var totalCostTable1 = document.getElementById("total-cost-table1");
    var totalItemsDisplay = document.getElementById("total-items1");
    var totalCostDisplay = document.getElementById("total-cost1");
    totalItemsDisplay.innerText = 0;
    totalCostDisplay.innerText = "0";
    totalItemsTable1.innerText = "Total Items: 0";
    totalCostTable1.innerText = "Total Cost: 0";
  }
});

var bill = document.getElementById("billname2");
bill.addEventListener("click", () => {
  var table = document.getElementById("table2");
  var totalCostDisplay = document.getElementById("total-cost2");
  var totalCost = Number(totalCostDisplay.innerText);

  var result = confirm("Total cost: " + totalCost.toFixed(2));

  if (result == true) {
    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
    var totalItemsTable2 = document.getElementById("total-items-table2");
    var totalCostTable2 = document.getElementById("total-cost-table2");
    var totalItemsDisplay = document.getElementById("total-items2");
    var totalCostDisplay = document.getElementById("total-cost2");
    totalItemsDisplay.innerText = 0;
    totalCostDisplay.innerText = "0";
    totalItemsTable2.innerText = "Total Items: 0";
    totalCostTable2.innerText = "Total Cost: 0";
  }
});
var bill = document.getElementById("billname3");
bill.addEventListener("click", () => {
  var table = document.getElementById("table3");
  var totalCostDisplay = document.getElementById("total-cost3");
  var totalCost = Number(totalCostDisplay.innerText);

  var result = confirm("Total cost: " + totalCost.toFixed(2));

  if (result == true) {
    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
    var totalItemsTable3 = document.getElementById("total-items-table3");
    var totalCostTable3 = document.getElementById("total-cost-table3");
    var totalItemsDisplay = document.getElementById("total-items3");
    var totalCostDisplay = document.getElementById("total-cost3");
    totalItemsDisplay.innerText = 0;
    totalCostDisplay.innerText = "0";
    totalItemsTable3.innerText = "Total Items: 0";
    totalCostTable3.innerText = "Total Cost: 0";
  }
});
getData();
showMenu();
