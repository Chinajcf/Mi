$.ajax({
			type:"get",
			url:"http://127.0.0.1:8080/demo",
			async:true,
			success:function(data){
				var obj=JSON.parse(data);
				/*手机*/
				var ph=obj.ph;
				var pul1='',pul2='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li onclick="get()"><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#phul1').html(pul1);
				
				for(var i=3;i<=5;i++){
					pul2+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#phul2').html(pul2);
				
				for(var i=6;i<=6;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#phul3').html(pul3);
				
				
				/*电视*/
	
				var vi=obj.vi;
				var vul1='',vul2='',vul3='';
				for(var i=0;i<=2;i++){
					vul1+='<li><img src="images/'+vi[i].img+'"/><p><span>'+vi[i].t+'</span></p></li>';
				};
				$('#vul1').html(vul1);
				
				for(var i=3;i<=5;i++){
					vul2+='<li><img src="images/'+vi[i].img+'"/><p><span>'+vi[i].t+'</span></p></li>';
				};
				$('#vul2').html(vul2);
				
				for(var i=6;i<=6;i++){
					vul3+='<li><img src="images/'+vi[i].img+'"/><p><span>'+vi[i].t+'</span></p></li>';
				};
				$('#vul3').html(vul3);
				
				/*电脑*/
				var vi=obj.cp;
				var vul1='',vul2='';
				for(var i=0;i<=2;i++){
					vul1+='<li><img src="images/'+vi[i].img+'"/><p><span>'+vi[i].t+'</span></p></li>';
				};
				$('#cul1').html(vul1);
				
				for(var i=3;i<=3;i++){
					vul2+='<li><img src="images/'+vi[i].img+'"/><p><span>'+vi[i].t+'</span></p></li>';
				};
				$('#cul2').html(vul2);
			
			/*家电*/
				var vi=obj.jd;
				var vul1='',vul2='',vul3='';
				for(var i=0;i<=2;i++){
					vul1+='<li><img src="images/'+vi[i].img+'"/><p><span>'+vi[i].t+'</span></p></li>';
				};
				$('#jul1').html(vul1);
				
				for(var i=3;i<=5;i++){
					vul2+='<li><img src="images/'+vi[i].img+'"/><p><span>'+vi[i].t+'</span></p></li>';
				};
				$('#jul2').html(vul2);
				
			
				
				/*路由*/
				
				var ph=obj.ly;
				var pul1='',pul2='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#lul1').html(pul1);
				
				for(var i=3;i<=5;i++){
					pul2+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#lul2').html(pul2);
				
				for(var i=6;i<=6;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#lul3').html(pul3);
			
			/*智能*/
			
			var ph=obj.zn;
				var pul1='',pul2='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#zul1').html(pul1);
				
				for(var i=3;i<=5;i++){
					pul2+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#zul2').html(pul2);
				
				for(var i=6;i<=8;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#zul3').html(pul3);
			
			
			/*电源*/
				var ph=obj.dy;
				var pul1='',pul2='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#dyul1').html(pul1);
				
				for(var i=3;i<=5;i++){
					pul2+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#dyul2').html(pul2);
				
				for(var i=6;i<=6;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#dyul3').html(pul3);
			
			
				/*耳机*/
				var ph=obj.er;
				var pul1='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#ejul1').html(pul1);
				
				
				
				for(var i=3;i<=3;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#ejul3').html(pul3);
			
			
			
				/*音箱*/
				var ph=obj.mc;
				var pul1='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#mcul1').html(pul1);
				
				
				
				for(var i=3;i<=3;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#mcul3').html(pul3);
			
			
			
			
			/*礼品*/
				var ph=obj.lw;
				var pul1='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#lwul1').html(pul1);
				
				
				
				for(var i=3;i<=5;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#lwul3').html(pul3);
			
			
			/*生活*/
			var ph=obj.live;
				var pul1='',pul2='',pul3='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#liveul1').html(pul1);
				
				for(var i=3;i<=5;i++){
					pul2+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#liveul2').html(pul2);
				
				for(var i=6;i<=8;i++){
					pul3+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
					
				};
				$('#liveul3').html(pul3);
			
			
			/*零售店*/
				var ph=obj.ls;
				var pul1='';
				for(var i=0;i<=2;i++){
					pul1+='<li><img src="images/'+ph[i].img+'"/><p><span>'+ph[i].t+'</span></p></li>';
				
				};
				$('#lsul1').html(pul1);
				
				
			
			
			}
			
		});
		


function get(){
	window.location.href='xiao.html';
}
