export default function Main(props) {
  const {data} = props
  return (
    <div className="imgcont">
      <img className="bgimage" src={data?.hdurl} />
    </div>
  );
}
