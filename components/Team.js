import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const getMembers = async () => {
    const res = await fetch("http://localhost:3000/api/members")
    return await res.json()
}

const Team = () => {

    const [members, setMembers] = useState(null);
    useEffect(() => {

        getMembers().then((data) => {
            setMembers(data)
        })

    }, [])

    return ( 
        <>
            <div className='mx-[20%]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[4rem] font-extralight mb-6'> MEET THE TEAM </h1>
                    <FontAwesomeIcon className='text-[3rem]' icon={faGlobe}/>
                </div>
                <div className='mt-8 space-y-6 mb-4'>
                    {
                        members && members.map((member, index) => (
                            <div key={index} data-aos="zoom-in-up" className='flex border-t-blue-600 border-t px-4 pt-2'>
                                <div className='w-1/2 text-xl'>
                                    <h2>{`${member.title} ${member.name}`}</h2>
                                    <p> {member.role} </p>
                                    <Image alt={member.name} className='bg-blue-600 rounded-lg' width={150} height={150} src={member.image}/>
                                </div>
                                <div className='w-1/2 space-y-8 text-xl'>
                                    <p className=''> <span><a href=''>@tupapacrosfit</a></span> Nearly two decades in Business </p>
                                    <p> Ranging from nightclub ownership and textiles management, to PR, marketing and movie production.</p>
                                    <p> Known as the celebrities go-to man, Leon has a top-notch, international network in all fields.</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
     );
}
 
export default Team;