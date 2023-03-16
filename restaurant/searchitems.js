function searchMenu() {
  var menu = JSON.parse(localStorage.getItem("menu"));
  var searchValue = document.getElementById("search-menu").value.toLowerCase();
  var menu_container = document.getElementById("menu-container");

  menu_container.innerHTML = "";
  console.log(menu_container);

  for (let i = 0; i < menu.length; i++) {
    var itemName = menu[i].Name.toLowerCase();
    var itemCategory = menu[i].category.toLowerCase();

    if (itemName.includes(searchValue) || itemCategory.includes(searchValue)) {
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
      menu_title.innerText = menu[i].Name;
      menu_price.innerText = menu[i].price;
      menu_div.append(menu_title, menu_price);
      menu_container.append(menu_div);
    }
  }
}
