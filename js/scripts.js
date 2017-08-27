$(document).ready(function() {
  // add option for users to mark task as 'done'
  $("ul").on("click", "li", function(){
  	$(this).toggleClass("completed");
  });
  // add option to remove item once completed
  $("ul").on("click", "span", function(event){
  	$(this).parent().fadeOut(500,function(){
  		$(this).remove();
  	});
  	event.stopPropagation();
  });
  // add keypress function
  $("input[type='text']").keypress(function(event){
  	if(event.which === 13){
  		//grabbing new todo text from input
  		var todoText = $(this).val();
  		$(this).val("");
  		//create a new li and add to ul
  		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  	}
  });
// enable text input when clicking on 'plus' icon
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});
});
