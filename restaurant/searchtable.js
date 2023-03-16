const searchInput = document.getElementById("search-table");
const filterableDivs = document.getElementsByClassName("table");

searchInput.addEventListener("input", () => {
  const searchQuery = searchInput.value.toLowerCase();

  for (let i = 0; i < filterableDivs.length; i++) {
    const divText = filterableDivs[i].textContent.toLowerCase();

    if (divText.includes(searchQuery)) {
      filterableDivs[i].style.display = "";
    } else {
      filterableDivs[i].style.display = "none";
    }
  }
});
