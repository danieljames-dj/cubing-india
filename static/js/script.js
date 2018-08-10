console.log('Javascript Things');

// Test API

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    }
};
xhttp.open("GET", "/api/competition-list", true);
xhttp.send();
