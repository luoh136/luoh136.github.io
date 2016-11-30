$(function(){

	"use strict";	

  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu a.aboutbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .gallery-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });

    $('.project-pages a').on('click',function(){
    	$('box-content row2').css('display','none');
    })


	/*立方体*/

	// var clientW=document.documentElement.clientWidth/*;获取浏览器的宽高*/
	// var clientH=document.documentElement.clientHeight;
	// var box=document.getElementsByClassName("box")[0];
	// document.onmousedown=function(e){
	// 	var startx= e.clientX;/*记录鼠标按下时距离浏览器的距离*/
	// 	var starty= e.clientY;
	// 	document.onmousemove=function(e){
	// 		var movex= e.clientX;/*记录鼠标移动时距离浏览器的距离*/
	// 		var movey= e.clientY;
	// 		var endx=movex-clientW/2;/*鼠标移动的距离原点在x轴方向的距离*/
	// 		var endy=movey-clientH/2;
	// 		var mo=Math.sqrt(endx*endx+endy*endy);/*计算模*/
	// 		var x=endx/mo;/*x方向的单位向量*/
	// 		var y=endy/mo;
	// 		var a=Math.atan2(x,y)*180/Math.PI;/*反三角函数，反正弦函数，求出的度数，三角函数里的是弧度*/
	// 		var angle=Math.abs(movex-startx)>Math.abs(movey-starty)?Math.abs(movex-startx):Math.abs(movey-starty);/*正方体跟着鼠标的移动而旋转，旋转地程度由x，y，两者当中较大的为准*/
	// 		var x=Math.abs(x);/*取绝对值  浏览器中，默认左上角为原点，与平时标准的坐标有所不同*/
	// 		var y=Math.abs(y);
	// 		if(a>0&&a<90){
	// 			y=-y;
	// 			angle=-angle;
	// 		}if(a>-180&&a<-90){
	// 			x=-x;
	// 			angle=-angle;
	// 		}else if(a>-90&&a<0){
	// 			x=-x;
	// 			y=-y;
	// 		}
	// 		// box.style.transform="rotate3d("+x+","+y+",0,"+angle+"deg)";
	// 		e.preventDefault();
	// 	};
	// 	document.onmouseup=function(){/*只有当按下后才会注册抬起事件 如果放到外面的话，执行一次抬起事件后，就被注销了，也就是说抬起事件只能执行一次*/
	// 		document.onmousemove=null;
	// 		document.onmouseup=null;
	// 	};
	// }

    // 点击书卡
	 $('.g6-btn').on('click',function(){
    	$(this).closest('.project-item').toggleClass('action');
    })

})
