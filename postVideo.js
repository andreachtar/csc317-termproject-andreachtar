window.onload = function() {
    var form = document.getElementById("postVideoForm");

    form.onsubmit = function(e) {
        e.preventDefault();
        validateVideoForm();
    }
}

function validateVideoForm() {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var video = document.getElementById("video").value;

    if (title === "" || description === "" || video === "") {
        alert("All fields are required.");
        return false;
    }

    alert("Video posted successfully!");
    return true;
}
