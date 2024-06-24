import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })


    return (
        <div className="mt-2">
            <div className="text-center space-y-3">
                <h3 className="text-3xl text-orange-600 font-bold">Our Services</h3>
                <h5 className="text-5xl font-bold">Our services area</h5>
                <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores corporis porro eius nobis <br /> exercitationem dolore blanditiis vel repellat sunt?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                {
                    services.map(service => <ServicesCard
                         key={service._id} 
                         service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;