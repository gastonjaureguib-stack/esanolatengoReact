import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getProducts = async () => {

      try {

        const colRef = collection(db, "items");
        const snapshot = await getDocs(colRef);

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const featured = data.filter(
          (item) => item.featured === true
        );

        setItems(featured);

      } catch (error) {
        console.log("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();

  }, []);

  return (

    <Container className="my-5">

      <h2 className="text-center mb-5"
        style={{
          color: '#f3e5ab',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}
      >
        Plantas Destacadas
      </h2>

      {
        loading
          ? <h3 className="text-center text-light">Cargando plantas...</h3>
          : <ItemList items={items} />
      }

    </Container>
  );
};

export default ItemListContainer;