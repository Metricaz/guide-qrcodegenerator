(function(){
	var e = document.querySelector('img[src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="]');
	e.removeAttribute('onload');

	var getCookieValue = function (name){
	  return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
	}

	var utms = getCookieValue('origemMTZ');
	var ga = getCookieValue('_ga');
	var url_params = new URLSearchParams(document.location.search);


	var parameters = [];

	//GET GA4 UTM LOADED
	if(utms.length > 0){
		var utm_decoded = JSON.parse(decodeURIComponent(utms));
		 Object.entries(utm_decoded).forEach(function(k){
		 	parameters.push(k[0]+'='+k[1]);
		});

	}

	//GET GA4 CLIENT ID
	if(ga.length > 0){
		var clientId = ga.substr(6);
		parameters.push('clientid='+clientId);
	}

	//GET ASSESSOR ID (OLD Abra sua conta)
	if(document.location.href.includes('abrasuaconta.guideinvestimentos.com.br/assessor/')){
		var assessor_id = document.location.href.split('/')[4]
		if(assessor_id && parseInt(assessor_id) > 0){
			parameters.push('old_assossor_id='+assessor_id)
		}
	}

	//GET ASSESSOR ID NEW
	var new_assessor_id = url_params.get("assessor");
	if(new_assessor_id && parseInt(new_assessor_id) > 0){
		parameters.push('new_assessor_id='+new_assessor_id)
	}

	//GET TIMESTAMP QRCODE GENERATE
	parameters.push('timestamp='+new Date().getTime())

	if(parameters.length > 0){
		parameters = '?'+parameters.join('&');
	}

	var size = (e.getAttribute('size') == null)?"100x100":e.getAttribute('size');

	var deeplink = "https://links.guideinvestimentos.com.br/onboarding";
	var urlapi = "https://api.qrserver.com/v1/create-qr-code/?size="+size+"&data="+encodeURIComponent(deeplink+parameters);
	e.setAttribute('src', urlapi);
})();