//const today = new Date();
//const currentyear = document.querySelector("#currentyear");
//currentyear.textContent = today.getFullYear();


// This sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// This sets the last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;
