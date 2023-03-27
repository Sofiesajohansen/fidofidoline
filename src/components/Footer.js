import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Footer(){
    return(

<footer className="footer">



<div className="footer_kontakt" >
    <PhoneIcon />
        <h4>Kontakt</h4>
        
        <p>Adresse: Hvalpevej 88, Hundsted 2233
        <br/> <br/>
        Tel: +45 22 33 44 55
        <br/> <br/>
        E-mail: Fidoogfidoline@gmail.com
        </p>
</div>


    <div >
        <div className="footer_aabningstider">
        <AccessTimeIcon />
        <h4>Åbningstider</h4>
        </div>
    <table>
        <tbody>
            <tr>
                <td>Mandag - Fredag</td>
                <td>09:00 - 17:00</td>
            </tr> <br/>
            <tr>
                <td>Lørdag - Søndag</td>
                <td>Lukket</td>
            </tr>
        </tbody>
    </table>
       
    </div>

    <div className="footer_some" >
        <h4>Sociale Medier</h4>
        <p>
        Pinterest
        <br/> <br/>
        Instagram
        <br/> <br/>
        Facebook
        </p>
    </div>
</footer>)
}