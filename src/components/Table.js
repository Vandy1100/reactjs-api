
function Table({fetchData}) {
  return (
    <>
    <div className='container'>
      <div className='row'>
      <h1 className="text-center m-2">This Is My API</h1>
      <div className="col-12">
      <table className="table">
      <tbody >
      <tr className="bg-success">
        <th>ID</th>
        <th>Name</th>
        <th>Image</th>
        <th>creationAt</th>
        <th>updatedAt</th>
        </tr>
      </tbody>
        {
          fetchData.map(data=>
          <tbody key={data.id}>
            <tr>
            <th>{data.id}</th>
            <th>{data.name}</th>
            <th><img src={data.image} alt="Image" style={{width:'100px',height:'100px'}}/></th>
            <th>{data.creationAt}</th>
            <th>{data.updatedAt}</th>
            </tr>
          </tbody>
             )}
          </table>
      </div>
    </div>
    </div>
    </>
  )
}

export default Table