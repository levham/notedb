//lib
    import React from 'react'; 
//js
    import User from './User';
//css
    import './Header.css';
//img
    import logo from './logo.jpg';

    function Header() {
      return (
        <header>
            <nav class="navbar navbar-light bg-light">
               
                <div class="logo">
                    <img src={logo} class="rounded"   />
                    <a class="navbar-brand" href="#">NoteDb</a>
                </div>

                <User />

            </nav>
        </header>
      );
    }

    export default Header; 