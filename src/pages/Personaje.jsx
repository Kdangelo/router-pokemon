import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personaje = () => {
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon');
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();
  console.log(data)

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };
  
  const handleButtonClick = () => {
    navigate(`/personaje/${selectedPokemon}`);
    console.log(selectedPokemon)
  }

  return (
    <div className='container-fluid d-flex flex-column'>
      <h1 className='text-center my-5'>Selecciona un Pokémon</h1>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {loading && (
            <div className='spinner-border'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          )}
          {error && (
            <div className='text-center'>
              <h1>Ha ocurrido un error</h1>
            </div>
          )}
          {data && data.results && (
            <div className='input-group' style={{ width: '350px' }}>
              <select className='form-select' value={selectedPokemon} onChange={handleSelectChange}>
                <option value="">Selecciona</option>
                {data.results.map((pokemon) => (
                <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                ))}
              </select>
            </div>
          )}
          {selectedPokemon && (
            <button className='btn btn-secondary my-4' type="button" onClick={handleButtonClick}>Ver detalle</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Personaje;
