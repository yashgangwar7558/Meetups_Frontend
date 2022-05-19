import React, { useState } from 'react'
import '../pages/add-new-meetup.css';

const AddNewMeetupPage = () => {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [details, setDetails] = useState({
        title: "",
        imageurl: "",
        date: "",
        city: "",
        address: "",
        description: ""
    });

    const getmeetupDetails = (e) => {
        const name = e.target.name
        const value = e.target.value
        setDetails({ ...details, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log(details);

        const response = await fetch('http://localhost:8000/add-new-meetup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
        })
        const result = await response.json()
        console.log(result);

        setShowSuccessMessage(true)
        setTimeout(() => {
            setShowSuccessMessage(false)
        }, 4000);

        setDetails({
            title: "",
            imageurl: "",
            date: "",
            city: "",
            address: "",
            description: ""
        })
    }



    return (
        <div className="form-container">
            <form className="form" onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' name="title" value={details.title} onChange={getmeetupDetails} />
                </div>
                <div className="control">
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' name="imageurl" value={details.imageurl} onChange={getmeetupDetails} />
                </div>
                <div className="control">
                    <label htmlFor='date'>Meetup Date</label>
                    <input type='text' required id='date' placeholder="dd-mm-yyyy" name="date" value={details.date} onChange={getmeetupDetails} />
                </div>
                <div className="control">
                    <label htmlFor='city'>Meetup City</label>
                    <input type='text' required id='city' name="city" value={details.city} onChange={getmeetupDetails} />
                </div>
                <div className="control">
                    <label htmlFor='address'>Meetup Address</label>
                    <input type='text' required id='address' name="address" value={details.address} onChange={getmeetupDetails} />
                </div>
                <div className="control">
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='4'
                        maxlength = "350"
                        name="description" value={details.description} onChange={getmeetupDetails}
                    ></textarea>
                </div>
                <div className="actions">
                    <button>Add Meetup</button>
                </div>
            {showSuccessMessage && <span className="success-msg">New Meetup added successfully!</span>}
            </form>
        </div>
    )
}

export default AddNewMeetupPage