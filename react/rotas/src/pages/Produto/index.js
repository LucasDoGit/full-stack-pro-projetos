import { useParams } from 'react-router-dom';

function Produto() {
    const { id } = useParams();

    return (
      <div>
        <h2>Página detalhes do produto</h2>
        <span>MEU PRODUTO E {id}</span>
      </div>
    );
  }
  
export default Produto;
  