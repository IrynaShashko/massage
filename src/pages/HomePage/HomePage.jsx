import "../../pages/HomePage/HomePage.css";
import photo1 from "../../images/10.jpg";
import photo2 from "../../images/11.jpg";
import photo3 from "../../images/13.jpg";

const HomePage = () => {
  return (
    <main>
      <div>
        <div class="container">
          <div class="photo1">
            <img
              className="img1"
              src={photo1}
              width={100}
              height="100%"
              alt="logo"
            />
          </div>
          <div class="photo2">
            <img src={photo2} width={100} height="100%" alt="logo" />
          </div>
          <div class="photo3">
            <img
              className="img3"
              src={photo3}
              width={100}
              height="100%"
              alt="logo"
            />
          </div>
          <div class="text">
            <p>
              Я знаю все про <span className="span">ЯКІСНИЙ</span> масаж
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
