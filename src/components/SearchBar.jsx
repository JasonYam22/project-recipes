function SearchBar({query, setQuery}) {
    const handleSearch = (e) => {
setQuery(e.target.value);
    };

    return (
        <div className="search-bar container">
            <h2>Search Bar</h2>
            <input type="text" onChange={handleSearch} value={query}/>
        </div>
    )
}

export default SearchBar 