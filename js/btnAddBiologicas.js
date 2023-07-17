const organismsPresent = document.getElementById("organismsPresent").value;
const numOrganisms = document.getElementById("numOrganisms").value;
const btnAddOrganisms = document.getElementById("btnAddOrganisms");
const txtOrganisms = document.getElementById("txtOrganisms");


btnAddOrganisms.addEventListener("click", () => {
    if(organismsPresent != "" && numOrganisms>0){
        let txt = txtOrganisms.value;
        txtOrganisms.innerHTML = organismsPresent + " " + numOrganisms + txt; 
    }
 });