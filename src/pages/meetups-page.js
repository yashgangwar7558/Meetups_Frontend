import React, { useState, useEffect, useRef } from 'react'
import '../pages/meetups-page.css';

const Meetupspage = () => {

    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState()
    const [allMeetups, setAllMeetups] = useState([])

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch('http://localhost:8000/cities')
                const data = await response.json()
                setCities(data)
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCities()
    }, [])

    const SelectCity = async (city) => {
        setSelectedCity(city)
        if (city) {
            try {
                const response = await fetch(`http://localhost:8000/cities/${city}`)
                const data = await response.json()
                setAllMeetups(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }

    // const handleDelete = async (meetup_id) => {
    //     if (meetup_id) {
    //         try {
    //             const response = await fetch(`http://localhost:8000/${meetup_id}`, {
    //                 method: 'DELETE',
    //             })
    //             const data = await response
    //             console.log(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    return (
        <div className="container">
            <div className="dropdown-container">
                <div className="dropdown">
                    <div className="dropdown-select">
                        <span className="select">{selectedCity ? selectedCity : "Choose your city...."}</span>
                        <i className="fa fa-caret-down icon"></i>
                    </div>
                    <div className="dropdown-list">
                        {
                            cities.map((item, index) => {
                                return (
                                    <div key={index} className="dropdown-list__item" onClick={() => SelectCity(item.city)}>{item.city}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="meetups-container">
                {
                    cities[0] ? (
                        allMeetups.map((item, index) => {
                            return (
                                <div key={item.meetup_id} className="meetup">
                                    <div className="image">
                                        <img alt={item.meetup_city} src={item.meetup_imageurl} />
                                    </div>
                                    <div className="details">
                                        <h2>{item.meetup_title}</h2>
                                        <h3><i className="fa fa-calendar"></i>{item.meetup_date}</h3>
                                        <address>{item.meetup_address}</address>
                                        <p>{item.meetup_description}</p>
                                        {/* <div>
                                            <button onClick={() => handleDelete(item.meetup_id)}>Delete</button>
                                            <button>Edit</button>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <h2 className="nomeetups">Sorry, No Meetups Found !!</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Meetupspage