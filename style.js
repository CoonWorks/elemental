var j = 0;

function toggler(n){
  if(j = 0){
    document.getElementById('tabla'+n).style.transform="scale(1,1)";
    j = j + 1;
  } else{
    document.getElementById('tabla'+n).style.transform="scale(0,1)";
    j = j - 1;
  }
}

function TipoSelector(n){
  document.getElementsByClassName(n).classList.add('toggle');
}

function RemoveSelector(n){
  document.getElementsByClassName(n).classList.remove('toggle');
}

document.getElementById('toggler'+t).addEventListener('click',toggler(t));
document.getElementById('selector-'+t).addEventListener('mouseover',TipoSelector(t));
document.getElementById('selector-'+t).addEventListener('mouseout',RemoveSelector(t));
