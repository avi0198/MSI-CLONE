var x=document.getElementById('select');
openmenu=()=>{
  x.style.left='0px';
}
closemenu=()=>{
  x.style.left='-100%';
}
var preloader=document.getElementById('loading');
load=()=>{
  preloader.style.display='none';
}