var my=new Swiper(".lunbo",{
	autoplay:2000,
	autoplayDisableOnInteraction:false,
	pagination:".o",
	loop:true,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	effect : 'fade',
})
var my1=new Swiper(".weiyi",{
//	autoplay:1000,
})

$(".lis").hover(function(){
	$(this).find(".conte").css("display","block")
},function(){
	$(this).find(".conte").css("display","none")
})

$(".go,.kua").hover(function(){
	$(".kua").css("display","block")
},function(){
	$(".kua").css("display","none")
})

var num=0;
$(".tab>a:first").click(function(){
	num++;
	if(num>=2){
		num=2
	}
	console.log(num)
	my1.slideTo($(this).index(num),500);
})


$(".tit>.list>span").hover(function(){
	$(this).css({"border-bottom":"none","color":"black"})
	$(this).css({"border-bottom":"red solid 2px","color":"red"})
},function(){
	$(this).css({"border-bottom":"none","color":"black"})
//	$(".il>span:first").css({"border-bottom":"red solid 2px","color":"red"})
})
