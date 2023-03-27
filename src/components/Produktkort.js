import {Link} from "react-router-dom"

export default function Produktkort ({post}) {
    // "post" refererer til oplysningerne i Firebase JASON 
    // fx. post.pris= pris element i JASON.
    return(
        <div className="kort">
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr/>
                <p>Varighed: {post.varighed} min.</p>
                <p>Pris kr. {post.pris}</p>
                

                <button className="laesmereknap">Læs mere</button>
                
                <Link to={`/bestil/${post.id}`} className="bestilknap">Bestil</Link>
            </div>
        </div>
    )
}