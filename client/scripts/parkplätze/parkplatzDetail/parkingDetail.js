const loadPage = () => {
    
    const parkingWindow = document.getElementById('parkingWindow');
    if (document.getElementById("parking").value === "parkingSpotLeft") {
        const parkingElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="../../../images/allparkleft.png" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>
            `;
            parkingWindow.innerHTML = parkingElement;
    }
    else if (document.getElementById("parking").value === "parkingSpotFront") {
        const parkingElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="../../../images/allfrontparks.png" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>`;
            parkingWindow.innerHTML = parkingElement;
    }
}
const loadParkingSpots = () => {
    const parkingspotWindow = document.getElementById('parkingspots');
    if (document.getElementById("parking").value === "parkingSpotFront") {
        
        const parkingspotsElement =
            `
            <div class="flex flex-row space-x-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/frontpark1.png" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 1 Vorne</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/frontpark2.png" alt="Parkplatz 2" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 2 Vorne</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row space-x-4 mt-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/frontpark3.png" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 3 Vorne</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `;
            parkingspotWindow.innerHTML = parkingspotsElement;
    }
    else if (document.getElementById("parking").value === "parkingSpotLeft") {
        
        const parkingspotsElement =
            `
            <div class="flex flex-row space-x-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/leftpark1.png" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 1 Links</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/leftpark2.png" alt="Parkplatz 2" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 2 Links</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row space-x-4 mt-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/leftpark3.png" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 3 Links</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                <div class="m-2">
                    <img src="../../../images/leftpark4.png" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                    <div class="p-4">
                        <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 4 Links</h2>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                        <ul class="list-disc pl-5 text-gray-600">
                            <li>8 - 12 Uhr</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div class="flex flex-row space-x-4 mt-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/leftpark5.png" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 5 Links</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/leftpark6.png" alt="Parkplatz 6" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 6 Links</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row space-x-4 mt-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/leftpark7.png" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 7 Links</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="../../../images/leftpark8.png" alt="Parkplatz 2" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Parkplatz 8 Links</h2>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            `;
            parkingspotWindow.innerHTML = parkingspotsElement;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const datepicker = document.getElementById('datepicker');
    const prevDayBtn = document.getElementById('prevDayBtn');
    const nextDayBtn = document.getElementById('nextDayBtn');
    document.getElementById('parking').addEventListener('click', function () {
        loadPage()
        loadParkingSpots()
    });
    function updateDate(offset) {
        const currentDate = new Date(datepicker.value);
        currentDate.setDate(currentDate.getDate() + offset);
        datepicker.valueAsDate = currentDate;
    }
    
    // Aktuelles Datum als Standardwert
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    datepicker.value = formattedDate;
    
    // Funktion zum Aktualisieren des Datums um einen Tag
    function updateDate(offset) {
        const currentDate = new Date(datepicker.value);
        currentDate.setDate(currentDate.getDate() + offset);
        datepicker.valueAsDate = currentDate;
    }

    // Event-Listener für die Schaltflächen
    prevDayBtn.addEventListener('click', function () {
        updateDate(-1);
    });
    
    nextDayBtn.addEventListener('click', function () {
        updateDate(1);
    });
})