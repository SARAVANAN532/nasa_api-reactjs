export default function Sidebar(props) {
const{toggle,data} = props

  return (
    <div className="maincont">
      <div className="sidebarcont">
        <h2 className="title">{data?.title}</h2>
        <div className="content">
          <p className="disc">Description</p>
          <p className="explanation">
            {data?.explanation}
          </p>
        </div>
      
      <button>
        <i onClick={toggle} className="fa-solid fa-arrow-right"></i>
      </button>
      </div>
      <div onClick={toggle} className="bgoverlay"></div>
      
    </div>
  );
}
