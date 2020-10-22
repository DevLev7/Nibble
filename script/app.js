// Открытие формы


function openForm() {
  document.getElementById("form_change").style.display = "block";
}

function closeForm() {
  document.getElementById("form_change").style.display = "none";
}

function openForm_signup() {
  document.getElementById("form_signup").style.display = "flex";
}

function openForm_login() {
  document.getElementById("form_login").style.display = "flex";
  document.getElementById("form_reset").style.display = "none";
}
 


function openForm_forgotpass() {
  document.getElementById("form_login").style.display = "none";
  document.getElementById("form_forgotpass").style.display = "flex";
}

function openForm_reset() {
  document.getElementById("form_forgotpass").style.display = "none";
  document.getElementById("form_reset").style.display = "flex";
}


$(document).ready(function() {
$('.burger').click(function() {
    $('.burger_item').toggleClass('open-menu');
    $('.nav').toggleClass('open-menu');
    $('.header-auth').toggleClass('open-menu');
});
});

$( '.nav' ).on("click", function(){
  $('.nav').removeClass('open-menu');
  $('.header-auth').removeClass('open-menu');
});

$( '.header-auth' ).on("click", function(){
  $('.nav').removeClass('open-menu');
  $('.header-auth').removeClass('open-menu');
  
});

 function openList1(){
    document.getElementById("list1").style.display = "flex"
}
function openList2(){
    document.getElementById("list2").style.display = "flex"
}
function openList3(){
    document.getElementById("list3").style.display = "flex"
}

