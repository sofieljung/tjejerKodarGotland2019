function showAbout() {
  show("About", "Hej jag heter mats");

  document.getElementById("about").style.display="block";
    document.getElementById("about1").style.display="block";
      document.getElementById("about2").style.display="block";

}

function showContact() {
  show("Contact", "1234567890+0987<br>654321234567890987654323456789");
  document.getElementById("about").style.display="none";
  document.getElementById("about1").style.display="none";
  document.getElementById("about2").style.display="none";
}

function showEvent() {
  show("Events", "WOewoowooowowowowowowowoww");
  document.getElementById("about").style.display="none";
  document.getElementById("about1").style.display="none";
  document.getElementById("about2").style.display="none";
}

function showProducts() {
  show("Products", "ÖLÖlölÖLöölölöLölöLöLölÖLö");
  document.getElementById("about").style.display="none";
  document.getElementById("about1").style.display="none";
  document.getElementById("about2").style.display="none";
}

function show(title, text) {
  document.getElementById("title").innerHTML = title;
  document.getElementById("text").innerHTML = text;
}
