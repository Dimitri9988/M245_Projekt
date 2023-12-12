const ldap = require("ldapjs");

// LDAP-Konfiguration
const ldapClient = ldap.createClient({
  url: "ldap://localhost:389", // Docker-Container-Adresse
});

// Benutzerdaten für die Bindung
const username = "cn=admin,dc=example,dc=com";  // Dein LDAP-Admin-Benutzername
const password = "adminpassword";  // Dein LDAP-Admin-Passwort

// Versuche, eine Verbindung herzustellen und binde dich zum Testen
ldapClient.bind(username, password, (err) => {
  if (err) {
    console.error("Fehler beim Verbinden mit dem LDAP-Server:", err);
    ldapClient.unbind();
  } else {
    console.log("Erfolgreich mit dem LDAP-Server verbunden");

    // Definiere die LDAP-Suchparameter
    const searchBase = "dc=example,dc=com";

    // Der LDAP-Filter, um einen vorhandenen Benutzer zu suchen
    const existingUserFilter = "(uid=testuser)";

    // Der LDAP-Filter, um einen nicht vorhandenen Benutzer zu suchen
    const nonExistingUserFilter = "(uid=nonexistentuser)";

    // Der LDAP-Filter, um einen Fehler zu simulieren (ungültiger Filter)
    const invalidFilter = "invalidfilter=*"; // Hinzugefügt: Ein gültiger Filterausdruck, um den Fehler zu vermeiden


    // Funktion zum Ausführen der LDAP-Suche
    const performSearch = (filter) => {
      ldapClient.search(searchBase, {
        scope: "sub", // Der Suchbereich (sub für den gesamten Unterbaum)
        filter: filter,
      }, (err, res) => {
        if (err) {
          console.error("Fehler bei der LDAP-Suche:", err);
          ldapClient.unbind();
        } else {
          // Verarbeite die gefundenen Einträge
          res.on("searchEntry", (entry) => {
            console.log("Benutzer gefunden:", entry.object);
          });

          // Wenn die Suche abgeschlossen ist, schließe die Verbindung
          res.on("end", () => {
            console.log("Suche abgeschlossen");
            ldapClient.unbind();
          });
        }
      });
    };

    // Teste mit einem vorhandenen Benutzer
    console.log("Test mit vorhandenem Benutzer:");
    performSearch(existingUserFilter);

    // Warte 2 Sekunden, um die vorherige Suche abzuschließen, bevor du mit der nächsten fortfährst
    setTimeout(() => {
      // Teste mit einem nicht vorhandenen Benutzer
      console.log("Test mit nicht vorhandenem Benutzer:");
      performSearch(nonExistingUserFilter);

      // Warte 2 Sekunden, um die vorherige Suche abzuschließen, bevor du mit der nächsten fortfährst
      setTimeout(() => {
        // Teste mit einem ungültigen Filter (Fehler)
        console.log("Test mit ungültigem Filter (Fehler):");
        performSearch(invalidFilter);
      }, 2000);
    }, 2000);
  }
});
