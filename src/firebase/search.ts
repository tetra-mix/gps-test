import { db } from './config';
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";

export async function getDocIDbyProduct(product_id: number): Promise<string | null> {
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, where("id", "==", product_id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].id;
    } else {
        return null;
    }
}

export async function getDocIDbyUser(user_id: number): Promise<string | null> {
    const collectionRef = collection(db, "users");
    const q = query(collectionRef, where("id", "==", user_id));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].id;
    } else {
        return null;
    }
}

export async function getDocsbyProductData_increasing(what: string) {
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, orderBy("data." + what));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs; //配列
    } else {
        return null;
    }
}

export async function getDocsbyProductData_only(what: string, number: number) {
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, where("data." + what, "==", number));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs; //配列
    } else {
        return null;
    }
}

export async function getDocsbyString(what: string, text: string) {
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, where(what, "==", text));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs; //配列
    } else {
        return null;
    }
}