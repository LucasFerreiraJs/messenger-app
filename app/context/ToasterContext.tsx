'use client'

import { Toaster } from 'react-hot-toast';


interface IToasterProps{
  message: string;


}

export default function ToasterContext() {
  return (
    <Toaster />
  );

}