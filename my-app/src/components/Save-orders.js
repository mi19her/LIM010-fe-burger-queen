import firebase from 'firebase/app';
import 'firebase/firestore';

export const addOrderFirebase = (name, mesa, product, date, estado, total) => firebase
  .firestore()
  .collection('order')
  .add({
    name,
    mesa,
    product,
    date,
    estado,
    total,
  });
