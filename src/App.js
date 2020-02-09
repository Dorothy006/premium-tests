import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="logo">
          <h1 id="title">Premium Tests</h1>
          <p>
            These premium speaking tests will help you to prepare for the
            speaking portion of the IELTS examination.{" "}
          </p>
        </div>
      </div>
      <div className="main">
        <div className="row">
          <div className="col-sm-6">
            <div class=" leftCards card">
              <div className="cardContainer">
                <div className="leftIcon">
                  <img src="http://www.get-social.ca/wp-content/uploads/2019/12/coding-icon_8.jpg" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Premium Test 1</h4>
                  <p class="card-text">
                    Duis egestas aliquet aliquet. Maecenas erat eros, fringilla
                    et leo eget, viverra pretium nulla. Quisque sed augue
                    tincidunt, posuere dui tempor, dapibus nisi. Donec vel
                    lectus.
                  </p>
                  <a className="link" href="#">
                    START NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="leftCards  card">
              <div className="cardContainer">
                <div className="leftIcon">
                  <img src="http://www.get-social.ca/wp-content/uploads/2019/12/coding-icon_1.jpg" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Premium Test 3</h4>
                  <p class="card-text">
                    Duis egestas aliquet aliquet. Maecenas erat eros, fringilla
                    et leo eget, viverra pretium nulla. Quisque sed augue
                    tincidunt, posuere dui tempor, dapibus nisi. Donec vel
                    lectus.
                  </p>
                  <a className="link" href="#">
                    START NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div class="rightCards  card">
              <div className="cardContainer">
                <div className="leftIcon">
                  <img src="http://www.get-social.ca/wp-content/uploads/2019/12/coding-icon_7.jpg" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Premium Test 2</h4>
                  <p class="card-text">
                    Duis egestas aliquet aliquet. Maecenas erat eros, fringilla
                    et leo eget, viverra pretium nulla. Quisque sed augue
                    tincidunt, posuere dui tempor, dapibus nisi. Donec vel
                    lectus.
                  </p>
                  <a className="link" href="#">
                    START NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="rightCards  card">
              <div className="cardContainer">
                <div className="leftIcon">
                  <img src="http://www.get-social.ca/wp-content/uploads/2019/12/coding-icon_2.jpg" />
                </div>
                <div class="card-body">
                  <h4 class="card-title">Premium Test 4</h4>
                  <p class="card-text">
                    Duis egestas aliquet aliquet. Maecenas erat eros, fringilla
                    et leo eget, viverra pretium nulla. Quisque sed augue
                    tincidunt, posuere dui tempor, dapibus nisi. Donec vel
                    lectus.
                  </p>
                  <a className="link" href="#">
                    START NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card" id="bottomCardContainer">
              <div className="card-body" id="bottomCard">
                <h4 className="title">Looking for more help?</h4>
                <p className="content">
                  We offer live tutoring sessions with English teachers at your
                  convenience. To learn more and book a session with one of our
                  teachers click below.
                </p>
                <div id="liveButton">
                  <a className="live" href="#">
                    Live Tutoring
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
      <div className="footer">
        <div id="footerWord">
          <p>Designed by Elegant Themes | Powered by XXXXX</p>
        </div>
        <div id="footerIcon">
          <a href="https://www.facebook.com/getsocialTO/" >
            <i class="fa fa-facebook"></i>
          </a> 
          <a href="https://twitter.com/getsocialTO">
            <i class="fa fa-twitter" id="twitter"></i>
          </a>  
        </div>
      </div>
    </div>
  );
}

export default App;
