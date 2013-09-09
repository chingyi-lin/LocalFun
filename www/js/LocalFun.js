function User(){
	this.Name = window.localStorage.getItem("Name");
	this.Level = window.localStorage.getItem("Level");
	this.Exp = window.localStorage.getItem("Exp");
	this.NextLevelExp = window.localStorage.getItem("NextLevelExp");
	this.Photo = window.localStorage.getItem("Photo");
	this.TaskIndex = parseInt(window.localStorage.getItem("TaskIndex"));
	this.CurrentTask = window.localStorage.getItem("CrrentTask");
	this.NumOfPassTask = window.localStorage.getItem("NumOfPassTask");
	this.MyTask = JSON.parse(window.localStorage.getItem("MyTask"));
	this.update = function(){//是要從誰更新誰咧？
		this.Name = window.localStorage.getItem("Name");
		this.Level = window.localStorage.getItem("Level");
		this.Exp = window.localStorage.getItem("Exp");
		this.NextLevelExp = window.localStorage.getItem("NextLevelExp");
		this.Photo = window.localStorage.getItem("Photo");
		this.TaskIndex = parseInt(window.localStorage.getItem("TaskIndex"));
		this.CurrentTask = window.localStorage.getItem("CrrentTask");
		this.NumOfPassTask = window.localStorage.getItem("NumOfPassTask");
		this.MyTask = JSON.parse(window.localStorage.getItem("MyTask"));
		};
	//this.save = function(){}
}
/**GoogleMap**/
function GoogleMapInitialize(MyLatitude, MyLongitude) {
  var mapOptions = {
    //center: new google.maps.LatLng(location.coords.latitude, location.coords.longitude),
  	center: new google.maps.LatLng(MyLatitude, MyLongitude),
   	zoom: 8,
   	mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', GoogleMapInitialize);

function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  var geocode = new array(1);
  geocode[0] = results[0].geometry.location.lat();
  geocode[1] = results[0].geometry.location.lng();
  return geocode;
}

/** PhoneGap: Geolocation **/
function UpdateUserPosition(){
  navigator.geolocation.getCurrentPosition(onSuccessUpdatePosition, onError);
}
function onSuccessUpdatePosition(){
  window.localStorage.setItem("MyLatitude", position.coords.latitude);
  window.localStorage.setItem("MyLongitude", position.coords.longitude);
  window.localStorage.setItem("MyAltitude", position.coords.altitude);
}
function geoError(error) {
  alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}
/**
function CheckInTask(){
	navigator.geolocation.getCurrentPosition(onSuccessCheckInTask, onError);
}
function onSuccessCheckInTask(){
  window.localStorage.setItem("MyLatitude", position.coords.latitude);
  window.localStorage.setItem("MyLongitude", position.coords.longitude);
  window.localStorage.setItem("MyAltitude", position.coords.altitude);
}
**/