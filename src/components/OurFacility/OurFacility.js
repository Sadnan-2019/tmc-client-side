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



          <div class="relative   px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
  <div class="absolute inset-0">
    <div class="h-1/3   sm:h-2/3"></div>
  </div>
  <div class="relative mx-auto max-w-7xl">
    
    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src={onehundred} alt=""/>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">100TK VISIT DOCTOR</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
            </a>
          </div>
           
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" 
          src={diabetices} alt=""/>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">Qualityful Service</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">How to use search engine optimization to drive sales</p>
              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.,
                tempore temporibus quo laudantium.</p>
            </a>
          </div>
        
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src={pragnet} alt=""/>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline"></a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">Improve your customer experience</p>
              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis
                perferendis hic.</p>
            </a>
          </div>
        
        </div>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default OurFacility;