import { db, storage } from './config';
import { doc, setDoc, getDoc, getDocs, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {Object} from "../types/object";


// 画像をStorageにアップロードする関数
export const uploadStorage = async (file: File, data: Object): Promise<void> => {
  if (!file) throw new Error("ファイルが見つかりません。");

  // 画像をStorageにアップロードする
  const fileid = uuidv4(); //idはUUIDで管理
  const storageRef = ref(storage, `images/${fileid}`);
  const snapshot = await uploadBytes(storageRef, file);
  const URL = await getDownloadURL(snapshot.ref);

  // 画像のURLをFirestoreに保存する
  const docRef = doc(db, "data", fileid);
  await setDoc(docRef, {
    ...data,
    URL,
  });
};

export const getData = async (docId: string) => {
  const docRef = doc(db, "data", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.error('No such document!');
    throw new Error('Document not found');
  }
}

export const getAllData = async () => {
  const collectionRef = collection(db, "data");
  const collectionSnapshot = await getDocs(collectionRef);
  const docs = collectionSnapshot.docs.map(doc => doc.data());
  return docs;
}

export const getImage = async (id: string) => {
  const fileRef = ref(storage, `images/${id}`);
  try {
    const fileUrl = await getDownloadURL(fileRef);
    return fileUrl;
  } catch (error) {
    console.error('Error getting file URL:', error);
    throw error;
  }
}