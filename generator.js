(function(){
	var e = document.querySelector('img[src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="]');
	e.removeAttribute('onload');

	var getCookieValue = function (name){
	  return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
	}

	var utms = getCookieValue('origemMTZ');
	var ga = getCookieValue('_ga');

	var parameters = [];

	if(utms.length > 0){
		var utm_decoded = JSON.parse(decodeURIComponent(utms));
		 Object.entries(utm_decoded).forEach(function(k){
		 	parameters.push(k[0]+'='+k[1]);  
		});
		
	}

	if(ga.length > 0){
		var clientId = ga.substr(6);
		parameters.push('clientid='+clientId);
	}

	parameters.push('timestamp='+new Date().getTime())

	if(parameters.length > 0){
		parameters = '?'+parameters.join('&');
	}

	var size = (e.getAttribute('size') == null)?"100x100":e.getAttribute('size');

	var deeplink = "https://links.guideinvestimentos.com.br/onboarding";
	var urlapi = "https://api.qrserver.com/v1/create-qr-code/?size="+size+"&data="+encodeURIComponent(deeplink+parameters);
	e.setAttribute('src', urlapi);
})();