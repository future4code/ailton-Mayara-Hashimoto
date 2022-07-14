import axios from "axios";

export const ApplyToTrip = (body) => {
    
    try {
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips/${body.trip}/apply`, body)
        console.log("recebido")
    } catch (error) {
        console.log(error)
    }
}

export const TripList = async () => {
    const token = localStorage.getItem("token");
    try { const res = await axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips", {
        headers: { auth: token }
      })
      console.log(res.data)
      return res.data.trips
    } catch (error) {
      alert("Algo Deu Errado")
      console.log(error)
    }
  } 
export const CreateTrips = async (body) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips", body, {
        headers: { auth: token }
    })
    alert("Viagem criada com Sucesso!")
    console.log(res.data)
    } catch (error) {
    }
};
export const DeleteTrips = async (id) => {
    const token = localStorage.getItem("token");
    if (window.confirm("Certeza que deseja deletar esta viagem?")) {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips/${id}`, {
            headers: { auth: token }
        });
        
        }
    }
