

export const goBack = (navigate) => {
    navigate(-1)
};
export const goLogin = (navigate) => {
    navigate("/login/")
};
export const goTrips = (navigate) => {
    navigate(`/trips/`)
};
export const goJoin = (navigate) => {
    navigate(`/trips/join-trip/`)
};
export const goAdmn = (navigate) => {
    navigate(`/admin/`)
};
export const goCreate = (navigate) => {
    navigate(`/admin/create-trips/`)
};
export const goDetails = (navigate, id) => {
    navigate(`/admin/details/${id}`)
};
export const goOut = (navigate) => {
    navigate(`/`)
}