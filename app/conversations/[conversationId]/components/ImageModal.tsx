'use client'

import Image from "next/image";
import Modal from "./Modal";


interface IImageModalProps {
  src?:string | null
  isOpen: boolean
  onClose: ()=>void


}

export default function ImageModal({ src, isOpen, onClose }: IImageModalProps){

  if(!src) {
    return  null;
  }

  return (

    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
      <Image
        fill
        className="object-cover"
        alt="image"
        src={src}
      />

      </div>
    </Modal>
  )


}