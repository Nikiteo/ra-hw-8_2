import useJsonFetch from "../hooks/useJsonFetch";

export default function Component(props) {
  const [data, isLoading, error] = useJsonFetch(props.url);

  return (
    <div className="component">
      <h1>{props.title}</h1>
      <div className="component-url">{props.url}</div>
      <div className="component-ok">{data.status}</div>
      {isLoading && <div className="component-load">Загрузка...</div>}
      {error && <div className="component-error">{error.toString()}</div>}
    </div>
  );
}