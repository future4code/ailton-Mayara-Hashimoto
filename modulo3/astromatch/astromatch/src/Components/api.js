import axios from 'axios'

export const profilePick = async (setPerson) => {
    try {
        const response = await axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mayara/person`)
        setPerson(response.data.profile)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
};

export const userMatch = async (setMatch) => {
    try {
        const response = await axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mayara/matches`)
        setMatch(response.data.matches)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
   };

export const choosePerson = async (id, choice, setPerson) => {
    const body = 
        {   id: id,
            choice: choice
        };
    try {
        await axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mayara/choose-person`, body)
        profilePick(setPerson)           
    } catch (error){
    console.log(error)
}
};

export const clearCache = async () => {
    try {
        await axios
        .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mayara/clear`)
    } catch (error) {
        console.log(error)
    }
    clearCache()
};
