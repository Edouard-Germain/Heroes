
const Modify = () =>{
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div>
            {/*ternaire et toggle */}
            <form onSubmit={handleSubmit}>
                <label>Hero update</label>
                <input type='text'></input>
                <input type='text'></input>
                <input type='text'></input>
            </form>
        </div>
    )
}
export default Modify 