const nav = document.createElement('nav');
nav.innerHTML = `
<nav id="home">
      <div class="logo">
        <a href="index.html" title="Go to HomePage" ><img src="logo.png" alt="Logo Image" width="50px" /> </a>
      </div>
      <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="services.html" >Services</a></li>
        <li><a href="team.html" >Team</a></li>
        <li><a href="blogs.html">Blog</a></li>
        <li><a href="contactus.html" ><button class="login-button" >Contact us</button></a></li>
        <li><a href="login-singup.html"><button class="join-button">Join</button></a></li>
      </ul>
    </nav>
`

nav.id = "home"
document.querySelector('body').append(nav)