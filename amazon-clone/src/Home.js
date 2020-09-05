import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return <div className="home">
          <img 
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/Stargirl_S1/STARG_S1_GWBleedingHero_FT_COVIDUPDATE__XSite_1500X600_PV_en-GB._CB407848724_.jpg"
            alt="" 
          />
          {/* Product id, title, price, rating, image */}
          <div className="home_row">
           <Product
               id="12321341"
               title="New Apple iPad Pro (11-inch, wifi, 128GB"
               price={750}
               rating={5}
               image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY218_.jpg"
             />
            <Product
               id="12321341"
               title="Apple iPhone 11 Pro Max (64GB) - Silver"
               price={999}
               rating={4}
               image="https://m.media-amazon.com/images/I/81hA4nb-+qL._AC_UY218_.jpg"
             />
            </div>

            <div className="home_row">
            <Product
               id="90876549"
               title="The Devil's Work Kindle Edition"
               price={10.99}
               rating={3}
               image="https://m.media-amazon.com/images/I/41KzYUdCY+L._SY346_.jpg"
            />

            <Product
               id="35670962"
               title="Apple Watch Series 4 (GPS + Cellular, 40mm)"
               price={34.99}
               rating={5}
               image="https://images-eu.ssl-images-amazon.com/images/G/02/img15/SeptEye19/AMZ_FamilyStripe_Series_5_GPS._CB436902396_.png"
            />

            <Product
               id="84210423"
               title="5Automatic Instant Portable Dome Tent Water-resistant"
               price={34.50}
               rating={4}
               image="https://m.media-amazon.com/images/I/610pqZZMngL._AC_UL320_.jpg"
             /> 
           </div>
           <div className="home_row">
            <Product
               id="12321341"
               title="Samsung 50 TU7100 HDR Smart 4K TV with Tizen OS"
               price={429}
               rating={4}
               image="https://m.media-amazon.com/images/I/81pizRn9ieL._AC_UY218_.jpg"
            />
           </div>
         
           <div className="home_row">
            <Product 
               id="123456"
               title="EASELAND Soft Queen Size Blanket Warm Fuzzy Microplush Lightweight Thermal Fleece Blankets for Couch Bed Sofa 90x90 Inch,Washed Blue"
               price={12.98}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/61t4Syo71BL._AC_SL1100_.jpg"            
            />
           <Product 
               id="123457"
               title="USB Condenser Microphone, IKEDON 192KHZ/24Bit Plug & Play PC Streaming Mic, USB Microphone Kit with Professional Sound Chipset Boom Arm Set, Studio Cardioid Mic for Recording YouTube Gaming Podcasting"
               price={50.99}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/71r9i6EEGLL._AC_SL1500_.jpg"
              />
            </div>
            <div className="home_row">
            <Product 
               id="123458"
               title="TP-Link AC750 WiFi Extender | Covers Up to 1200 Sq.ft and 20 Devices Up to 750Mbps| Dual Band WiFi Range Extender"
               price={29.98}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/61xNxQEJfkL._AC_SL1500_.jpg"
              />
            <Product 
               id="123459"
               title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape"
               price={114.98}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
             />
          <Product 
               id="123450"
               title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics"
               price={349.98}
               rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
               />
            </div>
            <div className="home__row">
            <Product 
              id="123456"
              title="WD 12TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0120HBK-NESN"
              price={219.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/716SVGVhQML._AC_SX679_.jpg"
               />
            </div>
          </div> 
}

export default Home
