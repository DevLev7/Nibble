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


 

