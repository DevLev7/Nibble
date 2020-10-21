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





 $(document).ready(function() {
  $('.burger').click(function() {
      $('.burger_item').toggleClass('open-menu');
      $('.nav').toggleClass('open-menu');
      $('.header-auth').toggleClass('open-menu');
  });
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

