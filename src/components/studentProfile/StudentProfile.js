import React from 'react';

const StudentProfile = () => {
    return (
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Name</td>
        <td>Shakib Al Hasan</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Adress</td>
        <td>Dhaka,Bangladesh</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Class</td>
        <td>10</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>
    );
};

export default StudentProfile;