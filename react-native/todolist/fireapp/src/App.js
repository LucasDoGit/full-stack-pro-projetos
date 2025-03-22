import { useEffect, useState } from "react";
import { db, auth } from "./firebaseConnection";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import "./app.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    async function loadPosts() {

    const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(listaPost);
      })
    }

    loadPosts();

  }, []);

  useEffect(() => {
    async function checkLogin(){
      onAuthStateChanged(auth, (user) => {
        if(user){
          setUserDetail({
            uid: user.uid,
            email: user.email
          })
          setUser(true)
        } else {
          setUser(false)
          setUserDetail({})
        }
      })
    }
    checkLogin()
  }, [])

  async function handleAdd() {
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
        console.log("cadastrado com sucesso!");
        setAutor("");
        setTitulo("");
      })
      .catch((error) => {
        console.log("Erro ao cadastrar", error);
      });
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

    const postsRef = collection(db, "posts");

    await getDocs(postsRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(lista);
      })
      .catch((error) => {
        console.log("Erro ao buscar posts" + error);
      });
  }

  async function editarPost() {
    const docRef = doc(db, "posts", idPost);

    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("post atualizado!");
        setIdPost("");
        setTitulo("");
        setAutor("");
      })
      .catch((error) => {
        console.log("Erro ao atualizar post" + error);
      });
  }

  async function excluirPost(PostId) {
    const docRef = doc(db, "posts", PostId);

    await deleteDoc(docRef)
      .then(() => {
        console.log("Post excluído com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao excluir post" + error);
      });
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      console.log("Usuário cadastrado com sucesso!")
      setEmail("");
      setSenha("");
    })
    .catch((error) => {
      if(error.code === 'auth/weak-password'){
        alert('senha muito fraca!')
      } else if(error.code === 'auth/email-already-in-use'){
        alert('email em uso!')
      }
      console.log("Erro ao cadastrar" + error)
    })
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      console.log("Usuário logado com sucesso!")
      console.log(value.user)
      
      setUserDetail({
        uid: value.user.uid,
        email: value.user.email
      })
      setUser(true)
    })
    .catch((error) => {
      console.log("Erro ao fazer login" + error)
    })
  }

  async function fazerLogout() {
    await signOut(auth)
    .then(() => {
      console.log("usuários deslogado!")
      setUser(false)
      setUserDetail({})
      setEmail("");
      setSenha("");
    })
    .catch(() => {
      console.log("Erro ao fazer logout")
    })
  }

  return (
    <div>
      <h1>Firebase</h1>

      { user && (
        <div>
          <strong>Seja bem vindo(a) (Você está logado!)</strong>
          <span>ID: {userDetail.uid} - Email: {userDetail.email}</span> <br/>
          <button onClick={fazerLogout}>Sair da conta</button>
          <br/> <br/>
        </div>
      ) }

      <div className="container">
          <h2>Usuários</h2>
          <label>Email</label>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email" /> <br/>
          <label>Senha:</label>
          <input 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha" /> <br/>
          <button onClick={novoUsuario}>Cadastrar</button>
          <button onClick={logarUsuario}>Login</button>
      </div>

      <br/><br/>
      <hr/>

      <div className="container">
        <h2>Posts</h2>
        <label>Id Post: </label>
        <input
          placeholder="Digite Id do Post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />{" "}
        <br />
        <label>Titulo: </label>
        <textarea
          type="text"
          placeholder="Digite o titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />{" "}
        <br />
        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />{" "}
        <br />
        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPosts}>Buscar posts</button>
        <button onClick={editarPost}>Atualizar post</button>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong>
                <br />
                <span>Titulo: {post.titulo}</span>
                <br />
                <span>Autor: {post.autor}</span>
                <br />
                <button onClick={() => excluirPost(post.id)}>
                  Excluir
                </button>{" "}
                <br /> <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
