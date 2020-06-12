    $("#currentDay").text(moment().format("dddd, MMMM Do"));

        // create a row div
        var row = $('<div>');

        // create a column div
        var col1 = $('<div>'+'</p>');

        //create column 2 div
        var col2 = $(`<div><text id=text class="description" placeholder="Add your event here..."></textarea>`);

        //create column 3 div
        var col3 = $(`<div><button class="saveBtn"><i class="far fa-save"></i></button>`)

        // append col to row
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // last step add rows to container
        $(".container").append(row);

