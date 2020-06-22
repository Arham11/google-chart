$(document).ready(function () {
    $("#header").load("header.html");
    $('[data-toggle="tooltip"]').tooltip()
})

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: "en"}, 'google_translate_element');
  }
  function changeLanguageByButtonClick() {
    var language = document.getElementById("language").getAttribute("value");
    var selectField = document.querySelector("#google_translate_element select");
    for(var i=0; i < selectField.children.length; i++){
      var option = selectField.children[i];
      // find desired langauge and change the former language of the hidden selection-field 
      if(option.value==language){
         selectField.selectedIndex = i;
         // trigger change event afterwards to make google-lib translate this side
         selectField.dispatchEvent(new Event('change'));
         break;
      }
    }
  }