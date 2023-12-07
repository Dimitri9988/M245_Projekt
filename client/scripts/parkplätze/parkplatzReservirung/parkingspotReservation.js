const parkResArray = []
const loadparks = () => {
    const selectedPark = document.getElementById('reservation-details')
    if (document.getElementById('park').value === 'park1Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark1.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 1 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park2Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark2.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 2 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park3Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark3.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 3 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park4Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark4.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 4 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park5Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark5.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 5 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park6Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark6.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 6 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park7Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark7.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 1 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park8Left') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/leftpark8.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 8 Links</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park1front') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/frontpark1.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 1 Vorne</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park2front') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/frontpark2.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 2 Vorne</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    else if (document.getElementById('park').value === 'park3front') {
        const parkElement = 
            `
            <div>
                <img src="../../../images/frontpark3.png" alt="Raumbild" style="max-width: 100%; height: auto; margin: 20px 0;" />
            </div>
            <div class="text-left">
                <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 3 Vorne</h2>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                <ul class="list-disc pl-5 text-gray-600">
                    <li>10 - 12 Uhr</li>
            </div>
            `
        selectedPark.innerHTML = parkElement;
    }
    
}
const postParkReserwation = async () => {
    const parkspot = document.getElementById('park').value
    const date = document.getElementById('date').value
    const timefrom = document.getElementById('time-from').value
    const timeto = document.getElementById('time-to').value
    const resPark = {
        parkspot: parkspot,
        date: date,
        timefrom: timefrom,
        timeto: timeto
    }
    await fetch("/api/parkingspotReservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resPark),
      });
}

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById('park').addEventListener('click', function () {
        loadparks()
    });

    document.getElementById('submit-button').addEventListener('click', function () {
        
        postParkReserwation()
        //window.location.href = '../../index.html';

    });
})
