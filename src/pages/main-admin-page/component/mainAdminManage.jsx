import React from 'react'
import RegistrationForm from './registerFrom'
<<<<<<< HEAD
=======
import RegisterTable from './registerTable'
>>>>>>> sardorbek/main

const MainAdminManager = () => {
    const interButton = [
        {
            name: 'Hotel manager'
        },
        {
            name: 'Restaurant manager'
        },
        {
            name: 'Coffe shop manager'
        },

    ]
    return (
<<<<<<< HEAD
        <div className='w-full h-screen bg-[#FFF] rounded-lg'>
=======
        <div className='w-full h-auto bg-[#FFF] rounded-lg'>
>>>>>>> sardorbek/main
            <div className='flex justify-evenly items-center'>
                {interButton &&
                    interButton.map((res, i) =>
                        < button className='px-10 rounded border-2 border-[#F46A06] mt-10 bg-[#F1E8D7]' >
                            {res.name}
                        </button>
                    )
                }
            </div>
<<<<<<< HEAD
            <div>
                <RegistrationForm />
            </div>
=======
            
            <div>
                <RegistrationForm />
                <RegisterTable/>
            </div>
            
>>>>>>> sardorbek/main
        </div >
    )
}

export default MainAdminManager
