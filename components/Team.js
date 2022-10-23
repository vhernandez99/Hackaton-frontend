import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import memberImage from "../assets/images/pancho.png";
import memberImage2 from "../assets/images/rafa.png";
import memberImage3 from "../assets/images/victor.jpg";
import memberImage4 from "../assets/images/litzi.jpg";



const Team = () => {

    const members = [
        {
          title: 'Ing.',
          name: 'Víctor Hernández Aguilera',
          role: 'Blockchain Developer',
          image: memberImage3,
        },
        {
          title: 'Ing.',
          name: 'Litzi Yarely Sánchez Enríquez',
          role: 'UI/UX Designer',
          image: memberImage4,
        },
        {
          title: 'Ing.',
          name: 'Francisco Orta Ramírez',
          role: 'Front-End Developer',
          image: memberImage,
        },
        {
          title: 'TSU.',
          name: 'Rafael Sánchez Olguín',
          role: 'Front-End Developer',
          image: memberImage2,
        },
      ]
    return ( 
        <>
            <div className='mx-[20%] lgmax:mx-[5%]'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[4rem] font-extralight mb-6 lgmax:text-[2rem] lgmax:mt-8'> MEET THE TEAM </h1>
                    <FontAwesomeIcon className='text-[3rem]' icon={faGlobe}/>
                </div>
                <div className='mt-8 space-y-6 mb-4'>
                    {
                        members && members.map((member, index) => (
                            <div key={index} data-aos="zoom-in-up" className='flex border-t-blue-600 border-t px-4 pt-2 lgmax:flex-col'>
                                <div className='w-1/2 text-xl lgmax:w-full lgmax:flex lgmax:flex-col lgmax:items-justify-center'>
                                    <h2>{`${member.title} ${member.name}`}</h2>
                                    <p> {member.role} </p>
                                    <Image alt={member.name} objectFit="cover" className='bg-blue-600 rounded-lg' width={150} height={150} src={member.image}/>
                                </div>
                                <div className='w-1/2 space-y-8 text-xl lgmax:w-full lgmax:space-y-4 lgmax:text-sm lgmax:mt-2'>
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