import axios from "axios";
import { useEffect, useState } from "react";
import ClientsCard from "./clientsCard";

const Body = () => {
  const [clientes, setClientes] = useState([]);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    getUsets();
  }, [suma]);
  // array de dependecia -> sirve como watch para controlar combios en el estado local y ejecutar el efecto

  const getUsets = async () => {
    try {
      console.log("Buscardo clientes");
      const fetchUsers = await axios.get("http://localhost:3001/users");

      setClientes(fetchUsers.data);
    } catch (err) {
      console.log({ err });
    }
  };

  const borrarCliente = () => {
    console.log("Borrando un Cliente");
    setClientes([clientes.pop()]);
  };

  const ejecutarUseEfect = () => {
    console.log("sumo 1");
    setSuma(suma + 1);
  };

  return (
    <div>
      <h1 className="">Lista de cliente es:</h1>
      <div>
        {clientes.map((cliente) => (
          <ClientsCard key={cliente.id} cliente={cliente} />
        ))}
      </div>

      <button onClick={() => ejecutarUseEfect()}>Ejecuto suma</button>
    </div>
  );
};

export default Body;
