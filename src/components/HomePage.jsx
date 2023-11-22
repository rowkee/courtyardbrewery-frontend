import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage (){
    const [message, setMessage] = useState("");
    useEffect(() => {
      if (localStorage.getItem("access_token") === null) {
        // window.location.href = "/login";
      } else {
        (async () => {
          try {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/home/`, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
              },
            });
            setMessage(data.message);
          } catch (e) {
            console.log("not auth");
          }
        })();
      }
    }, []);
    return (
        <>
            <h1>The Courtyard Brewery</h1>
            <h2>Welcome {message}</h2>
        </>
    );
}