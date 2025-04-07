import UserProvider from './contexts/user';
import Alunos from './components/Alunos';

function App() {
  return (
    <UserProvider>
      <h1>Escola</h1>
      <hr />
      <Alunos/>
    </UserProvider>
  );
}

export default App
