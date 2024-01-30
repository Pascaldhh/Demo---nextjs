import discord from "@public/assets/img/logo-discord.svg";
import youtube from "@public/assets/img/logo-youtube.svg";
import twitch from "@public/assets/img/logo-twitch.svg";
import instagram from "@public/assets/img/logo-instagram.svg";
import twitter from "@public/assets/img/logo-twitter.svg";
import facebook from "@public/assets/img/logo-facebook.svg";

import iconNotify from "@public/assets/img/icon-notify.svg";
import iconVoxel from "@public/assets/img/icon-voxel.svg";
import MainMenu from './MainMenu';

export default function Footer({className}) {
  return (
    <footer className={className}>
      <div className="container">
        <div className="flex sm:justify-between sm:flex-wrap gap-y-8 sm:flex-row flex-col items-center sm:items-start">
          <div>
            <h3 className='uppercase font-enveus text-7xl text-white text-opacity-100'>Enveus</h3>
            <div className="flex justify-between items-center mt-2">
              <a href="#" className='opacity-50 hover:opacity-100 transition-all'><img src={discord.src} alt="Picture of the discord logo" width="27" height="20"/></a>
              <a href="#" className='opacity-50 hover:opacity-100 transition-all'><img src={youtube.src} alt="Picture of the youtube logo" width="27" height="18"/></a>
              <a href="#" className='opacity-50 hover:opacity-100 transition-all'><img src={twitch.src} alt="Picture of the twitch" width="21" height="23"/></a>
              <a href="#" className='opacity-50 hover:opacity-100 transition-all'><img src={instagram.src} alt="Picture of the instagram" width="24" height="24"/></a>
              <a href="#" className='opacity-50 hover:opacity-100 transition-all'><img src={twitter.src} alt="Picture of the twitter" width="25" height="20"/></a>
              <a href="#" className='opacity-50 hover:opacity-100 transition-all'><img src={facebook.src} alt="Picture of the facebook" width="12" height="24"/></a>
            </div>
          </div>
          <div>
            <h4 className='text-xl font-medium text-white text-opacity-100 text-center sm:text-left'>Get in Touch</h4>
            <div className="flex items-center gap-3 mt-2">
              <img src={iconNotify.src} alt="Icon notify"/>
              <div>
                <h5>Contact</h5>
                <a href="mailto:contact@enveusgaming.com" className='font-normal'>contact@enveusgaming.com</a>
              </div>
            </div>
          </div>
          <div>
            <h4 className='text-xl font-medium text-white text-opacity-100 text-center sm:text-left'>Menu</h4>
            <MainMenu 
              routes={{
                "/": { name: "Home" },
                "/roster": { name: "Roster" },
                "/about-us": { name: "About us" },
                "/apply": { name: "Apply" },
                "/videos": { name: "Videos" },
                "/auth/login": { name: "Login", isBtn: true }
              }}
              className="flex gap-4 sm:gap-10 mt-2 sm:mt-5 flex-col sm:flex-row items-center sm:items-start"
              classNamesLink="text-white text-opacity-50 font-normal hover:text-opacity-100 transition-colors"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-12 flex-col sm:flex-row">
          <p className='text-center'>Copyright © 2023 Enveus. All Rights Reserved.</p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <img src={iconVoxel.src} alt="Picture of the Voxel logo" width="29" height="30"/>
            <p>Powered by <a href="#" className='text-white text-opacity-100 hover:underline'>Voxel</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
