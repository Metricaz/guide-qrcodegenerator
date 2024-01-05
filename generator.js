function gerarQR(e){
	//console.log(e)
	e.removeAttribute('onload');
	var deeplink = "https://deeplink.guideinvestimentos.com.br/onboarding";
	var urlapi = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+deeplink;
	e.setAttribute('src', urlapi);
}