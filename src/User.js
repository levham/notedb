//lib
    import React from 'react'; 
//js 
//css
    import './User.css';
//img
    import user from './user.png';


    function User() {
      return (   
 
        <div class="dropdown" >
          <img    src={user} 
                  class="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown" 
                  data-bs-display="static"
                  aria-expanded="false"
             />
         
          <ul class="dropdown-menu dropdown-menu-lg-end"  >
            <li><a class="dropdown-item" href="#">Giriş Yap</a></li>
            <li><a class="dropdown-item" href="#">Site hakkında</a></li>
            <li><a class="dropdown-item" href="#">Ayarlar</a></li>
          </ul>




        </div>
     

      );
    }

    export default User;

//rel="noopener noreferrer"
//          target="_blank"