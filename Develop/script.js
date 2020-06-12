    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {

        // create a row div
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        // create a column div
        var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatTime(i) + '</p>');

        //create column 2 div
        var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Add your event here..."></textarea>`);

        //create column 3 div
        var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="far fa-save"></i></button>`)

        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // last step add rows to container
        $(".container").append(row);
        
    }


    function formatTime(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatTime();

    function updateColors() {
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            console.log(currentTime, $(`#${i}`).data("time"));
            if ($(`#${i}`).data("time") == currentTime) {
                $(`#text${i}`).addClass("present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass("future");
            }
        }
    }
