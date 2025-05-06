export const filteredRestraunt =(searchText,RestruantList)=>{
    const filterData = RestruantList.filter((e)=>{
        return e.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return filterData;
}