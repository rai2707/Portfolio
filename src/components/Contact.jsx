import React, { useState } from "react";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name:"",
    email:"",
    message:""
  })

  const postData = async(e) =>{
    e.preventDefault();

    if(contactDetails){
      const res = await fetch("https://my-portfolio-94720-default-rtdb.firebaseio.com/sub.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(contactDetails)
      })

      if(res.ok){
        setContactDetails({
          name:"",
          email:"",
          message:""
        })
      }
      
    }
    console.log("after if condition");
  }

  const handleFormDetails = (e) =>{
    const {name, value} = e.target;
    setContactDetails(prev =>({...prev,[name]:value}))
  }
  console.log("======test", contactDetails);
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
          onSubmit={postData}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              onChange={(e) =>handleFormDetails(e)}
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              onChange={(e) =>handleFormDetails(e)}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              onChange={(e) =>handleFormDetails(e)}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
