import React from 'react';
import onehundred from "../../assets/images/100tk.jpg"
import diabetices from "../../assets/images/freediametices.jpg"
import pragnet from "../../assets/images/pragnetsurgery.jpg"
const OurFacility = () => {
    return (
        <div className='bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white '>
             <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white"
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="false"
            
            >
              Our Facility
            </h2>
          </div>



          {/* <!-- component -->/ */}
<section class=" grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-4 gap-6 py-12">
     
{/* <div class="    flex flex-wrap md:flex-row    shadow-lg    h-64 justify-between px-10	 lx:px-12    items-center">
   <img class="h-full w-full     rounded-lg rounded-r-none  " src={diabetices} alt="bag"/>
   <div class="w-full md:w-2/3 px-4 py-4   rounded-lg">
      <div class=" ">
         <h2 class="text-xl text-white font-medium mr-auto">FREE DIABETICES CHECK-UP </h2>
         
      </div>
      <p class="text-sm text-white mt-4">
         Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
      </p>
     
   </div>
</div>
<div class="  flex   flex-col md:flex-row    shadow-lg    h-64 justify-between px-10	 lx:px-12    items-center">
   <img class="h-full w-full     rounded-lg rounded-r-none  " src={onehundred} alt="bag"/>
   <div class="w-full md:w-2/3 px-4 py-4   rounded-lg">
      <div class=" ">
         <h2 class="text-xl text-white font-medium mr-auto">100 TK DOCOTR </h2>
         
      </div>
      <p class="text-sm text-white mt-4">
         Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
      </p>
     
   </div>
</div>
<div class="  flex   flex-col md:flex-row    shadow-lg    h-64 justify-between px-10	 lx:px-12    items-center">
   <img class="h-full w-full     rounded-lg rounded-r-none  " src={pragnet} alt="bag"/>
   <div class="w-full md:w-2/3 px-4 py-4   rounded-lg">
      <div class=" ">
         <h2 class="text-xl text-white font-medium mr-auto">SURGURY </h2>
         
      </div>
      <p class="text-sm text-white mt-4">
         Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
      </p>
     
   </div>
</div> */}
<section class="text-gray-400   ">
    <div class="  ">
      <div class="lg:w-full   flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64   rounded" src={diabetices}/>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
          <h1 class="text-white text-3xl title-font font-medium mb-1">FREE DIABETICES CHECK-UP</h1>
          
          <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
          
        </div>
      </div>
    </div>
  </section>
<section class="text-gray-400   ">
    <div class="  ">
      <div class="lg:w-full   flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64   rounded" src={onehundred}/>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
          <h1 class="text-white text-3xl title-font font-medium mb-1">100 TAKA </h1>
          
          <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
          
        </div>
      </div>
    </div>
  </section>
 
</section>
        </div>
    );
};

export default OurFacility;