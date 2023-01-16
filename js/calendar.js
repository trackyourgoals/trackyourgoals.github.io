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
			events: [
				{
					title: 'Mommy + Baby class',
					description: 'Mommy + Baby class 9:30 am-10:30 am at Mama Be Studio, Laguna Beach',
					start: '2022-12-03T09:30:00',
					end: '2022-12-03T10:30:00',
					className: 'fc-bg-default',
					icon: "circle"
				},
				{
					title: 'Mommy + Toddler class',
					description: 'Mommy + Toddler class 10:30 am-11:30 am at Mama Be Studio, Laguna Beach',
					start: '2022-12-03T10:30:00',
					end: '2022-12-03T11:30:00',
					className: 'fc-bg-default',
					icon: "circle"
				},
				{
					title: 'Mommy + Baby class',
					description: 'Pretzel Kids® Yoga 1:00 pm-01:45 pm at Sitter Stream',
					start: '2022-12-03T13:30:00',
					end: '2022-12-03T13:45:00',
					className: 'fc-bg-default',
					icon: "circle"
				},

				{
					title: 'Flight Paris',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-08T14:00:00',
					end: '2022-12-08T20:00:00',
					className: 'fc-bg-deepskyblue',
					icon: "cog",
					allDay: false
				},
				{
					title: 'Team Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-10T13:00:00',
					end: '2022-12-10T16:00:00',
					className: 'fc-bg-pinkred',
					icon: "group",
					allDay: false
				},
				{
					title: 'Meeting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-12',
					className: 'fc-bg-lightgreen',
					icon: "suitcase"
				},
				{
					title: 'Conference',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-13',
					end: '2022-12-15',
					className: 'fc-bg-blue',
					icon: "calendar"
				},
				{
					title: 'Baby Shower',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-13',
					end: '2022-12-14',
					className: 'fc-bg-default',
					icon: "child"
				},
				{
					title: 'Birthday',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-13',
					end: '2022-12-14',
					className: 'fc-bg-default',
					icon: "birthday-cake"
				},
				{
					title: 'Restaurant',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-15T09:30:00',
					end: '2022-12-15T11:45:00',
					className: 'fc-bg-default',
					icon: "glass",
					allDay: false
				},
				{
					title: 'Dinner',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-15T20:00:00',
					end: '2022-12-15T22:30:00',
					className: 'fc-bg-default',
					icon: "cutlery",
					allDay: false
				},
				{
					title: 'Shooting',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-25',
					end: '2022-12-25',
					className: 'fc-bg-blue',
					icon: "camera"
				},
				{
					title: 'Go Space :)',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-27',
					end: '2022-12-27',
					className: 'fc-bg-default',
					icon: "rocket"
				},
				{
					title: 'Dentist',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.',
					start: '2022-12-29T11:30:00',
					end: '2022-12-29T012:30:00',
					className: 'fc-bg-blue',
					icon: "medkit",
					allDay: false
				}
			],
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

		console.log(values);
		const tasks = new Parse.Object("Task");
		tasks.set("ecolor", values['ecolor']);
		tasks.set("edate", values['edate']);
		tasks.set("edesc", values['edesc']);
		tasks.set("eicon", values['eicon']);
		tasks.set("ename", values['ename']);
		try {
			let result = await tasks.save();
			jQuery('#modal-view-event-add').modal('toggle');
		}catch (error) {
			
		}

}