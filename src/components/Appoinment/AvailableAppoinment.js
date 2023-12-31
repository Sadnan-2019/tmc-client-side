import { format } from "date-fns";
import React, {useState } from "react";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading" 

const AvailableAppoinment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment,setTreatment] = useState(null);
  const formatedDate = format(date, "PP");
 

  const {data:services, isLoading,refetch} = useQuery(['availableservices',formatedDate], () =>
  fetch(`http://localhost:5000/availableservices?date=${formatedDate}`)
  .then((res) => res.json())
)

if(isLoading){

  return <Loading></Loading>
  
}





  return (
    <div className="bg-gradient-to-r from-indigo-900 from-10% via-sky-900 via-30% to-emerald-900 to-90% ...">
      <p className="text-center py-8 text-4xl font-bold text-white">
        Available Appoinment date : {format(date, "PP")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-10 ">
        {services?.map((service) => (
          <Service service={service} key={service._id} setTreatment={setTreatment}></Service>
        ))}
      </div>
      {

          treatment && <BookingModal 
          date={date} 
          treatment={treatment}
          setTreatment={setTreatment}
          refetch = {refetch}
          ></BookingModal>
      }
    </div>
  );
};

export default AvailableAppoinment;
