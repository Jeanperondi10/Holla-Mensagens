window.onload = function(){
	var app=new Vue({
		el:"#app",
		data:{
			titulo:"Testamodel",
			check:false,
			text:["eai","oi"],
			title:"Oi",
			texto_tweet: "",
			tweets:[
				
				/*{
					nome:"Perond",
					mensagem:"Vue é mto bom",
					data:"29/10/2018",
				},
				{
					nome:"Peronde",
					mensagem:"Vue é mto massa",
					data:"29/10/2018",
				}*/
			]
		},
		methods:{
			addTweet: function(){
				var data = new Date();
					var dia=colocaZero(data.getDate());
					var mes=colocaZero(data.getMonth());
					var ano=data.getFullYear();
					var hora=colocaZero(data.getHours());
					var min=colocaZero(data.getMinutes());
				var newTweet = {
					nome: "Peronde",
					mensagem: this.texto_tweet,
					data: hora+":"+min+"-"+dia+"/"+mes+"/"+ano
				};

				this.tweets.push(newTweet);
			},
			curtir:function(num){
				alert("Você curtiu este item")
			},
			descurtir:function(){
				alert("Você descurtiu este item")
			}
		}
	});
}
function colocaZero(num){
	if(num<10){
		return "0"+num;
	}else{
		return num;
	}
}
function entrar(){
	document.getElementById("entrar").style="display:none";
	document.getElementById("img-loading").style="display:block";
	setTimeout(function(){document.getElementById("img-logo").style="position: fixed; width: 4%; margin: 0.5vw 48% 0.5vw 48%;"; document.getElementById('header-pag').style="position: fixed; top: 0; height: 5vw; width: 100%; background: white;";}, 3000);
}