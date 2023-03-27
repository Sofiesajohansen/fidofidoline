import {Link} from "react-router-dom"

export default function Bestillingskort ({post}) {
    // "post" refererer til oplysningerne i Firebase JASON 
    // fx. post.pris= pris element i JASON.
    return(
        <div className="kort">
            <div className="tekst">
                <h3>{post.produkt}</h3>
                <p>{post.dato}</p>
                <p>{post.tid}</p>
                <p>{post.hunderace}</p>
                <p>{post.navn}</p>
                <p>{post.postnr}</p>
                <p>{post.adresse}</p>
                <p>{post.mobil}</p>
                <p>{post.bynavn}</p>
                <p>{post.hundenavn}</p>
            </div>
        </div>
    )
}