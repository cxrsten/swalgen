// SWEETALERT GENERATOR BY CARSTEN STEPHAN // 

$(document).ready(function() {
    $(".code-result").hide();
    $("#hide-1").hide();
    $("#hide-2").hide();
});


// HIDE AND SHOW BUTTON OPTIONS

function showCancelButtonCheckbox() {
    var cancelButtonCheckbox = document.getElementById("showCancelButton").checked;

    if (cancelButtonCheckbox == true) {
        $("#hide-1").slideDown();
    } else {
        $("#hide-1").slideUp();
    }
}

function showConfirmButtonCheckbox() {
    var confirmButtonCheckbox = document.getElementById("showConfirmButton").checked;

    if (confirmButtonCheckbox == true) {
        $("#hide-2").slideDown();
    } else {
        $("#hide-2").slideUp();
    }
}



function fire() {
    // ICON (DONE)
    var icon = document.getElementById("iconselect").value;
    if (icon == "none") {
        icon = "";
    }

    //title
    var title = document.getElementById("title").value;

    // TEXT 1
    var text = document.getElementById("text").value;

    // footer
    var footer = document.getElementById("footer").value;


    // Show Cancel button
    var showCancelButton = document.getElementById("showCancelButton").checked;
    var cancelButtonText = document.getElementById("cancelButtonText").value;
    if (cancelButtonText == "") {
        cancelButtonText = "Cancel";
    }
    // Show Confirm Button
    var showConfirmButton = document.getElementById("showConfirmButton").checked;
    var confirmButtonText = document.getElementById("confirmButtonText").value;
    if (confirmButtonText == "") {
        confirmButtonText = "OK";
    }

    // Show Close Button
    var showCloseButton = document.getElementById("showCloseButton").checked;


    // Fire
    Swal.fire({
        icon: icon,
        title: title,
        html: text,
        footer: footer,
        showConfirmButton: showConfirmButton,
        confirmButtonText: confirmButtonText,
        showCancelButton: showCancelButton,
        cancelButtonText: cancelButtonText,
        showCloseButton: showCloseButton
    })

    // REPLACE TAGS
    title = title.replace(/</g, "&#60;");
    title = title.replace(/>/g, "&#62;");


    text = text.replace(/</g, "&#60;");
    text = text.replace(/>/g, "&#62;");

    footer = footer.replace(/</g, "&#60;");
    footer = footer.replace(/>/g, "&#62");


    // FINAL OUTPUT
    //var output = "Swal.fire({ \nicon: '" + icon + "',\ntitle: '" + title + "',\nhmtl: '" + text + "',\nfooter: '" + footer + "',\nshowCancelButton: " + showCancelButton + "'\n})";
    // console.log(output);


    var output = "Swal.fire({ \n";
    console.log("Icon: " + icon);

    // ICON
    if (icon != "") {
        output = output + "icon: '" + icon + "'";
        var comma = true;
    }

    // TITLE
    if (title != "" && comma == true) {
        output = output + ",\ntitle: '" + title + "'";
    } else if (title != "") {
        output = output + "\ntitle: '" + title + "'";
        var comma = true;
    }

    // HTML 
    if (text != "" && comma == true) {
        output = output + ",\nhtml: '" + text + "'";
    } else if (text != "") {
        output = output + "\nhtml: '" + text + "'";
        var comma = true;
    }

    // FOOTER 
    if (footer != "" && comma == true) {
        output = output + ",\nfooter: '" + footer + "'";
    } else if (footer != "") {
        output = output + "\nfooter: '" + footer + "'";
        var comma = true;
    }
    // SHOW CONFIRM BUTTON 
    if (showConfirmButton != "" && comma == true) {
        output = output + ",\nshowConfirmButton: '" + showConfirmButton + "'";
    } else if (showConfirmButton != "") {
        output = output + "\nshowConfirmButton: '" + showConfirmButton + "'";
        var comma = true;
    }

    // CONFIRM BUTTON TEXT 
    if (confirmButtonText != "" && showConfirmButton != "") {
        output = output + ",\nconfirmButtonText: '" + confirmButtonText + "'";
    }
    // SHOW CANCEL BUTTON 
    if (showCancelButton != "" && comma == true) {
        output = output + ",\nshowCancelButton: '" + showCancelButton + "'";
    } else if (showCancelButton != "") {
        output = output + "\nshowCancelButton: '" + showCancelButton + "'";
        var comma = true;
    }

    // CANCEL BUTTON TEXT
    if (cancelButtonText != "" && showCancelButton != "" && comma == true) {
        output = output + ",\ncancelButtonText: '" + cancelButtonText + "'";
    }

    // SHOW CLOSE BUTTON 
    if (showCloseButton != "" && comma == true) {
        output = output + ",\nshowCloseButton: '" + showCloseButton + "'";
    } else if (showCloseButton != "") {
        output = output + "\nshowCloseButton: '" + showCloseButton + "'";
        var comma = true;
    }

    var output = output + "})";
    console.log(output);


    document.getElementById("codeblock").innerHTML = output;
    $(".code-result").show();

}



// Infos

function infoIcon() {
    swal.fire({
        icon: 'info',
        text: 'The thing up there is the icon.',
        footer: '<a href="https://sweetalert2.github.io/#icons" target="_blank">All icons</a>'
    })
}

function infoTitle() {
    Swal.fire({
        title: 'THIS is the title',
        text: 'You can use HTML-Markdown here.'
    })
}

function infoText() {
    Swal.fire({
        html: 'THIS is the text. You <b>can</b> use HTML-Markdown here.'
    })
}

function infoFooter() {
    Swal.fire({
        text: 'You CAN USE HTML-MARKDOWN there.',
        footer: 'Look at me! <b> I am a footer!</b>'
    })
}

function infoConfirm() {
    Swal.fire({
        confirmButtonText: 'IM THE CONFRIM BUTTON!'
    })
}

function infoCancel() {
    Swal.fire({
        cancelButtonText: 'AND IM THE CANCEL BUTTON!',
        showCancelButton: true
    })
}

function infoClose() {
    swal.fire({
        showCloseButton: true,
        text: 'Do you see the small x up there? Thats the Close button!'
    })
}