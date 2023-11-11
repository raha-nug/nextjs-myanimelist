'use client'
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const NotFound = ()=>{
    return (
    <div className="flex justify-center items-center flex-col gap-4 min-h-[90vh] ">
        <div className="flex items-center">
            <FileSearch size={44} className="text-color-accent gap-4"/>
            <h3 className="text-color-accent text-5xl font-bold">Not Found</h3>
        </div>
        <Link href='/' className="text-color-primary hover:text-color-accent underline decoration-color-accent">Kembali</Link>
    </div>
    )
}

export default NotFound