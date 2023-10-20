document.getElementById("search-button").addEventListener("click", function(event) {
    event.preventDefault();
    var searchInput = document.getElementById("search-text").value.toLowerCase();
    var resultDiv = document.getElementById("result");
    var found = false;

    fetch("dictionary.json")
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(function(word) {
                if (word.toLowerCase() === searchInput) {
                    resultDiv.innerHTML = "Result: " + "<br>" + "<strong>" + word + "</strong>: " + data[word];
                    found = true;
                }
            });

            if (!found) {
                resultDiv.innerHTML = "No definition found for this word.";
            }
        })
        .catch(function(error) {
            resultDiv.innerHTML = "An error occurred: " + error;
        });
});
