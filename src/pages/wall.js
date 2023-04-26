export const wall = () => {
  // crea contenedor principal
  const h1 = document.createElement('h1');
  // modifica propiedades de los elemento
  h1.textContent = 'dentro de wall';
  // retorna el elemento
  return h1;

  // Get a list of post from your database
  async function getPost() {
    const postCol = collection(db, 'posts');
    const postSnapshot = await getDocs(postCol);
    const posts = postSnapshot.docs.map((doc) => doc.data());
    console.log(posts);
    return posts;
  }

const p = getPost();
console.log(p);
};
