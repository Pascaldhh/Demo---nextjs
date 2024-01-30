"use client";
import Link from 'next/link'
import React, { forwardRef, useContext } from 'react'
import { ThemeContext } from './ProviderWrapper';
import { usePathname } from 'next/navigation';

const LoadingLink = forwardRef(({className, href, onClick = () => null, children}, ref) => {
  const { setLoading } = useContext(ThemeContext);
  const pathname = usePathname();

  const removeSlash = (string) => string.split("/").join("");

  const click = () => {
    if(removeSlash(pathname) !== removeSlash(href)) setLoading(true);
    onClick();
  };

  return (<Link ref={ref} className={className} onClick={click} href={href}>{children}</Link>);
});

export default LoadingLink;