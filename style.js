function TypeSelector(n){
  if(document.getElementsByClassName(n).classList.contains('toggle')){
    document.getElementsByClassName(n).classList.remove('toggle')
  } else{
    document.getElementsByClassName(n).classList.add('toggle');
  }
}

function toggler(n){
  if(document.getElementById('tabla-'+n).classList.contains('extender')){
    document.getElementById('tabla-'+n).classList.remove('extender')
  } else{
    document.getElementById('tabla-'+n).classList.add('extender');
  }
}
