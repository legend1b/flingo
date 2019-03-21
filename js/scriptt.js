function adSetter(){
// alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-7367068260362292/9228726138',
        interstitial: 'ca-app-pub-7367068260362292/9061205175'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-7367068260362292/9228726138',
        interstitial: 'ca-app-pub-7367068260362292/9061205175'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-7367068260362292/9228726138',
        interstitial: 'ca-app-pub-7367068260362292/9061205175'
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
   alert("device ready");
  adSetter();
   
      
  }
function intershoo(){
	if(AdMob) AdMob.showInterstitial();
}

function intershow(){	
      alert("device ready");
      adSetter();
}

function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}
