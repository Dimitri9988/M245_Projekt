const roomResArray = []
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
    else if (document.getElementById('room').value === 'sorbonne') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/Sorbonne_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Sorbonne</h2>
                <p class="text-gray-600 mb-2">15 Plätze mit Computerr</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
    else if (document.getElementById('room').value === 'harvard') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/Harvard_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
                <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Harvard</h2>
                <p class="text-gray-600 mb-2">23 Plätze mit Computerr</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
    else if (document.getElementById('room').value === 'cambridge') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/Cambridge_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
                <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Harvard</h2>
                <p class="text-gray-600 mb-2">17 Plätze mit Computerr</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>8 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
    else if (document.getElementById('room').value === 'boston') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/Boston_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
                <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Boston</h2>
                <p class="text-gray-600 mb-2">17 Plätze mit Computerr</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>8 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
    else if (document.getElementById('room').value === 'blueemlisalp') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/Uploads/Blueemlisalp-klein__ResizedImageWzM0MCwyMjZd.jpg" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
                <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Blueemlisalp</h2>
                <p class="text-gray-600 mb-2">20 Plätze ohne Computer</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>8 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
    else if (document.getElementById('room').value === 'eiger') {
        const roomElement = 
            `
            <div>
                <img src="https://csbe.ch/assets/EIger_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
                <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Eiger</h2>
                <p class="text-gray-600 mb-2">20 Plätze mit Computer</p>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>8 - 12 Uhr</li>
            </div>
            `
        selectedRoom.innerHTML = roomElement;
    }
}
const postRoomReserwation = async () => {
    const room = document.getElementById('room').value
    const date = document.getElementById('date').value
    const timefrom = document.getElementById('time-from').value
    const timeto = document.getElementById('time-to').value
    const resRoom = {
        room: room,
        date: date,
        timefrom: timefrom,
        timeto: timeto
    }
    await fetch("/api/roomReservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resRoom),
      });
}

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById('room').addEventListener('click', function () {
        loadRooms()
    });

    document.getElementById('submit-button').addEventListener('click', function () {
        
        postRoomReserwation()
        //window.location.href = '../../index.html';

    });
})
