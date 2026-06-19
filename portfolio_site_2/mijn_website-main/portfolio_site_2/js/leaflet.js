var map = L.map('map').setView([51.2467, 4.4481], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.2467, 4.4481]).addTo(map)
    .bindPopup('Merksem, Antwerpen')
    .openPopup();