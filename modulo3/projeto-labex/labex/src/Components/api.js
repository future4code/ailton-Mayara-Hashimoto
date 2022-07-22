import axios from "axios";

export const ApplyToTrip = (body) => {
    
    try {
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips/${body.trip}/apply`, body)

    } catch (error) {
      alert("Ops. Por favor verifique")
    }
}

export const TripList = async () => {
    const token = localStorage.getItem("token");
    try { const res = await axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips", {
        headers: { auth: token }
      })
      return res.data.trips
    } catch (error) {
      alert("Estamos verificando o ocorrido, por favor, tente novamente.")

    }
  } 
export const CreateTrips = async (body) => {
    const token = localStorage.getItem("token");
    try { const res = await axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mayara-hashimoto-ailton/trips", body, {
        headers: { auth: token }
    })
    alert("Viagem criada com Sucesso!")
    } catch (error) {
      alert("Estamos verificando o ocorrido, por favor, tente novamente.")
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
