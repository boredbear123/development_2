import '../App.css';


export function SortButton({ sortFunction }) {

    return (
        <div>
            <button onClick={sortFunction} value={"Button"}>Sort by Price</button>
        </div>
    )
}