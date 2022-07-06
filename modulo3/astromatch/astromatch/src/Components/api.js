import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Api () {

    const [profile, setProfile] = useState({});
    const [match, setMatch] = useState({});
    const [person, setPerson] = useState({});
    const [clear, setClear] = useState({});

    useEffect (() => {
     
    }, [])
    const profilePick = async () => {
        try {
            const response = await axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayara/person`)
            setProfile(response.data)
        } catch (error) {
            console.log(error)
        }
        profilePick()
    };

    const userMatch = async () => {
        try {
            const response = await axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayara/matches`)
            setMatch(response.data)
        } catch (error) {
            console.log(error)
        }
        userMatch()
       };
    
    const choosePerson = async () => {
        const body = 
            {   id: "71gMbZs2txS9LDvGK5Ew",
                choice: true
            };
        
        try {
            const response = await axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayara/choose-person`).JSON + body
            setPerson(response.data)            
        } catch (error){
        console.log(error)
    }
    choosePerson()
    };
    const clearCache = async () => {
        try {
            const response = await axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:mayara/clear`)
            setClear(response.data)
        } catch (error) {
            console.log(error)
        }
        clearCache()
    };

    return (
        <div>

        </div>
    )
}