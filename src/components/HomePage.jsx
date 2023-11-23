import { useEffect } from "react";
import axios from "axios";
import Image from 'react-bootstrap/Image'

export default function HomePage (){
    useEffect(() => {
      if (localStorage.getItem("access_token") === null) {
        // window.location.href = "/login";
      } else {
        (async () => {
          try {
        // eslint-disable-next-line no-unused-vars
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/home/`, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
              },
            });
          } catch (e) {
            console.log("not auth", );
          }
        })();
      }
    }, []);
    return (
      <div className="text-center mt-4">
        <h1 className="mb-4">The Courtyard Brewery</h1>
        <Image src="/media/bar.jpeg" fluid className="mb-4" />
        <hr />
    </div>
    );
}