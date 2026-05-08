

let myLeads = [];
const inputEl = document.getElementById("input-el"); //llamamos al input de hmtl
const inputBtn = document.getElementById("input-btn"); // llamando al boton de HTML
const ulEl = document.getElementById("ul-el ");


//funcion de llamar al presionar
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); // con el .value tenermos el dato del input
  console.log(myLeads);
  inputEl.value = "";  //limpia el input al dar click
  renderLeads() //llamamos la funcion al hacer click
});


// la funcion sirve para mover los elementos en el input a una lista myLeads
// tambien el For pone el order de los elementos guardados con er innerHTML

function renderLeads() {
    let listItems = []
    for (i = 0; i < myLeads.length; i++) {
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    } // esto es lo mismo que la linea que esta // pero como template (muy complicado) (practicar)
    }
    ulEl.innerHTML = listItems
}
