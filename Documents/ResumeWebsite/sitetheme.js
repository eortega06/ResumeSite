function apply_theme(theme){
  var fgColor = '';
  var bgColor = '';
  var linkColor = '';
  var anchorColor = '';
  if(theme == null) theme = 'light';
  if(theme == 'light'){
    fgColor = 'black';
    bgColor = 'white';
  } if(theme == 'dark'){
    fgColor = 'white';
    bgColor = 'black';
    linkColor = 'darkgray';
  } if(theme == 'halloween'){
    fgColor = 'orange';
    bgColor = 'black';
    linkColor = 'violet';
  } if(theme == 'xmas'){
    fgColor = 'red';
    bgColor = 'green';
    linkColor = 'lightGreen';
  }
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = fgColor;

  localStorage.setItem('theme', theme);
}

var saved_theme = localStorage.getItem('theme');
apply_theme(saved_theme);
