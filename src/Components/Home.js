import React from 'react'
import '../CSS/iankit.css'

function Home(props){
    return(
        <div className="home-page">
            <div>
                {/* <h2 className="h1-home">Working...  Will be Soon...!</h2> */}
                <h1>.</h1>
                <h1>.</h1>

              

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

                <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous" >
                </script>

                <ul>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100006837825474" target="_blank"><i class="fab fa-facebook-f icon"></i>    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/iankitjoshi/" target="_blank"><i class="fab fa-linkedin-in icon"></i></a></li>
                <li>
                    <a href="https://www.instagram.com/iankit_joshi/?hl=en" target="_blank"><i class="fab fa-instagram icon"></i></a></li>
                <li>
                    <a href="mailto:ankitkumarjoshi123@gmail.com" target="_blank"><i class="far fa-envelope icon"></i></a></li>
            
                </ul>
                
            </div>
        </div>
    )
}

export default Home