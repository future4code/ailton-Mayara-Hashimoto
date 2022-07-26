export const goBack = (navigate) => {
    navigate(-1)
};
export const goLogin = (navigate) => {
    navigate("/login")
};
export const goSignup = (navigate) => {
    navigate(`/signup`)
};
export const goPost = (navigate, id) => {
    navigate(`/posts/${id}`)
};
export const goFeed = (navigate) => {
    navigate(`/feed`)
};
export const goOut = (navigate) => {
    navigate(`/`)
}
