"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import LeftBarOption from "@components/LeftBarOption";
import AccountPage from "@components/AccountPage";
import Input from "./Input";
import { InputType, LeftBarType } from "./Types";
import { AiOutlineClose } from "react-icons/ai"

const AccountDashboard = forwardRef(({ profileImg, name, activePage, classNameDashboard }, ref) => {
  const dashboardRef = useRef();

  const initPages = (pages) => {
    Object.entries(defaults).forEach(([key, value]) => 
      Object.keys(pages).forEach(key2 => 
        pages[key2][key] === undefined ? 
          pages[key2][key] = value : 
          null
    ));
    return pages;
  }

  const defaults = {
    hasPage: true,
    LeftBarOption: true,
    inputWrapperHeight: "h-[550px]",
    content: () => "",
    btns: () => 
    <div className="flex justify-end gap-4 mt-20 items-end">
      <a href="#dashboard" className="auth-btn-outline-white uppercase text-sm">cancel</a>
      <div className="auth-btn-outline-primary uppercase text-sm">save</div>
    </div>
  };

  const pages = {
    "db-account": { 
      name: "Account", 
      className: "w-full text-sm",
      content: () => 
      <div className="flex flex-col gap-4">
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Username" value={name}/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Full name" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="email" text="Email" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="password" text="Password"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="tel" text="Phone Number"/>
      </div>
    },

    "db-change-password": { 
      name: "Change Password", 
      className: "w-full text-sm",
      inputWrapperHeight: "h-[275px]",
      content: () => 
      <div className="flex flex-col gap-4">
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="password" text="Current Password"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="password" text="New Password" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="password" text="Repeat New Password" />
      </div>,
      btns: () => 
      <div className="flex justify-center gap-4 mt-2 items-end">
        <div className="auth-btn-outline-primary uppercase text-sm">Change password</div>
      </div>
    },

    "db-socials": { 
      name: "Socials", 
      className: "w-full text-sm",
      content: () => 
      <div className="flex flex-col gap-4">
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Discord" placeholder="Not connected"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Instagram" placeholder="Not connected"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Twitter" placeholder="Not connected"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="YouTube" placeholder="Not connected"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Twitch" placeholder="Not connected"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Facebook" placeholder="Not connected"/>
      </div>
    },
    
    "db-statistics": { 
      name: "Statistics", 
      className: "w-full text-sm",
      content: () => 
      <div className="flex flex-col gap-4">
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="number" text="Kills" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="number" text="Deaths" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="number" text="K/D Ratio" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="number" text="Levels Complete" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Friends" />
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Experience"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Time Played (Hours)"/>
      </div>
    },

    "db-security": { 
      name: "Security", 
      className: "w-full text-sm",
    },

    "db-close-account": { 
      name: "Close Account", 
      className: "w-full text-sm",
      inputWrapperHeight: "h-[86px]",
      btns: () => 
      <>
        <p className="text-center text-sm">Please be aware that deleting your account is a permanent and irreversible action, <br/>resulting in the loss of all account data, including profile information, settings, and access to our services.<br/>If you understand and still wish to proceed, click "Delete Account." <br/><br/>For assistance or questions, please contact our support team.</p>
        <div className="mt-16">
          <div className="auth-btn-outline-red uppercase text-sm w-full text-center">DELETE ACCOUNT</div>
        </div>
      </>
    },

    "db-logout": { 
      name: "Log out", 
      className: "text-center text-enveus-primary uppercase text-sm mt-4 font-medium hover:text-opacity-80 transition-all",
      LeftBarOption: false,
      hasPage: false
    }
  }

  const [activePages, setActivePages] = useState(initPages(pages));
  const isActive = (key) => activePage === `#${key}`;
  const closeDashboard = () => {
    dashboardRef.current.classList.remove("open");
    ref.current.classList.remove("backgroundChange")
    setTimeout(() => location.hash = "#_", 300);
  };
  const closePanel = () => location.hash = "#dashboard";

  const closeOpen = () => {
    if(activePage === "#dashboard") closeDashboard();
    else if(activePage.startsWith("#db")) closePanel();
  }

  useEffect(() => {
    setTimeout(() => {dashboardRef.current.classList.add("open"); ref.current.classList.add("backgroundChange")}, 100);
  }, []);

  return (
    <div 
      id="background"
      className="fixed w-full h-[100vh] z-[9999] inset-0 bg-transparent [&.backgroundChange]:bg-enveus-authBlack [&.backgroundChange]:bg-opacity-75 flex justify-end transition-colors"
      onClick={(e) => {if(e.target.id === "background") closeOpen()}}
      ref={ref}
    >
      <div ref={dashboardRef} className={"flex w-min " + classNameDashboard}>
        {Object.entries(activePages).map(([key, value]) => value.hasPage ? 
          <AccountPage title={value.name} className="md:w-[450px] h-100vh overflow-auto p-12 bg-enveus-authBlack transition-transform h-full translate-x-full [&.open]:translate-x-0 absolute lg:left-[-115%] md:left-[-104%] top-0 z-50 lg:z-0 w-full" inputWrapperHeight={value.inputWrapperHeight} isActive={isActive(key)} btns={value.btns()}>
            {value.content()}
          </AccountPage> : 
          false
        )}
        <div className="overflow-y-auto overflow-x-hidden relative z-40 w-min p-12 bg-enveus-authBlack">
          <div className="flex justify-end absolute top-4 w-full -left-12">
            <a id="close" onClick={closeOpen} className="group/close cursor-pointer">
              <AiOutlineClose className="text-white opacity-1 group-hover/close:opacity-80 transition-opacity" size={20}/>
            </a>
          </div>
          <div className="w-72 h-72">
            <img className="object-cover w-full h-full" src={profileImg} alt="" />
          </div>
          <h2 className="font-bold text-2xl mt-3">{name}</h2>
          <div className="flex flex-col gap-4 mt-6">
            {Object.entries(activePages).map(([key, value]) =>
              <>
                { value.LeftBarOption && 
                  <LeftBarOption onClick={(e) => e.target.hash.substr(1) === key ? "#" : `#${key}`} type={LeftBarType.LeftHover} id={`#${key}`} className={value.className} option={value.name} isActive={isActive(key)} />
                }
                { !value.LeftBarOption && 
                  <a href={`#${key}`}x className={value.className}>{value.name}</a>
                } 
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})

export default AccountDashboard;
