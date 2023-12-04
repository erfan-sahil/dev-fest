import React from 'react';

const TeacherProfile = () => {
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
        <td>Abul Kasehm</td>
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
        <td>Teacher</td>
        <td>Math</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default TeacherProfile;