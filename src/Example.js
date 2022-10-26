import "./Style.css";
export function Example(props) {
  return (
    <>
      <p>{props.name}</p>

      <p className="variable">{props.lastname ? "Apellido" : "Nombre"}</p>
    </>
  );
}
