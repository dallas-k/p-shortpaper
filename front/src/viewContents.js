import Contents from './contents.json';
import Footer from './component/footer';

function ViewContents(){
    const searchQuery = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            <main>
                <select>
                    <option value='hyunjae'>현재</option>
                </select>
                <input onChange={searchQuery} />
            </main>
            <Footer />
        </>
    )
}

export default ViewContents