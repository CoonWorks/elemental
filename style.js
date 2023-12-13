function TipoSelector(n){
  document.getElementsByClassName(n).classList.add('toggle');
}

function RemoveSelector(n){
  document.getElementsByClassName(n).classList.remove('toggle');
}

document.getElementById('selector-'+j).addEventListener('mouseover',TipoSelector(j));
document.getElementById('selector-'+j).addEventListener('mouseout',RemoveSelector(j));
