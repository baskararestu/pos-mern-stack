import axios from "axios";

export default async function loginAdmin(email, password) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/admins/signin",
      {
        email: email,
        password: password,
      }
    );
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("isLoggedIn", true);
    console.log("Login Successful", response.data);

    return response.data;
  } catch (error) {
    console.error(
      "Login Failed",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

// export { loginAdmin };
