import React, { useEffect, useState } from 'react';

const DashBordRow = ({ order, handleDelete, handleUpdate }) => {
    const { _id, serviceName, email, customer, phone, oldPrice, service, status } = order;
    const [orderService, setOrderService] = useState({});

    useEffect(() => {
        fetch(`https://final-projects-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])

    useEffect(() => {
        fetch(`https://final-projects-server.vercel.app/accsories/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img &&
                                <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>

                    </div>
                </div>
            </td>
            <td>

                <br />
                <p>{oldPrice}</p>
            </td>
            <td>
                {phone}
                <br />
                {customer}
            </td>

            <th>
                <small>{email}</small>
            </th>
            <th>
                <button className='btn btn-ghost btn-xs bg-lime-800 text-white'>{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default DashBordRow;