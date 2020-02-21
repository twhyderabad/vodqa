function openNav(editionURL) {
    const accessControl = "Access-Control-Allow-Origin";
    $.ajax({
        url: editionURL,
        headers : {accessControl: "*"}       
        }).done(function(data) {
            $('.temp-div').html(data);
        }).done(function() {
            var d = document.getElementsByClassName('temp-div');
            var f = d[0].querySelector("#agenda");
            document.getElementsByClassName("overlay-content")[0].innerHTML = f.innerHTML;
            document.getElementById("myNav").style.display = "block";
        });

    // $('.temp-div').load(editionURL, function() {
    //     var d = document.getElementsByClassName('temp-div');
    //     var f = d[0].querySelector("#agenda");
    //     document.getElementsByClassName("overlay-content")[0].innerHTML = f.innerHTML;
    //     document.getElementById("myNav").style.display = "block";
    // });
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

