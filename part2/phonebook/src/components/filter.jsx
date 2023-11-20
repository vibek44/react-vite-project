

const Filter=({handleSearch,search})=><>
filter persons:<input type="text" onChange={handleSearch} value={search} />
</>

export default Filter;