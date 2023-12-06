const loadRooms = () => {
    const selectedRoom = document.getElementById('reservation-details')
    if (document.getElementById('room').value === 'smaragd') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/Smaragd_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Smaragd</h2>
                <p class="text-gray-600 mb-2">30 Plätze ohne Computer</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
    else if (document.getElementById('room').value === 'rubin') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/Rubin_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Rubin</h2>
                <p class="text-gray-600 mb-2">30 Plätze mit Computer</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('room').addEventListener('click', function () {
        loadRooms()
    });
})