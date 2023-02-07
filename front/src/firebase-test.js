import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import { store } from './firebase-config';

const [actors, setActors] = useState([]);
const dbRef = collection(store, 'users');
const getList = async () => {
    const data = await getDocs(dbRef);
    setActors(data.docs.map( doc => {return ({...doc.data(), id : doc.id})}
    ))
}

const showActors = actors.map(
    (value) => (
        <div key={value.id}>
            {value.email}
        </div>
    )
)