import React from "react";

const Contact = () => {
  return (
    <div>
       
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] py-6 sm:py-12">
        <div class=" max-w-4xl mx-auto w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="  p-10 ">
            <iframe width="100%"
                    height="480"
        className="broder rounded-lg overflow-hidden  lg:w-[500px] md:w-[350px] py-8 rounded    "
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7257.280447857329!2d90.3975879!3d24.5670919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564360d48085d3%3A0x4c1350094f6e4766!2sTMC%20Diagnostic%20%26%20Hospital!5e0!3m2!1sen!2sbd!4v1708100932319!5m2!1sen!2sbd"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
            </div>
            <div class="bg-blue-50 p-5 rounded-lg  ">
              <h2 class="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                Contact
              </h2>
              <div class="grid gap-6 mb-6 grid-cols-2 text-white">
                <div class="flex flex-col ">
                  <input
                    class="placeholder-white placeholder:text-md  py-4 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] rounded-full px-6 "
                  
                    placeholder="Name"
                  ></input>
                </div>
                <div class="flex flex-col">
                  <input
                    class="placeholder-white py-4 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] rounded-full px-6 placeholder:text-md  "
                    
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div class="grid gap-6 mb-6 grid-cols-1 text-white">
                <div class="flex flex-col">
                  <input
                    class="placeholder-white py-4 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] rounded-full px-6 placeholder:text-md  "
                    aria-placeholder="Votre nom"
                    placeholder="Subject"
                  ></input>
                </div>
                {/* <div class="flex flex-col">
                  <input
                    class="placeholder-white py-4 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]  rounded-full px-6 placeholder:text-md  "
                    aria-placeholder="Votre nom"
                    placeholder="Sujet"
                  ></input>
                </div> */}
              </div>
              <div class="mb-6 text-white">
                <textarea
                  class="placeholder-white bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] w-full rounded-2xl placeholder:text-lg   px-6 py-4"
                  placeholder="Message"
                  name=""
                  id=""
                  rows="8"
                ></textarea>
              </div>
              <div class="flex justify-start">
                <button class="rounded-full bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90]  text-white font-bold py-4 p-9 px-6 min-w-40 hover:bg-blue-800 transition-all">
                  Submit
                </button>
              </div>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7257.280447857329!2d90.3975879!3d24.5670919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564360d48085d3%3A0x4c1350094f6e4766!2sTMC%20Diagnostic%20%26%20Hospital!5e0!3m2!1sen!2sbd!4v1708100932319!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
