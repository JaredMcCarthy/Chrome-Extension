// Importamos Firebase para inicializar la app en el navegador.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref, //estos 3 son para enviar la data al firebase con push y ref
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-50632-default-rtdb.firebaseio.com/", // este link sale de Firebase Realtime Database
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads"); //que este se crear para psh info al firebase

//De aqui para abajo era inicial, lo de arriba viene de Firebase

const inputEl = document.getElementById("input-el"); //llamamos al input de hmtl
const inputBtn = document.getElementById("input-btn"); // llamando al boton de HTML
const ulEl = document.getElementById("ul-el ");
const deletenBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (i = 0; i < leads.length; i++) {
    //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  } // esto es lo mismo que la linea que esta // pero como template (muy complicado) (practicar)
  ulEl.innerHTML = listItems;
}

onValue(referenceInDB, function (snapshot) {
  const snapshotDoesExist = snapshot.exists();

  if (snapshotDoesExist) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
  }
});

//boton que acepta doble click con dblclick
deletenBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = " ";
});

//funcion de llamar al presionar
inputBtn.addEventListener("click", function () {
  push(referenceInDB, inputEl.value); // lo que hacemos aqui que al presional el botn piush los datos al direbase
  inputEl.value = ""; //limpia el input al dar click
});
