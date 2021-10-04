$(document).ready(function(){
    $(".box").click(function(){
        let classNames = $(this).attr("class").split(" ");
        let boxClass = classNames[0];
        let className = classNames[1];
        if($(this).css("background-color") === "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "#000");            
        }
        else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        };
    });
});
