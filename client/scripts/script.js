const loadPage = () => {
    const roomsWindow = document.getElementById('roomsWindow');
    if (document.getElementById("flors").value === "groundFloor") {
        
        const chatBoxElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="https://static.pixelbar.be/wp-content/uploads/2014/09/blog-pixelbar-foto-platzhalter.jpg" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>
            `;
        roomsWindow.innerHTML = chatBoxElement;
    }
    else if (document.getElementById("flors").value === "firstFloor") {
        const chatBoxElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>`;
        roomsWindow.innerHTML = chatBoxElement;
    }
    else if (document.getElementById("flors").value === "secondFloor") {
        const chatBoxElement =
            `<div class="max-w-md mx-auto">
            <div class="mt-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ50jwUKbA2F3FFco26GF6hap61-MXv0ZoWHg&usqp=CAU" alt="Floor Image" class="w-full h-auto">
            </div>
            </div>`;
        roomsWindow.innerHTML = chatBoxElement;
    }
}

const loadRooms = () => {
    const roomsWindow = document.getElementById('rooms');
    if (document.getElementById("flors").value === "groundFloor") {
        
        const chatBoxElement =
            `
            <div class="flex flex-row space-x-4">
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://c8.alamy.com/compde/2a88xek/verlassenen-klassenzimmer-in-pripyat-high-school-sowjetzeit-lehrbucher-2a88xek.jpg" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Rubin</h2>
                            <p class="text-gray-600 mb-2">30 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://png.pngtree.com/thumb_back/fw800/background/20230425/pngtree-an-abandoned-schoolroom-filled-with-broken-pieces-of-furniture-image_2553777.jpg" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Smaragd</h2>
                            <p class="text-gray-600 mb-2">30 Plätze ohne Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>12 - 15 Uhr</li>
                                <li>15 - 17 Uhr</li>
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
                        <img src="data:image/jpeg;base64,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" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Sorbonne</h2>
                            <p class="text-gray-600 mb-2">15 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://pixelgranaten.de/wp-content/uploads/2022/08/20220814_dnlbbrg_ElectricBiscuitGun_Lost_Place_Abandoned_Place_Operating_Room_To_fcca1f4f-b0d0-4759-9876-48eadf92b586.jpg" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Harvard</h2>
                            <p class="text-gray-600 mb-2">23 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>12 - 15 Uhr</li>
                                <li>15 - 17 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex flex-row space-x-4">

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://image.stern.de/7825724/t/iC/v6/w1440/r1.7778/-/lost-places-s--100-101.jpg" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Cambridge</h2>
                            <p class="text-gray-600 mb-2">17 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f282f318511843.568293aa489fd.jpg" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Boston</h2>
                            <p class="text-gray-600 mb-2">17 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>12 - 15 Uhr</li>
                                <li>15 - 17 Uhr</li>
                                <li>08 - 12 Uhr</li>
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
                        <img src="https://c8.alamy.com/comp/PX0T27/interior-view-of-an-abandoned-cinema-in-italy-PX0T27.jpg" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Blüemlisalp</h2>
                            <p class="text-gray-600 mb-2">20 Plätze ohne Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>8 - 12 Uhr</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
                    <div class="m-2">
                        <img src="https://t3.ftcdn.net/jpg/05/71/08/50/360_F_571085051_q4GrQleMjd90mAwLpOLfy1nncNNcOKOP.jpg" alt="Floor Image" class="w-full h-auto rounded-t-lg">
                        <div class="p-4">
                            <h2 class="text-xl font-semibold text-gray-800 mb-2">Eiger</h2>
                            <p class="text-gray-600 mb-2">20 Plätze mit Computer</p>
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">Reservierungen</h3>
                            <ul class="list-disc pl-5 text-gray-600">
                                <li>12 - 15 Uhr</li>
                                <li>15 - 17 Uhr</li>
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