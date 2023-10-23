function delColor() {
  const select = document.getElementById("colorSelect");
  let selectedValue = select.options[select.selectedIndex].value;

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value === selectedValue) {
      select.remove(i);
      break; // Exit the loop once the option is removed
    }
  }
}