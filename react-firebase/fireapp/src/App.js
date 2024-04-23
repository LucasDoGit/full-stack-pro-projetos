import { useState } from "react";
import { db } from "./firebaseConnection";
import { doc, setDoc, getDoc, collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import './app.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');

  const [posts, setPosts] = useState([]);

  async function handleAdd(){
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    // .then(() => {
    //   console.log("dados registrados no banco")
    // })
    // .catch((error) => {
    //   console.log("GEROU ERRO" + error)
    // })

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("cadastrado com sucesso!")
      setAutor('')
      setTitulo('')
    })
    .catch((error) => {
      console.log("Erro ao cadastrar", error)
    })
  }

  async function buscarPosts() {
    // const postRef = doc(db, "posts", "12345")

    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)
    // })
    // .catch((error) => {
    //   console.log('Error' + error)
    // })

    const postsRef = collection(db, "posts")

    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista)

    })
    .catch((error) => {
      console.log("Erro ao buscar posts" + error)
    })
  }

  async function editarPost(){
    const docRef = doc(db, "posts", idPost)

    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("post atualizado!")
      setIdPost('')
      setTitulo('')
      setAutor('')
    })
    .catch((error) => {
      console.log("Erro ao atualizar post" + error)
    })
  }

  async function excluirPost(PostId) {
    const docRef = doc(db, "posts", PostId)

    await deleteDoc(docRef)
    .then(() => {
      console.log("Post excluído com sucesso!");
    })
    .catch((error) => {
      console.log("Erro ao excluir post" + error)
    })
  }

  return (
    <div>
        <h1>Firebase</h1>

        <div className="container">

          <label>Id Post: </label>
          <input 
            placeholder="Digite Id do Post"
            value={idPost}
            onChange={ (e) => setIdPost(e.target.value) }
          /> <br/>

          <label>Titulo: </label>
          <textarea 
            type="text"
            placeholder="Digite o titulo"
            value={titulo}
            onChange={ (e) => setTitulo(e.target.value) }
          /> <br/>

          <label>Autor:</label>
          <input 
            type="text"
            placeholder="Autor do post"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          /> <br />

          <button onClick={handleAdd}>Cadastrar</button>
          <button onClick={buscarPosts}>Buscar posts</button>
          <button onClick={editarPost}>Atualizar post</button>

          <ul>
            {posts.map( (post) => {
              return(
                <li key={post.id}>
                  <strong>ID: {post.id}</strong><br/>
                  <span>Titulo: {post.titulo}</span><br/>
                  <span>Autor: {post.autor}</span><br/>
                  <button onClick={ () => excluirPost(post.id) }>Excluir</button> <br/> <br/>
                </li>
              )
            })}
          </ul>

        </div>

    </div>
  );
}

export default App;
