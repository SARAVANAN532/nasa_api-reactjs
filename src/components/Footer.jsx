export default function Footer(props) {
  
  const {toggle,data} = props
  return (
    <footer>
      <div className="grad"></div>
      <div>
      <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
        
      </div>
      <button>
        <i onClick={toggle} className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
