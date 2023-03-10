import React, { useState } from "react";
import axios from "axios";

const ShowUserInParty = () => {
     const getData = localStorage.getItem("token");
     const token = JSON.parse(getData);
     const api = "http://192.168.1.150/user-service/api/user/admin/findAll";
     React.useEffect(() => {
        axios
          .get(api, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
     },[]);
     
    return(
        <div>

        </div>
    )
}
export default ShowUserInParty