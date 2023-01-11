import axios from "axios";
export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refresh_token");

  try {
    const response = await axios.get(
      "http://localhost:8080/api/v1/auth/refresh",
      {
        headers: {
          AuthorizationRefresh: `Refresh ${refreshToken}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data.accessToken);
      localStorage.setItem("access_token", response.data.accessToken);
    }
  } catch (error) {
    console.error(error);
  }
}
