import Image from 'next/image'
import Casal from "../../../public/casal.jpg"
export default function Authentification() {
    return (
        <>
            <div className='w-screen h-dvh p-28'>
                <div className='w-1/2 h-full'></div>
                <div className='w-1/2 h-full'>
                    <Image
                        src={Casal}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </>
    )
}