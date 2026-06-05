import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {

    const getItem = async () => {

      try {

        // Referencia al documento específico
        const docRef = doc(db, "items", itemId);

        // Consulta a Firebase
        const snapshot = await getDoc(docRef);

        // Verificamos si existe
        if (snapshot.exists()) {

          setItem({
            id: snapshot.id,
            ...snapshot.data()
          });

        } else {

          setItem(null);

        }
      } catch (error) {
        console.log("Error cargando item:", error);

      } finally {

        setLoading(false);
      }
    };
    getItem();
  }, [itemId]);

  if (loading) {
    return (
      <h2 className="text-center text-light">
        Cargando detalle...
      </h2>
    );
  }
  if (!item) {
    return (
      <h2 className="text-center text-light">
        Producto no encontrado
      </h2>
    );
  }
  return (
    <div className="container my-5">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;