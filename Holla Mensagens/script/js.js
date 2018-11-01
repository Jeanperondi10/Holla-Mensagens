window.onload = function(){
	var usu="Usuário";
	var app=new Vue({
		el:"#app",
		data:{
			texto_tweet: "",
			entrar_text: "",
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
				if(checkVazio(this.texto_tweet)===true){
					var data = new Date();
						var dia=colocaZero(data.getDate());
						var mes=colocaZero(data.getMonth());
						var ano=data.getFullYear();
						var hora=colocaZero(data.getHours());
						var min=colocaZero(data.getMinutes());
					var newTweet = {
						nome: usu,
						mensagem: this.texto_tweet,
						data: hora+":"+min+"-"+dia+"/"+mes+"/"+ano
					};

					this.tweets.push(newTweet);
					this.texto_tweet="";
					document.getElementById("msg").style="background: lightblue";
				}else{
					document.getElementById("msg").style="background:rgba(255,0,0,0.4)"
				}
			},
			entrar:function(){
				if(checkVazio(this.entrar_text)===true){
					usu=document.getElementById("nome").value;
					document.getElementById("nome").style="display:none";
					document.getElementById("entrar").style="display:none";
					document.getElementById("img-loading").style="display:block";
					setTimeout(function(){document.getElementById("img-logo").style="position: fixed; width: 4%; margin: 0.5vw 48% 0.5vw 48%;"; document.getElementById('header-pag').style="position: fixed; top: 0; height: 5vw; width: 100%; background: white;";}, 3000);
				}else{
					document.getElementById("nome").style="background: rgba(255,0,0,0.3)"
				}
				this.entrar_text="";
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
function checkVazio(txt){
	var vazio="";
	for(var i=0;i<txt.length;i++) {
		vazio=vazio+" ";
	}
	if(vazio==txt){
		return false;
	}else{
		return true;
	}
}