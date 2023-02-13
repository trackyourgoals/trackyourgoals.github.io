(() => {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()


function loadEvents(){
  var xhttp = new XMLHttpRequest();
  var url = "https://watchingeagle.com/assets/json/february.json";
  var innerData = '<h6 class="border-bottom pb-2 mb-0">Events</h6>';
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(this.responseText);
      document.getElementById('eventCount').innerHTML = jsonData.events.length;
      for (var i = 0; i < jsonData.events.length; i++) {
          var event = jsonData.events[i];
          innerData = innerData + 
            '<div class="d-flex text-muted pt-3">'+
              '<svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">'+
                '<title>'+event.date+'</title>'+
                '<rect width="100%" height="100%" fill="#007bff"/>'+
                '<text x="50%" y="50%" fill="black" dy=".3em">'+event.date+'</text>'+
              '</svg>'+
              '<p class="pb-3 mb-0 small lh-sm border-bottom w-100">'+
                '<strong class="d-block text-gray-dark">'+event.name+'</strong>'+
                event.maas + ' ' + event.paksh + ' ' + event.tithi +
              '</p>'+
            '</div>';
      }
      document.getElementById('upcomingEvents').innerHTML = innerData + '<small class="d-block text-end mt-3"><a href="#">All events</a></small>';
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
