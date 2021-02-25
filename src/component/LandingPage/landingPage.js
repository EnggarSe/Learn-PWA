import React,{useState, useContext, Fragment, useEffect } from 'react'
import Logo from '../../assets/Logo.png'
import '../Styling/landingPage.css'
import RightSide from '../../assets/Right-Side.png'
import Card1 from '../../assets/Card1.png'
import Card2 from '../../assets/Card2.png'
import Card3 from '../../assets/Card3.png'
import Card4 from '../../assets/Card4.png'
import Card5 from '../../assets/Card5.png'
import Card6 from '../../assets/Card6.png'
import Iphone from '../../assets/Iphone.png'
import AppStore from '../../assets/appstore.png'
import Google from '../../assets/google.png'
import AOS from 'aos'


const LandingPage = () => {

   useEffect(() => {
      AOS.init({duration : 1000, once : true})
    }, []);

   return(
      <Fragment>
         <div data-aos="flip-down" className = "Header">
            <img className = "Logo-Header" src={Logo} />
         </div>
         <div className = "Carousel">
            <div data-aos = "fade-right" className = "Left-Side">
               <h1><span>Jadi Pengguna Pertama</span>  <span>Stockbit Sekuritas</span> </h1>
               <p>Masukkan data dirimu untuk mendapatkan early bird access Stockbit Sekuritas.</p>
               <div className = "Form">
                  <form className = "form-feedback">
                     <input type="text" placeholder="Masukan nama lengkap"/>
                     <input type="text" placeholder="Masukkan nomor HP"/>
                     <input type="text" placeholder="Masukkan email"/>
                     <input type="submit" value="Masuk Waiting List"/>
                  </form>
               </div>
            </div>

               <div data-aos = "fade-left" className = "Right-Side">
                  <img className = "Image" src={RightSide} />
               </div>
         </div>

         <div data-aos="zoom-in-up" className = "Container-Body">
            <div className = "Body-Wrapper">
               <div className = "Card">
                  <img className = "Image-Card" src={Card1} />
                  <h1><span>Buka Akun Dengan</span><span>Cepat</span></h1>
                  <p><span>Tanpa formulir kertas. Tanpa </span> <span>nunggu berhari-hari.</span><span>100% digital.</span></p>
               </div>
               <div className = "Card">
                  <img className = "Image-Card" src={Card2} />
                  <h1><span>Biaya Komisi Lebih</span><span>Rendah</span></h1>
                  <p><span>Beli saham di Stockbit</span><span> hanya dikenakan fee 0.12%.</span></p>
               </div>
               <div className = "Card">
                  <img className = "Image-Card" src={Card3} />
                  <h1><span>Lebih Stabil</span></h1>
                  <p><span>Dapatkan pegalaman</span> <span>trading yang lebih cepat</span><span> dan stabil dengan tenologi</span><span> yang terkini.</span></p>
               </div>
               <div className = "Card">
                  <img className = "Image-Card" src={Card4} />
                  <h1><span>Lebih Lengkap</span></h1>
                  <p><span>Dilengkapi dengan fitur</span> <span> dan data finansial kelas</span><span> professional yang lengkap.</span></p>
               </div>
               <div className = "Card">
                  <img className = "Image-Card" src={Card5} />
                  <h1><span>Design Lebih Menarik</span></h1>
                  <p><span>Didesain untuk investor</span> <span> milenial untuk pengalaman</span><span> investasi yang lebih nyaman.</span><span> Swipe. Order. Done.</span></p>
               </div>
               <div className = "Card">
                  <img className = "Image-Card" src={Card6} />
                  <h1><span>Lebih Seru</span></h1>
                  <p><span>Diskusi dan investasi bersama</span> <span> komunitas Stockbit.</span></p>
               </div>
            </div>
         </div>

         <div data-aos="fade-right"  className = "Footer-Inform">
            <div className = "Content-Inform">
               <div className = "Left-Side">
                  <img className = "Image-Inform" src={Iphone} />
               </div>
               <div className = "Right-Side">
                  <h1>Mari Wujudkan Tujuan Keuanganmu Bersama Stockbit</h1>
                  <p><span>Daftar 100% online tanpa minimum investasi dan tentukan sendiri</span>  <span> jumlah investasi sesuai tujuan keuanganmu.</span></p>
                  <div className = "download-via">
                     <img className = "Image-Inform1" src={AppStore} />
                     <img className = "Image-Inform2" src={Google} />
                  </div>
               </div>
            </div>
         </div>

         <div className = "Footer">
            <h6>Stockbit is a simple stock investing app where you can discuss, analyse and trade stocks. Get real-time data on trading ideas, news, sentiment and analysis from thousands of real investors and traders.</h6>
            <h5>Copyright by Stockbit.</h5>
            <p>Menara Standard Chartered, Jl. Prof. DR. Satrio No.164, RT.1/RW.6, Kuningan, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930</p>
         </div>
      </Fragment>
   )

}


export default LandingPage