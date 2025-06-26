import "./style.css";

const Shape = ({ data, origin }: { data: string, origin: string }) => {
  const vertices = data.split(" ").reduce((acc: number[][], curr: string, i: number, arr: string[]) => {
    if (curr === "M" || curr === "L") {
      const x = parseFloat(arr[i + 1]);
      const y = parseFloat(arr[i + 2]);
      if (!isNaN(x) && !isNaN(y)) {
        acc.push([x, y]);
      }
    }
    return acc;
  }, []);

  return (
    <g style={{transformOrigin: origin}} className="path">
    {Array.from({length: 1}, (_, i) => {
        return (
        <g key={i} className="line">
        <line x1={0} y1={0} x2={200} y2={0}/>
        <line x1={0} y1={200} x2={200} y2={200}/>
        <line x1={0} y1={0} x2={0} y2={200}/>
        <line x1={200} y1={0} x2={200} y2={200}/>
        </g>
        );
    })}
    <path
      d={data}
    />
    {vertices.map((loc, i) => {
        return <circle key={i} cx={loc[0]} cy={loc[1]} r={5} className="circle" />;
    })}
    </g>
  );
};

const data_01 = ["M", 100, 100, "L", 0, 0, "L", 200, 0, "Z"].join(" ");
const data_02 = ["M", 100, 100, "L", 0, 200, "L", 200, 200, "Z"].join(" ");
const data_03 = ["M", 100, 100, "L", 0, 0, "L", 0, 200, "Z"].join(" ");
const data_04 = ["M", 100, 100, "L", 200, 200, "L", 200, 0, "Z"].join(" ");

const SVG = () => {
  return (
    <svg width="200px" height="200px" className="svg">
      <Shape data={data_01} origin="top" />
      <Shape data={data_02} origin="bottom" />
      <Shape data={data_03} origin="left" />
      <Shape data={data_04} origin="right" />
    </svg>
  );
};

export default SVG;
