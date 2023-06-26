import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container">
      <h1>Detalle {params.name}</h1>
      {/* Aquí puedes agregar el contenido adicional de la página de inicio */}
    </div>
  );
};

export default Details;
