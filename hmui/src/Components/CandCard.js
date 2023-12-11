import React from 'react'

const CandCard = (props) => {

  const userInfo = localStorage.getItem("userInfo")
    const obj = JSON.parse(userInfo);
  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      {/* <img
        src="https://via.placeholder.com/64"
        alt="Candidate Profile"
        className="h-16 w-16 rounded-full object-cover mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold">John Doe</h2>
        <p className="text-gray-600">Software Engineer</p>
      </div> */}


<div className={`flex items-center w-full bg-white shadow-sm hover:shadow-lg rounded-lg p-4 ${props.isDrag ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} transition duration-300 cursor-pointer`}>
  <img className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md" src={obj.pic} alt="candidate" />
  <div className="ml-4">
    <h2 className="font-mono text-black text-xsm">{props.name}</h2>
  </div>
</div>


    </div>
  )
}

export default CandCard