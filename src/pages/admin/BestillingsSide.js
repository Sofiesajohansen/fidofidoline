import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bestillingskort from "../../components/admin/Bestillingskort";


export default function BestillingsSide() {
// "posts" kommer til at indeholde alle produkter i en liste (array) 
const [posts, setPosts] = useState([]);
// "isPosts" kan være true eller false. hvis der ingen produkter eksisteret så er isPosts false

const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false 
const navigate = useNavigate();

// Funktion (hook) som henter produkter fra firebase database. 
useEffect(() => {
async function getPosts() {

const url = "https://fidofidoline-af804-default-rtdb.europe-west1.firebasedatabase.app/bestillinger.json"; 
const response = await fetch(url);
// data indeholder al indhold fra produkter database
const data = await response.json();

// Er der produkter? 
if (data !== null) {

    const postsArray = Object.keys(data).map((key) => ({ id: key,
    ...data[key],
    }));

    //variablen "posts" bliver lig med listen af produkter
setPosts(postsArray); } else {

    // sætter variablen isPosts til false, for der er ingen produkter
setIsPosts(false); }
}

getPosts(); }, []);



function oversigtklik() { 
    navigate("/bestillingsside");
}
return ( <main>
<h1>Bestillingsoversigt

</h1> 

{isPosts ? (
// hvis isposts er false så udfører den hvad der står efter den sidste parrantes )

//Hvis isposts er true så udføres det der står efter den første parrantes (
<div className="kortraekke"> 
{posts.map((post) => (
<Bestillingskort key={post.id} post={post} /> 

//deres overføres informationer for det enkelte produkt til produktkort
))}
</div> 
) :(

<p>Ingenting at vise</p> )}
</main> );
}

