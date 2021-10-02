$(document).ready(function(){
    $(".box").click(function(){
        let classNames = $(this).attr("class").split(" ");
        let boxClass = classNames[0];
        let className = classNames[1];
        if($(this).css("background") === "rgb(255, 0, 0)" {
            $("." + className).css("background", "#000");            
        }
        else {
            $("." + boxClass).css("background", "#000");
            $("." + className).css("background", "red");
        }
        )
    )
)