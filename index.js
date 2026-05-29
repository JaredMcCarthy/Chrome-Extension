let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el"); //llamamos al input de hmtl
const inputBtn = document.getElementById("input-btn"); // llamando al boton de HTML
const ulEl = document.getElementById("ul-el ");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads")); //tomamos los datos de myleads dentro de localstorage
const deletenBtn = document.getElementById("delete-btn");
const tabbtn = document.getElementById("tab-btn");

//if revisa si leads.. es tru o falsy para guardar en localstorage y correr la otra funcion
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function () {
    console.log(tabs);

    //este de aqui abajo es para guardar al momento de press el boton
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

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

//boton que aceta solo doble clicks con dblclick - es nueva esta
deletenBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
}); //VACIA LA LISTA AL HACER DOBLE CLICK AL BOTON DE DELETE

//funcion de llamar al presionar
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); // con el .value tenermos el dato del input
  inputEl.value = ""; //limpia el input al dar click
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //al hacer click los guarda los array en el local storage

  render(myLeads); //llamamos la funcion al hacer click
  console.log(localStorage.getItem("myLeads"));
});
