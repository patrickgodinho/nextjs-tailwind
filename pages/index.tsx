import React from 'react'

const Index = () => (
    <div
        className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center font-sans"
    >
        <div className="p-10 bg-white cursor-pointer text-blue-500 rounded shadow"
             onClick={() => window.location.href = 'https://github.com/patrickgodinho'}
        >
            My Github
        </div>
    </div>
)

export default Index;
