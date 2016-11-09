$(function(){

	//banner图
	$(window).resize(function(){
		if($(".main").width()>1120){
			$(".main").height(480)
		}else if($(".main").width()<=1120){
			$(".main").height(function(){
				return (480/1120)*$(".main").width()
			})
		}
	})
		$(".hbs").eq(0).hide();
    	$(".hbs").eq(1).hide();
    	$(".hbs").eq(2).hide();
    $(".hright").on("click",function(){
    	$(".hbs").eq(0).toggle("fast");
    	$(".hbs").eq(1).delay(150).toggle("fast");
    	$(".hbs").eq(2).delay(300).toggle("fast");
    })
})
