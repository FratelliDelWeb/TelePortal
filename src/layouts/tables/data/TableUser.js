import React, { useState, useEffect } from "react";
import DataTable from "examples/Tables/DataTable";

export default function TableUser() {
  const [posts, setPosts] = useState([]);
  const baseDatiUser = [];
  useEffect(() => {
    fetch("api/clienti")
      .then((response) => response.json())
      .then((x) => {
        setPosts(x);
        console.log(posts);
      })
      .catch((err) => err);
  }, []);
  const variabile = posts;
  console.log(posts[0]);
  console.log(variabile);
  console.log(variabile.lengh);

  if (posts.length > 0) {
    for (let x = 0; x < posts.length; x += 1) {
      if (posts[x].DataRichiamo !== "") {
        baseDatiUser[x] = {
          codiceCliente: posts[x].CodiceCliente,
          name: posts[x].Denominazione,
          position: posts[x].Indirizzo + posts[x].Località,
          telefono: posts[x].Telefono1,
          DataRichiamo: posts[x].DataRichiamo,
        };
        console.log(baseDatiUser);
      }
    }

    console.log(baseDatiUser);
  }
  return (
    <DataTable
      table={{
        columns: [
          { Header: "CC", accessor: "codiceCliente", width: "10%" },
          { Header: "Nome", accessor: "name", width: "13%" },
          { Header: "Indirizzo", accessor: "position", width: "30%" },
          { Header: "Telefono", accessor: "telefono", width: "30%" },
          { Header: "DataRichiamo", accessor: "DataRichiamo", width: "12%" },
        ],
        rows: baseDatiUser,
      }}
      canSearch="true"
    />
  );
}
