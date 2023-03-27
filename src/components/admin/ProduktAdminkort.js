import {useNavigate} from "react-router-dom"; 


//Laver kort
// denne registerer hvis en ansat skal klikke ind på et kort og redigere
export default function ProduktAdminkort ({post}){
    const navigate = useNavigate();

//når bruger klikker på produkkort dirigeres brugerne til formularsiden

//post.id er kortets unikke placering i produktlisten

    function opdaterKlik(){
        navigate(`posts/${post.id}`);
    }


    //onClick lytter til om der bliver klikket på et bestemt post
    return(
        <div className="kort_adminkort" onClick={opdaterKlik}>
            <div className="tekst">
                <h3>{post.produktnavn}</h3>
                <p>{post.beskrivelse}</p>
                <hr/>
                <p>Varighed:{post.varighed} min.</p>
                <p>Pris kr. {post.pris}</p>
            </div>
        </div>
    );
}