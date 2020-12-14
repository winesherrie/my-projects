$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        let toDoText = $(this).val();
        $("ul").append("<li><span><i class='far fa-times-circle'></i></span> " + toDoText +"</li>");
        $(this).val("");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});