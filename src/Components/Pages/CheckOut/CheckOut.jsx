import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const CheckOut = () => {
    const services = useLoaderData()
    const { title, img,} = services
    const { user } = useContext(AuthContext)

    const handleBookServices = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const date = form.date.value;
        const number = form.number.value;
        const address = form.address.value;
        const details = form.details.value;
        const booking = {
            email,
            number,
            date,
            address,
            details,  
            user,
            img
         
                   
        }
        console.log(booking)

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .catch(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h2 className="text-center font-bold text-2xl">Service Name : {title}</h2>
            <form className="card-body" onSubmit={handleBookServices}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="number" placeholder="Phone-number" name="number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Address" name="address" className="input input-bordered" required />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea placeholder="Details" name="details" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    );
};

export default CheckOut;