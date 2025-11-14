const ClientsCard = ({ cliente }) => {
  return (
    <div>
      <p>Nombre: {cliente.nombre}</p>
      <p>email: {cliente.email}</p>
      <p>direccion: {cliente.direccion}</p>
      <p>codigo: {cliente.Perfil.codigo}</p>
    </div>
  );
};

export default ClientsCard;
