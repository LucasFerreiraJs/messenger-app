'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface IMessageInputProps {
  id: string
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  type?: string;
  required?: boolean;
  placeholder: string;
}


export default function MessageInput({ id, register, errors, type, required, placeholder }: IMessageInputProps) {


  return (
    <div className="relative  w-full">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={id}
        {...register(id, { required })}
        className="text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"

      />
    </div>

  )

}