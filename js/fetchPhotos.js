document.addEventListener('DOMContentLoaded', function() {
    const photoContainer = document.getElementById("photoContainer");
    const photoCount = document.getElementById("photoCount");

    // Fetch photos from the API when the page loads
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
        .then(response => response.json())
        .then(data => {
            let html = '';

            // Create HTML for each photo
            data.forEach(photo => {
                html += `
                <div class="photo" onclick="removePhoto(this)">
                    <img src="${photo.url}" alt="${photo.title}" width="200px" height="200px">
                    <p>${photo.title}</p>
                </div>`;
            });

            // Update the photo container and photo count
            photoContainer.innerHTML = html;
            photoCount.textContent = `Total photos: ${data.length}`;
        })
        .catch(error => console.error('Error:', error));
});

function removePhoto(photoDiv) {
    // Fade out the photo and remove it from the DOM
    photoDiv.style.opacity = "0";
    setTimeout(() => {
        photoDiv.remove();
        updatePhotoCount();
    }, 1000);
}

function updatePhotoCount() {
    // Get the current count of photos and update the photo count text
    const count = document.querySelectorAll('.photo').length;
    document.getElementById("photoCount").textContent = `Total photos: ${count}`;
}
