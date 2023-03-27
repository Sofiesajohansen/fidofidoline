
import { useEffect, useState } from "react";
import Produktkort from "../components/Produktkort";
import hunddersover from "../images/hund.jpg";

export default function Forside(){
    
    //"post" kommer til at indeholde listen af hundeplejeprodukter
    const [posts, setPosts] = useState([]);
    
    //isPosts kan være enten true (hvis der er produkter) eller
    //"false" hvis ingen produkter der er.
    const [isPosts, setIsPosts] = useState(true);

    useEffect(() => {
    async function getPosts() {
    const url = "https://fidofidoline-af804-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";

    // Vent indtil response modtager positivt svar fra firebase
    const response = await fetch(url); 
    // Læg json data (listen af produkter) over i variablen "data"
    const data = await response.json(); 
    // Tjek om der fajtisk er produkter på listen (positiv hvis forskellig fra null)

    if (data !== null) {
    const postsArray = Object.keys(data).map((key) => ({ id: key,
    ...data[key],
    }));
    
    setPosts(postsArray); } else {
    setIsPosts(false); }
    }
    getPosts(); }, []);
    
    // Data hentes fra firebase og gemmes i "post" variabel
    
    return(
        <main>
            <div className="forsidebillede">
                <img src={hunddersover} alt="billede af hund der sover" 
                ClassName="herobillede" />
            </div>

            
            {isPosts ? (
                <div className="kortraekke">
                    {posts.map((post) => (
                    <Produktkort key={post.id} post={post} />
                    ))} 
                </div>
            ): (
                <p>Ingen produkter at vise</p>
            )}
        </main>
        )
}

//kommentar til linje 45-54 - hvis der er produkter at vise (isposts=true) så går programmet i lykke(loop) 
// (posts.map) hvor hvert element (post) på listen (posts), vises produktkort for produktet.

//hvis der er produkter at vise så viser ports true så går lykken igang og viser de elementer der er på listen.