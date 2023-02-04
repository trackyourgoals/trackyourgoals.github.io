function getCurrentDate() {
    var date = new Date();
    var n = date.toDateString();
    var time = date.toLocaleTimeString();
    document.getElementById('time').innerHTML = n;
    fetchCurrentTasks();
}

async function fetchCurrentTasks() {
    const Task = Parse.Object.extend("Task");
    const query = new Parse.Query(Task);
    query.equalTo("estatus", "Not Started");
    query.ascending("eedate");
    const results = await query.find();
    console.log("Successfully retrieved " + results.length + " scores.");
    const container = document.getElementById('currentTaskRow');
    // Do something with the returned Parse.Object values
    for (let i = 0; i < results.length; i++) {
        const object = results[i];
        const content = '<div class="col-md-4">' +
                            '<div class="card ' + object.get('ecolor') +'" style="width: 100%;height: auto;">' +
                                '<div class="card-body">' +
                                    '<h5 class="card-title text-left">'
                                        + object.get('ename') +
                                    '</h5>' +
                                    '<div class="row">' +
                                        '<div class="col-md-12 text-left">' +
                                            '<p class="card-text">'
                                                + object.get('edesc') +
                                            '</p>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="row">' +
                                        '<div class="col-md-12 text-left">' +
                                            '<p class="card-text">'
                                                + object.get('eedate') +
                                            '</p>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
        container.innerHTML += content;
    }
}