(function(){
	var e = document.querySelector('#guide_qrcode');
	e.removeAttribute('onload');

	var size = e.getAttribute('size');
	var getCookieValue = function (name){
	  return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
	}

	var cookieTeste = getCookieValue('teste');

	if(size == null){
		size = "100x100";
	}

	var deeplink = "https://deeplink.guideinvestimentos.com.br/onboarding";
	var urlapi = "https://api.qrserver.com/v1/create-qr-code/?size="+size+"&data="+deeplink+"?"+cookieTeste;
	e.setAttribute('src', urlapi);
})();