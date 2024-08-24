

$.ajax({
    url: "test/test",
    type: 'GET',
    beforeSend: function () {
        $('<Div where the response is being displayed>').html("Loading");
    }
})
.done(function (result) {
    $('div result').html(result);
})
.fail(function (result) {
    console.log('The request failed and returned the following message: ' + result);
})