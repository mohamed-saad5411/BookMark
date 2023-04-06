
var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var siteList;



if (localStorage.getItem(("siteList")) == null) {
    siteList = [];
} else {
    siteList = JSON.parse(localStorage.getItem("siteList"))
    displaySites(siteList);
}

function addSites() {
    if (validateSiteName() == true) {
        var site = {
            name: siteName.value,
            myURL: siteURL.value,
        }
        siteList.push(site);
        localStorage.setItem("siteList", JSON.stringify(siteList))
        displaySites(siteList);
        clearForm();
    } else {
        alert("invalied product name")
    }
}

function displaySites(list) {
    var cartona = ``;
    for (var i = 0; i < list.length; i++) {
        cartona += `<tr>
        <td>${i + 1}</td>
        <td>${list[i].name}</td>
        <td><a href="${list[i].myURL}" class="btn btn-primary btn-sm" target="_blank">Visite</a></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger btn-sm">Delete</button></td>
        </tr>`
    }

    document.getElementById("tbody").innerHTML = cartona;
}

function deleteSite(currentSite) {
    siteList.splice(currentSite, 1)
    localStorage.setItem("siteList", JSON.stringify(siteList))
    displaySites(siteList)
}

function clearForm() {
    siteName.value = "",
        siteURL.value = ""
}

function validateSiteName() {
    var regex = /^[A-Z][a-z]{3,20}$/;
    if (regex.test(siteName.value) == true) {
        siteName.style.border = "none"
        return true;
    } else {
        siteName.style.border = "2px solid red"
        return false;
    }
}