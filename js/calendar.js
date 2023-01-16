jQuery(document).ready(function () {
	jQuery('.datetimepicker').datepicker({
		timepicker: true,
		language: 'en',
		range: true,
		multipleDates: true,
		multipleDatesSeparator: " - "
	});
	jQuery("#add-event").submit(function () {
		var values = {};
		$.each($('#add-event').serializeArray(), function (i, field) {
			values[field.name] = field.value;
		});
	});
});



(function () {
	'use strict';
	// ------------------------------------------------------- //
	// Calendar
	// ------------------------------------------------------ //
	jQuery(function () {
		// page is ready
		jQuery('#calendar').fullCalendar({
			themeSystem: 'bootstrap4',
			// emphasizes business hours
			businessHours: false,
			defaultView: 'month',
			validRange: {
				start: '2022-05-01'
			},
			// event dragging & resizing
			editable: true,
			// header
			header: {
				left: 'title',
				center: 'month,agendaWeek,agendaDay',
				right: 'today prev,next'
			},
			events: function(start, end, timezone, callback) {
				retrieveGoals().then((result) => {
					callback(result);
					return result;
				}).catch(error => {
					// Handle/report error
				});
			},
			eventRender: function (event, element) {
				if (event.icon) {
					element.find(".fc-title").prepend("<i class='fa fa-" + event.icon + "'></i>");
				}
			},
			dayClick: function () {
				jQuery('#modal-view-event-add').modal();
			},
			eventClick: function (event, jsEvent, view) {
				jQuery('.event-icon').html("<i class='fa fa-" + event.icon + "'></i>");
				jQuery('.event-title').html(event.title);
				jQuery('.event-body').html(event.description);
				jQuery('.eventUrl').attr('href', event.url);
				jQuery('#modal-view-event').modal();
			},
		})
	});

})(jQuery);


async function saveNewTask() {
	var values = {};
	$.each($('#add-event').serializeArray(), function (i, field) {
		values[field.name] = field.value;
	});
	const tasks = new Parse.Object("Task");
	tasks.set("ecolor", values['ecolor']);
	if(values['edate'].indexOf(' - ')>-1){
		var startdate = values['edate'].split(' - ');
		tasks.set("edate", new Date(startdate[0]).toISOString());
		tasks.set("eedate", new Date(startdate[1]).toISOString());
	}else{
		tasks.set("edate", new Date(values['edate']).toISOString());
		tasks.set("eedate", new Date(values['edate']).toISOString());
	}
	tasks.set("edesc", values['edesc']);
	tasks.set("eicon", values['eicon']);
	tasks.set("ename", values['ename']);
	var user = Parse.User.current();
	tasks.set("userId", user.id);
   	tasks.setACL(new Parse.ACL(user));
	try {
		let result = await tasks.save();
		jQuery('#modal-view-event-add').modal('toggle');
	} catch (error) {

	}

}