var contando = 0;

function TypeSelector(n){
  if(document.getElementsByClassName(n).classList.contains('toggle')){
    document.getElementsByClassName(n).classList.remove('toggle')
  } else{
    document.getElementsByClassName(n).classList.add('toggle');
  }
}

function toggler(){
  if(document.getElementById('tablaLan').classList.contains('retracter') == true){
    document.getElementById('tablaLan').classList.remove('retracter');
    document.getElementById('tablaLan').classList.add('extender');
  } else{
    document.getElementById('tablaLan').classList.add('retracter');
    document.getElementById('tablaLan').classList.remove('extender');
  }
}

document.getElementById('togglerLan').addEventListener('click',toggler());
