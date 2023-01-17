import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import '../styles/searchbar.css';

export function SearchBar () {
    return  (
        <div className="searchBox">
            <input type='text' className="searchBar-input"/>
            <div className="searchIcon">
                <BiSearch className="iconSearch"/>
            </div>
        </div>
    )
}