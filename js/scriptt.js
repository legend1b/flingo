function adSetter(){
// alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-5864221037986099/2809683672',
        interstitial: 'ca-app-pub-5864221037986099/8556177838'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-5864221037986099/2809683672',
        interstitial: 'ca-app-pub-5864221037986099/8556177838'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-5864221037986099/2809683672',
        interstitial: 'ca-app-pub-5864221037986099/8556177838'
    };
}

	
if(window.AdMob) AdMob.createBanner( {
    adId:admobid.banner, 
    //isTesting:true,
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
	
  if(window.AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );


}
  function onDeviceReady(){
  StatusBar.backgroundColorByHexString("#185181");
  adSetter();
   alert("device ready");
      
  }
function intershoo(){
	if(AdMob) AdMob.showInterstitial();
}

function intershow(){	
      adSetter();
	  alert("device ready");
}

function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}
