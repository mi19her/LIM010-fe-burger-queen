import firebase from 'firebase/app';
import 'firebase/firestore';

export const addOrderFirebase = (name, mesa, cant, product, date) => firebase
  .firestore()
  .collection('order')
  .add({
    name,
    mesa,
    cant,
    product,
    date,
  });
