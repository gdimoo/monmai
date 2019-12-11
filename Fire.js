import firebase from "firebase";
// import { database } from 'firebase/app'
require("firebase/firestore");

class Fire {
    constructor() {
        var firebaseConfig = {
            apiKey: "AIzaSyBf0V83nJydmwNjmICEq7fXBkLqXu-RVPQ",
            authDomain: "monmai-19a02.firebaseapp.com",
            databaseURL: "https://monmai-19a02.firebaseio.com",
            projectId: "monmai-19a02",
            storageBucket: "monmai-19a02.appspot.com",
            messagingSenderId: "144182517551",
            appId: "1:144182517551:web:fdf1dcbab8f7e7b475cbda",
            measurementId: "G-WVXGTR0FPP"
          }; //ประกาศเพื่อระบุตัวตนแอพกับฐานข้อมูล
        
          firebase.initializeApp(firebaseConfig); //ทำการเชื่อมกับฐานข้อมูล
    }
    
    addPost = async ({ 
        No,
        nameTH,
        Commonname,
        Sciname,
        Family,
        Plantpart,
        shade,
        localUri,
        localUri2,
        localUri3 }) => {
        const remoteUri = await this.uploadPhotoAsync(localUri, `photos/${No}/1`);
        const remoteUri2 = await this.uploadPhotoAsync(localUri2, `photos/${No}/2`);
        const remoteUri3 = await this.uploadPhotoAsync(localUri3, `photos/${No}/3`);
        

        return new Promise((res, rej) => {
            this.firestore
                .collection("posts")
                .add({
                    No,
        nameTH,
        Commonname,
        Sciname,
        Family,
        Plantpart,
        shade,
                    image: remoteUri,
                    image2: remoteUri2,
                    image3: remoteUri3,
                })
                .then(ref => {
                    res(ref);
                    
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    uploadPhotoAsync = (uri, filename) => {
        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase
                .storage()
                .ref(filename)
                .put(file);

            upload.on(
                "state_changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        });
    };

    createUser = async user => {
        let remoteUri = null;

        try {
            await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);

            let db = this.firestore.collection("users").doc(this.uid);

            db.set({
                name: user.name,
                email: user.email,
                avatar: null
            });

            if (user.avatar) {
                remoteUri = await this.uploadPhotoAsync(user.avatar, `avatars/${this.uid}`);

                db.set({ avatar: remoteUri }, { merge: true });
            }
        } catch (error) {
            alert("Error: ", error);
        }
    };

    signOut = () => {
        firebase.auth().signOut();
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
    // getByQuery = async() => {
    //     let db = this.firestore
    //     .collection('posts').get()
    //     .then(querySnapshot => {
    //       const data = querySnapshot.docs.map(doc => doc.data());
    //     //   for (let dataObject of data) {
    //     //     // console.log(dataObject.Commonname);
    //     // }
    //     this.setState({posts: querySnapshot.docs.map(doc => doc.data())});
    //       console.log(posts); // array of cities objects
    //         return posts;
    //     });

    //   }
}

Fire.shared = new Fire();
export default Fire;
