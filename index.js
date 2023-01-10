$(document).ready(function(){
        $("input")
        .each(
          function() {
            $(this)
              .data('holder', $(this)
                .attr('placeholder'));
            $(this)
              .focusin(function() {
                $(this)
                  .attr('placeholder', '');
              });
            $(this)
              .focusout(function() {
                $(this)
                  .attr('placeholder', $(this)
                    .data('holder'));
              });
          });

$('.custom_button').on('click',function(){

        var isFormValid = true;

        $(".entry").each(function(){
            if ($.trim($(this).val()).length == 0){
              isFormValid = false;
            }
        
        });
    
        if (!isFormValid)
        {
         alert('Please fill in all the required fields')
        }
        else{
                alert("Thanks for submitting your form!");
         
        }
        
    












})









})
     







