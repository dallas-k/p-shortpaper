import Contents from './contents.json';

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
        </>
    )
}

export default ViewContents