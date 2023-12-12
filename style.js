function TipoSelector(n){
  if(document.getElementsByClassName(n).class != "toggle"){
    document.getElementsByClassName(n).classList.add('toggle');
  } else{
    document.getElementsByClassName(n).classList.remove('toggle');
}
