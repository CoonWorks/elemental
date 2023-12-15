var contando = 0;

function TypeSelector(n){
  if(document.getElementsByClassName(n).classList.contains('toggle')){
    document.getElementsByClassName(n).classList.remove('toggle')
  } else{
    document.getElementsByClassName(n).classList.add('toggle');
  }
}

function toggler(){
  if(contando = 0){
    document.getElementById('tablaLan').style.transform="scaleX(1)";
    contando = 1;
  } else{
    document.getElementById('tablaLan').style.transform="scaleX(0)";
    contando = 0;
  }
}

document.getElementById('togglerLan').addEventListener('click',toggler());
