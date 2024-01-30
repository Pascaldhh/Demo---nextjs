"use client";
import LoadingLink from '@components/LoadingLink';
import { usePathname } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';

export default function MainMenu({ routes = {}, className, classNamesLink, classNamesNormal, classNamesBtn, classNameLoggedIn, navRef }) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {Object.entries(routes).map(([href, value], i) => {
        const isActive = pathname === href || pathname === `${href}/`;
        return (
        <li key={uuidv4()}>
          {href === "{{login}}" && 
            <a href={value.id} className='relative z-10' onClick={() => navRef.current.classList.remove("active")}>
              <div className={"cursor-pointer group/login " + classNameLoggedIn}>
                <div className="">
                  <p>{value.name}</p>
                  <div className="absolute top-1/2 -translate-y-1/2 right-2 w-8">
                    <img className='object-cover w-full h-full rounded-full' src={value.picture} alt="Picture" />
                  </div>
                </div>
              </div>
            </a>
          }
          {href !== "{{login}}" &&
            <LoadingLink onClick={() => {
              navRef.current.classList.remove("active");

            }} href={href} className={classNamesLink + (isActive ? " active " : " ") + (value.isBtn ? classNamesBtn : classNamesNormal)}>{value.name}</LoadingLink>
          }
        </li>
      )})}
    </ul>
  )
}
