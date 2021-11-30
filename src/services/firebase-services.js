import {
    Firestore,
    Storage
} from "../firebase/index.js";

const firestoreInstance = Firestore.getFirestore();
/*const storageInstance =*/ Storage.getStorage();

export const getAllDocumentsFromCollection = async (name) => {
    //name = courses, works, tools, etc.
    const querySnapshot = await Firestore.getDocs(Firestore.collection(firestoreInstance, name));
    const result = {};
    querySnapshot.forEach((doc) => {
        result[doc.id] = (doc.data());
        // console.log(doc.id, " => ", doc.data());
    });
    return result;
}
