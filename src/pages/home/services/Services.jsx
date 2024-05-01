import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
            })
    }, [])

    return (
        <div className='m-8'>
            <div className='*:text-center text mb-6'>
                <h1 className="text-2xl font-bold">Lorem ipsum dolor sit.</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ullam, iusto beatae aliquam alias quasi? Rem alias ratione doloremque nobis.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-10'>
                {services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)}
            </div>
        </div>
    );
};

export default Services;

function ServicesCard({ service }) {
    const { title, img, price } = service
    // console.log(service);
    return (
        <div className="card bg-base-100 shadow-xl rounded-md cursor-pointer">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold text-error'>Price: <span>${price}</span></p>
            </div>
        </div>
    )
}