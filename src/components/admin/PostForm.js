import { useEffect, useState } from "react";
export default function PostForm({ savePost, post }){ 

//denne side opretter variabler 
// De variable som er = produktattributter som kan ændres i.
//Svarer til fx var produktnavn = ""
//eller var pris = 0
const [produktnavn, setProduktnavn] = useState("");
const [beskrivelse, setBeskrivelse] = useState(""); 
const [pris, setPris] = useState(0);
const [varighed, setVarighed] = useState(0);
const [errorMessage, setErrorMessage] = useState("");


// Hvis der er tale om opdatering (post er ikke tom) 
//så sæt variable = eksisterende oplysninger. Hvis der er oplysninger i forvejen
// så skal man tage oplysningerne fra det eksisterende proukt
//hvis man opretter et nyt skal man skrive nye oplysninger. 

//ved opret sker der ingenting. variablen beholder de værdier der er ovenfor. så det forbliver tomme - alt er nul eller tomt.

useEffect(() => { 

    if (post) {
        setBeskrivelse(post.beskrivelse); 
        setProduktnavn(post.produktnavn); 
        setPris(post.pris); 
        setVarighed(post.varighed);
}

}, [post]);

//Funktion som håndterer "gem produkt" -> formular sendes (Submittes)
async function handleSubmit(e) { 
    e.preventDefault();
    //Der oprettes et objekt med de oplysninger som blev indtastet i formularen.

const formData = {
beskrivelse: beskrivelse, 
produktnavn: produktnavn, 
pris: parseFloat(pris), 
varighed: parseInt(varighed)
}
//Tjekker om alle felter er udfyld og hvis ikke det er så kommer den med en fejlmelding. 
const validForm = formData.beskrivelse && formData.produktnavn && formData.pris && formData.varighed;
if (validForm) { savePost(formData);
} else {
setErrorMessage("Udfyld venligst alle felter.");
} }

//formularfelter og submit 
//onChange registeres alle når brugeren trykker på en tast og opdaterer.
return (
<form onSubmit={handleSubmit}>
<label>

Produktnavn<input type="text" name="produktnavn" value={produktnavn}
placeholder="Indtast produktnavn" onChange={e => setProduktnavn(e.target.value)} /> </label>
<label>

Beskrivelse<input type="text" name="beskrivelse" value={beskrivelse} placeholder="Indtast
produktbeskrivelse" onChange={e => setBeskrivelse(e.target.value)} /> </label>
<label>

Pris<input type="text" name="pris" value={pris} placeholder="Indtast pris" onChange={e =>
setPris(e.target.value)} /> </label>
<label>

Varighed<input type="text" name="varighed" value={varighed} placeholder="Indtast
varighed" onChange={e => setVarighed(e.target.value)} /> </label>


<p className="tekst-fejl">{errorMessage}</p> <button type="submit">Gem produkt</button> </form>
); }