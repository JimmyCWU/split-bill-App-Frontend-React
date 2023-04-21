import React, { useState } from "react";
import axios from "axios";
import PartyDetail from "./PartyDetail";
import { ip_address } from "../../env/env.js";

const ShowParty = () => {
  const [partyId, setPartyId] = useState("");
  const [partyName, setPartyName] = useState("");
  const [list, setList] = useState([]);
  const token = "";
  const api = `http://${ip_address}/party-service/api/party/findPartysByUserId`;
  React.useEffect(() => {
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData);
    console.log(token);
    axios
      .get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setList(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {list.map((data, index) => {
        return (
          <PartyDetail
            key={index}
            partyName={data.partyName}
            partyId={data.partyId}
          />
        );
      })}
    </div>
  );
}
export default ShowParty;