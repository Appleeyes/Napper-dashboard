class DashboardNavigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
      body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #DADBD8;
      }

      .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 150px;
        color: black;
        font-size: 18px;
        cursor: pointer;
      }

      .middle div{
        margin-right: 50px;
      }

      .left{
        display: flex;
      }

      .logo {
        width: 50px;
        height: 50px;
      }

      .middle {
        display: flex;
        justify-content: space-around;
      }

      .right {
        text-align: right;
      }

      .open-dashboard {
        color: white;
        background-color: black;
        padding: 10px 30px;
        border-radius: 30px;
      }
    `;

    this.shadowRoot.appendChild(style);

    this.shadowRoot.innerHTML += `
      <div class="navigation">
        <div class="left">
          <img src="napper.png" alt="Logo" class="logo">
          <p>Napper</p>
        </div>
        <div class="middle">
          <div class="about">About</div>
          <div class="how-it-works">How It Works</div>
          <div class="login">Login</div>
          <div class="registration">Registration</div>
        </div>
        <div class="right">
          <div class="open-dashboard">Open Dashboard</div>
        </div>
      </div>
    `;
  }
}

customElements.define("dashboard-navigation", DashboardNavigation);

class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
      .hero-container{
        position: relative;
        padding: 50px 150px;
      }

      .hero {
        display: flex;
        justify-content: space-around;
      }

      .image-container {
        display: flex;
      }

      .image-container .img1 {
        width: 500px;
        height: auto;
        display: block;
        border-bottom-left-radius: 200px;
      }

      .right {
        width: 40%;        
      }

      .right h1{
        font-size: 100px;
        line-height: 90px;
      }

      .right h1 img {
        height: 70px;
        width: 200px;
        display: inline-block;
       }

       .first{
        display: flex;
        width:100%;
        margin-top: -30px;
       }

       .first p{
        width: 45%;
        margin-right: 30px;
        line-height: 30px;
       }

       .first img{
        width: 120px;
        height:120px;
        margin-left: 30px;
       }

       span{
        position: absolute;
        top: 20%;
        right: 30%;
        z-index: -1;
        height: 150px;
        width: 300px;
        background: #EBF44B;
        border-radius: 100%;
        transform: translate(50%, 50%) rotate(15deg);
      }

      span::before {
        content: "";
        position: absolute;
        top: 0%;
        left: 0;
        width: 400px;
        height: 300px;
        background: inherit;
        filter: blur(60px);
      }
    `;

    this.shadowRoot.appendChild(style);

    this.shadowRoot.innerHTML += `
    <div class="hero-container">
      <div class="hero">
        <div class="left">
          <div class="image-container">
            <img class="img1" src="man.png" alt="Man Image">
          </div>
        </div>
        <div class="right">
          <h1>Track your productivity <img src="new2.png" alt="New2 Image"> online</h1>
          <div class="first">
             <p>Solving problem with drowsiness, apathy, lack of motivations and other factors that do not allow you to grow</p>
             <img src="new3.png" alt="New3 Image">
          </div>
        </div>
      </div>
      <span></span>
    </div>
    `;
  }
}

customElements.define("hero-section", HeroSection);
