document.getElementById("input_text").addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    createNode();
  }
});
function createNode() {
  let input_text = document.getElementById("input_text").value;
  var li_data = document.getElementsByTagName("LI");
  let flag = true;
  if (input_text == "" || input_text.length < "3" || input_text.length > "15") {
    alert("Please enter Valid Text!");
  } else {
    for (i = 0; i < li_data.length; i++) {
      if (input_text + "\u00D7" == li_data[i].textContent) {
        flag = !flag;
        alert("Value already exist!");
      }
    }
  }
  if (flag == true) {
    let node = document.createElement("li");
    let text = document.createTextNode(input_text);
    node.appendChild(text);
    document.getElementById("ul_list").appendChild(node);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        if(confirm("Are you sure?")){
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    }
  }

  document.getElementById("input_text").value = "";
}
