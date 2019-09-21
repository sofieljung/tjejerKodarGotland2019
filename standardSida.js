function showAbout() {
  show("About", "Hej jag heter mats");
}

function showContact() {
  show("Contact", "1234567890+0987<br>654321234567890987654323456789");
}

function showEvent() {
  show("Events", "WOewoowooowowowowowowowoww");
}

function showProducts() {
  show("Products", "ÖLÖlölÖLöölölöLölöLöLölÖLö");
}

function show(title, text) {
  document.getElementById("title").innerHTML = title;
  document.getElementById("text").innerHTML = text;
}
