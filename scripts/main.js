function myFunction() {
    var x = document.getElementById("topNav");
    var y = document.getElementById("menuBarButton");
    if (x.className.includes(" responsive")) {
        x.className = x.className.replace(" responsive", "");
        y.className = y.className.replace(" on", "");
    } else {
        x.className += " responsive";
        y.className += " on"
    }
}

let scrollOffset = 100

window.onscroll = function (e) {

    console.log(scrollY)

    var te = 0

    let x = document.getElementById("logoContent");

    if (window.scrollY > scrollOffset && x.classList.contains("uncompressed")) {

      x.classList.remove("uncompressed");

      document.getElementById("topNav").classList.add("shadow");

      te = 1

    } else if (window.scrollY < scrollOffset && !(x.classList.contains("uncompressed"))) {

      x.classList.remove("compressed");

      document.getElementById("topNav").classList.remove("shadow");

      te = 2

    }

    setTimeout(function() {

      if (te == 1) {

        x.classList.add("compressed");

      } else if (te == 2) {

        x.classList.add("uncompressed");

      }

    }, 200);

};
