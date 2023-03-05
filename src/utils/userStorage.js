
const getUserFromLS = () => {

    const user = localStorage.getItem("user");

    return user ? user : null;


}


const setUserToLS = (user) => {

    localStorage.setItem("user", user);

}


export { getUserFromLS, setUserToLS }