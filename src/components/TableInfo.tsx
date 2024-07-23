export default function TableInfo() {
  return (
    <div className="overflow-x-auto">
      <table className="table bg-white px-5">
        {/* head */}
        <thead className="bg-gray-100">
          <tr>
            <th>Branch</th>
            <th>Date</th>
            <th>Time</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Purple</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
