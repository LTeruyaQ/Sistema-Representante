
class Header extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.innerHTML = ` 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">

        <style>
          *{
              box-sizing: border-box;
          }
          
          header{
              background-image: url(../../components/img/HomeBackGround.jpg);
              background-size: 100%;
              background-repeat: no-repeat;
              height: 18vh;
              width: 100%;
              z-index: 0;
          }
          
          nav .navbar-toggler{
              position: fixed;
              z-index: 1;
              top: 0;
              margin: 0.5cm;
              display: flex;
          }
          
          nav #offcanvasNavbar{
              justify-content: center;
              height: 100vh;
          }
          
          nav .offcanvas-body{
              max-height: 90vh;
          }
          
          /* nav .offcanvas-body ul, li, a{
              height: 4vh;
              max-height: 10vh;
          } */
          
          nav .offcanvas-header{
              max-height: 10vh;
          }
          </style>
  
          <header>
          <nav class="navbar navbar-light ">
          <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Sistema Representante</h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                          <li class="nav-item">
                              <a class="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">Link</a>
                          </li>
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                              </a>
                              <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                  <li><a class="dropdown-item" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li>
                                      <hr class="dropdown-divider">
                                  </li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
      </header>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
      `
    }
}


customElements.define('header-representante', Header)