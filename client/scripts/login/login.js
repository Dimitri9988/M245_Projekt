// login.js
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
  } else {
    console.log("Erfolgreich mit dem LDAP-Server verbunden");
  }

  // Schließe die Verbindung, wenn die Überprüfung abgeschlossen ist
  ldapClient.unbind();
});
