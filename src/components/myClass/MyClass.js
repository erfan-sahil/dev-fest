import React from 'react';

const MyClass = () => {
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Class Time</th>
        <th>Subject</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>8:30-9:30</td>
        <td>English</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>9:35-10:35</td>
        <td> Math </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>10:40</td>
        <td>Bangla</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyClass;