const footer = document.createElement('footer')

footer.innerHTML = `
<footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">Solid BlockChain Solutions</h1>
        <p>Your SOLID ray of hope.</p>

        <h2>Contact</h2>

        <address>
          101 King Street, Kingston, Jamaica<br />

          <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Company</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Careers</a>
            </li>

            <li>
              <a href="#">Blogs</a>
            </li>

            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Products</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">DeFi</a>
            </li>

            <li>
              <a href="#">NFTs</a>
            </li>

            <li>
              <a href="#">Metamask</a>
            </li>

            <li>
              <a href="#">Truffle</a>
            </li>

            <li>
              <a href="#">Quorum</a>
            </li>

            <li>
              <a href="https://infura.io/">Infura</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Support</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">FAQ</a>
            </li>

            <li>
              <a href="#">Help Desk</a>
            </li>

            <li>
              <a href="#">Forums</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>Solid BlockChain Solutions &copy; 2022 Copyright.</p>
      </div>
    </footer>

`

document.querySelector('body').append(footer)