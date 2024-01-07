(function(){
	var e = document.querySelector('img[src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="]');
	e.removeAttribute('onload');

	var getCookieValue = function (name){
	  return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
	}

	var utms = getCookieValue('origemMTZ');
	var parameters = '';

	if(utms.length > 0){
		var utm_decoded = JSON.parse(decodeURIComponent(utms));
		parameters = '?utm_source='+utm_decoded.utm_source;
	}

	var size = e.getAttribute('size');
	if(size == null){
		size = "100x100";
	}

	var deeplink = "https://deeplink.guideinvestimentos.com.br/onboarding";
	var urlapi = "https://api.qrserver.com/v1/create-qr-code/?size="+size+"&data="+deeplink+parameters;
	e.setAttribute('src', urlapi);
})();