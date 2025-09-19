
function Button(){

   let imageUrl = './src/bun.jpg';

   let handle = () => {
        alert("Button clicked");
   }
    return(
        <>
        <img src={imageUrl} alt="Button Image" className="img" onClick={handle}  />
        
        </>
    )
}
export default Button