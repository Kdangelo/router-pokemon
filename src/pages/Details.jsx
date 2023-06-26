import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Details = () => {
  const params = useParams();
  const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  console.log(params);
  console.log(data);
  return (
    <div className="container d-flex flex-column">
      <h1 className="text-center my-5">Detalle {params.name}</h1>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {loading && (
            <div className="spinner-border">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && (
            <div className="text-center">
              <h1>Ha ocurrido un error</h1>
            </div>
          )}
          {data && data.sprites &&  (
            <div className="container d-flex justify-content-center align-items-center">
              <div className="card mb-3" style={{ width: '540px' }}>
                <div className="row g-0">
                  <div className="col-md-4 p-2">
                    <img src={data.sprites.other.dream_world.front_default} className="img-fluid rounded-start" alt={data.name} />
                  </div>
                  <div className="col-md-8 p-2">
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p class="card-text">Habilidades</p>
                      <ul>
                        {data.abilities.map((ability) => (
                          <li key={ability.ability.name}>{ability.ability.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
