import { Dispatch, SetStateAction } from "react"

export type LoginModalProps={
    setIsModalOpen:Dispatch<SetStateAction<boolean>>
    isModalOpen:boolean
}