import React from "react";
import "./Home.css";
import Product from "./Product";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const promoImages = [
  "https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/N2IxYThmYzAt/N2IxYThmYzAt-MjVlNmIyZTUt-w1500._CB407941419_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/02/AMAZON-FASHION/2020/FASHION/PRIME_WARDROBE/AUGUST_FW20_UPDATE/MERCH/GW_HERO_DESK_1500x600._CB408900531_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg",
];

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          className="home__image"
          autoplay={true}
          showThumbs={false}
          swipeable={true}
          infiniteLoop={true}
        >
          <div>
            <img src={promoImages[0]} />
          </div>
          <div>
            <img src={promoImages[1]} />
          </div>
          <div>
            <img src={promoImages[2]} />
          </div>
          <div>
            <img src={promoImages[3]} />
          </div>
        </Carousel>

        <div className="home__row">
          <Product
            id="1"
            title="New Apple iPad Pro (11-inch, wifi, 128GB"
            price={750}
            rating={5}
            image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY218_.jpg"
          />
          <Product
            id="2"
            title="iPhone 11 Pro Max (64GB)"
            price={999}
            rating={4}
            image="https://m.media-amazon.com/images/I/81hA4nb-+qL._AC_UY218_.jpg"
          />
          <Product
            id="3"
            title="Wireless Charger, 4 in 1 for ipad Apple Watch and Airpods"
            price={39.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/711qlVyxFRL._AC_UY218_.jpg"
          />
          <Product
            id="4"
            title="Samsung Galaxy S20 Ultra Black"
            price={1175}
            rating={4}
            image="https://m.media-amazon.com/images/I/71bAj75HoFL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="5"
            title="The Devil's Work Kindle Edition"
            price={10.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/41KzYUdCY+L._SY346_.jpg"
          />

          <Product
            id="6"
            title="Apple Watch Series 4 (GPS + Cellular, 40mm)"
            price={34.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/G/02/img15/SeptEye19/AMZ_FamilyStripe_Series_5_GPS._CB436902396_.png"
          />
          <Product
            id="7"
            title="Shark HZ400UKT, Vacuum Cleaner, Blue & Grey"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/31kxmGd8LdL._AC_SY240_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="8"
            title="Samsung 50 TU7100 HDR Smart 4K TV with Tizen OS"
            price={429}
            rating={4}
            image="https://m.media-amazon.com/images/I/81pizRn9ieL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="9"
            title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
            price={479.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg"
          />
          <Product
            id="10"
            title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
            price={470.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg"
          />
        </div>

        <div className="home__bannerbackground">
          <div className="home__banner">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/amazonservices/seller_success_stories/2020/08_logistics-for-good/our-logistics-1x._CB406488601_.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="home__row">
          <Product
            id="11"
            title="Lib Tech TRS HP Snowboard Mens"
            price={419.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71kHW-r%2BSGL._AC_SL1500_.jpg"
          />
          <Product
            id="12"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers"
            price={114.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
          />
          <Product
            id="13"
            title="Macbook Pro 13 inch iCasso plastic & Keyboard Cover Only Compatible"
            price={497.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71F7PFRP9bL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="14"
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
            price={486.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
