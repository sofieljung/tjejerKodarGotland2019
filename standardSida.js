function showAbout() {
  show("About", "Vi som ligger bakom ett litet Lundabryggeri är:");

  document.getElementById("about").style.display="block";
  document.getElementById("about1").style.display="block";
  document.getElementById("about2").style.display="block";
  document.getElementById("citat").style.display="none";

}

function showContact() {
  show("Contact", "123456789");
  document.getElementById("about").style.display="none";
  document.getElementById("about1").style.display="none";
  document.getElementById("about2").style.display="none";
  document.getElementById("citat").style.display="none";
}

function showEvent() {
  show("Events", "Här kommer alla kommande events med oss!");
  document.getElementById("about").style.display="none";
  document.getElementById("about1").style.display="none";
  document.getElementById("about2").style.display="none";
  document.getElementById("citat").style.display="none";
}

function showProducts() {
  show("Products", "Våra produkter har funnits med oss sedan år tillbaka. Klassiker som passar varje bord! Dessa är: ");
  document.getElementById("about").style.display="none";
  document.getElementById("about1").style.display="none";
  document.getElementById("about2").style.display="none";
  document.getElementById("citat").style.display="none";
}

function showIndex () {
  show("Välkommen till oss", "Vi är mycket glada och stolta över att presentera vår senaste tillskott till bryggeriets ölfamilj.");
  document.getElementById("about").style.display="none";
  document.getElementById("about1").style.display="none";
  document.getElementById("about2").style.display="none";
  document.getElementById("citat").style.display="block";
}

function show(title, text) {
  document.getElementById("title").innerHTML = title;
  document.getElementById("text").innerHTML = text;
}
