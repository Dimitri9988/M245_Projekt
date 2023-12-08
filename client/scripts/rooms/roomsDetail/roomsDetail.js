

const loadPage = () => {
    
    const roomsWindow = document.getElementById('roomsWindow');
    if (document.getElementById("flors").value === "groundFloor") {
        
        const chatBoxElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="https://www.ausbildung-weiterbildung.ch/Portrait/Picture?schoolID=494&file=Geb%C3%A4ude%2004.16.jpg" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>
            `;
        roomsWindow.innerHTML = chatBoxElement;
    }
    else if (document.getElementById("flors").value === "firstFloor") {
        const chatBoxElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="https://www.ausbildung-weiterbildung.ch/Portrait/Picture?schoolID=494&file=Geb%C3%A4ude%2004.16.jpg" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>`;
        roomsWindow.innerHTML = chatBoxElement;
    }
    else if (document.getElementById("flors").value === "secondFloor") {
        const chatBoxElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="https://www.ausbildung-weiterbildung.ch/Portrait/Picture?schoolID=494&file=Geb%C3%A4ude%2004.16.jpg" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>`;
        roomsWindow.innerHTML = chatBoxElement;
    }
}



let roomData;
const loadRooms = () => {
    const roomsWindow = document.getElementById('rooms');
    fetch('/api/getReservations')
        .then(response => response.json())
        .then(data => {
            roomData = data;
            selectRooms();
            // Hier sollte selectRooms aufgerufen werden
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Reservierungen:', error);
            // Hier können Sie auf einen Fehler reagieren und die Benutzeroberfläche aktualisieren
        });
        
        

    const selectRooms = () => {
        const selectedDate = document.getElementById('datepicker').value;
            
        // Filtere Objekte, deren Datum dem ausgewählten Datum entspricht
        const filteredRooms = roomData.filter(room => room.date === selectedDate);
;
        return (filteredRooms)
    };



    const Rooms = selectRooms()   
    
    const splitRooms = (filterBy) => {
        const filteredRooms = Rooms.filter(room => room.room === filterBy);

        return filteredRooms
    }
    const reservationSmaragd = splitRooms("smaragd")
    const reservationRubin = splitRooms("rubin")
    const reservationHarvard = splitRooms("harvard")
    const reservationCambridge = splitRooms("cambridge")
    const reservationBoston = splitRooms("boston")
    const reservationEiger = splitRooms("eiger")
    const reservationSorbone = splitRooms("sorbonne")
    const reservationBlueemlisalp = splitRooms("blueemlisalp")

    
    for (let i = 0; i < reservationRubin.length; i++) {
        const elementfromtime = reservationRubin[i].fromtime;
        const elementtotime = reservationRubin[i].totime;
        const newListElement= `<li>${reservationRubin[i].fromtime} - ${reservationRubin[i].totime} Uhr</li>`
    }


    const createReservationList = (reservationArray) => {
        let listItems = '';

        for (let i = 0; i < reservationArray.length; i++) {
            const elementFromTime = reservationArray[i].fromtime;
            const elementToTime = reservationArray[i].totime;
            
            // Füge das erstellte <li> Element zur Zeichenkette hinzu
            listItems += `<li>${elementFromTime} - ${elementToTime} Uhr</li>`;
        }
        return listItems
    }

    const reservationRubinList = createReservationList(reservationRubin);
    const reservationHarvardList = createReservationList(reservationHarvard);
    const reservationSmaragdList = createReservationList(reservationSmaragd);
    const reservationCambridgeList = createReservationList(reservationCambridge);
    const reservationBostonList = createReservationList(reservationBoston);
    const reservationEigerList = createReservationList(reservationEiger);
    const reservationSorboneList = createReservationList(reservationSorbone);
    const reservationBlueemlisalpList = createReservationList(reservationBlueemlisalp);




    if (document.getElementById("flors").value === "groundFloor") {
        
        const chatBoxElement =
            `
            <div class="flex flex-row space-x-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/Rubin_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Rubin (EG) (Informatikraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Rubin</h2>
                            <p class="text-gray-600 mb-2">30 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservirungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationRubinList}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/Smaragd_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Smaragd (EG) (Seminarraum) max. 30 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Smaragd</h2>
                            <p class="text-gray-600 mb-2">30 Plätze ohne Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationSmaragdList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `;
        roomsWindow.innerHTML = chatBoxElement;
    }
    else if (document.getElementById("flors").value === "firstFloor") {
        const chatBoxElement =
            `

            <div class="flex flex-row space-x-4">

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/Sorbonne_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Sorbonne (1. OG) (Informatikraum) max. 15 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Sorbonne</h2>
                            <p class="text-gray-600 mb-2">15 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationSorboneList}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/Harvard_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Harvard (1. OG) (Informatikraum) max 23 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Harvard</h2>
                            <p class="text-gray-600 mb-2">23 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationHarvardList}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex flex-row space-x-4 mt-4">

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/Cambridge_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Cambridge (1.OG)
                        (Informatikraum) max. 17 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Cambridge</h2>
                            <p class="text-gray-600 mb-2">17 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationCambridgeList}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/Boston_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Boston (1. OG) (Informatikraum) max. 17 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Boston</h2>
                            <p class="text-gray-600 mb-2">17 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationBostonList}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
            
            `;
        roomsWindow.innerHTML = chatBoxElement;
    }
    else if (document.getElementById("flors").value === "secondFloor") {
        const chatBoxElement =
            `
            
            <div class="flex flex-row space-x-4">

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/Uploads/Blueemlisalp-klein__ResizedImageWzM0MCwyMjZd.jpg" alt="Blüemlisalp (2. OG) (Seminarraum) max. 20 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Blüemlisalp</h2>
                            <p class="text-gray-600 mb-2">20 Plätze ohne Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationBlueemlisalpList}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://csbe.ch/assets/EIger_2022_10_03__ResizedImageWzM0MCwyMjdd.JPG" alt="Eiger (2.OG)  (Informatikraum) max. 20 Plätze" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Eiger</h2>
                            <p class="text-gray-600 mb-2">20 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                ${reservationEigerList}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            `;
        roomsWindow.innerHTML = chatBoxElement;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const datepicker = document.getElementById('datepicker');
    const prevDayBtn = document.getElementById('prevDayBtn');
    const nextDayBtn = document.getElementById('nextDayBtn');
    document.getElementById('flors').addEventListener('click', function () {
        loadPage()
        loadRooms()
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
});