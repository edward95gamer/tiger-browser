document.getElementById("searchButton").addEventListener("click", function () {
    var searchInput = document.getElementById("searchInput").value;
    var searchUrl = "https://www.google.com/search?q=" + encodeURI(searchInput);
    window.open(searchUrl, "_blank");
});
