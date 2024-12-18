
const Insights = ({ analysis }) => {
  if (!analysis || analysis.length === 0) {
    return <div>No analysis available.</div>;
  }

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Analysis</h2>
      <ul>
        {analysis.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.category}:</strong> {item.details}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insights;
