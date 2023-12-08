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
    const room = document.getElementById('room').value;
    const date = document.getElementById('date').value;
    const timefrom = document.getElementById('time-from').value;
    const timeto = document.getElementById('time-to').value;
    const resRoom = {
        room: room,
        date: date,
        timefrom: timefrom,
        timeto: timeto
    };
    fetch('/api/getReservations')
    .then(response => response.json())
    .then(data => {
        roomData = data;
        console.log(roomData)

        const selectRooms = () => {
            const selectedDate = document.getElementById('date').value;
            const selectedRoom = document.getElementById('room').value;    
            // Filtere Objekte, deren Datum dem ausgewählten Datum entspricht
            const filteredRooms = roomData.filter(room => room.date === selectedDate && room.room === selectedRoom);
            return (filteredRooms)
        };

        const selectedRooms = selectRooms()

        const Number = {
            num1: document.getElementById('time-from').value, 
            num2: document.getElementById('time-to').value
        };
        const Number2 = {
            num1: 23, 
            num2: 23
        };

        function areIntervalsOverlapping(interval1, interval2) {
            return interval1.num1 < interval2.num2 && interval1.num2 > interval2.num1;
        }

        if (areIntervalsOverlapping(Number, Number2)) {
            Swal.fire({
                icon: 'error',
                title: 'Fehler!',
                text: 'Das ausgewählte Zeitfenster ist bereits belegt.',
            });
        } else {
              // Sie müssen diese Funktion entsprechend implementieren.

            Swal.fire({
                icon: 'success',
                title: 'Erfolg!',
                text: 'Die Reservierung wurde erfolgreich durchgeführt.',
            });
        }
    });



        await fetch("/api/roomReservation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(resRoom),
    })


};

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById('room').addEventListener('click', function () {
        loadRooms()
    });

    document.getElementById('submit-button').addEventListener('click', function () {
        
        postRoomReserwation()
        window.location.href = '/';

    });
})
