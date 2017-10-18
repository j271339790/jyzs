var lis = $('.box .banner ul li');
var num = 0;
setInterval(function(){
	lis.eq(num).fadeOut();
	num++;
	if(num>6){
		num=0;
	}
	lis.eq(num).fadeIn();
},3000);
var num1 = 0;
var lbts = $('.box .lbt');
setInterval(function(){
	lbts.eq(num1).css("left","-1337px").siblings().css("left","0");
	num1++;
	if(num1>1){
		num1=0;
	}
},6000);

(function(){
	var color = ["#ffac13","#83c44e","#2196f3","#e53935","#00c0a5","#ffac13","#83c44e","#2196f3","#e53935","#00c0a5"];
	var cor = $('.box .lbt .mes');
	for(var i = 0 ; i < color.length; i++){
		cor[i].style.cssText = "border-top: 2px solid" + color[i];
	}
})();