const UserList = ({ Users }) => {
  return (
    <div>
     <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
            Users.map((user,index)=>{
               return <tr key={index}><td>{user.name}</td><td>{user.Email}</td></tr>
            })
        }
        </tbody>
     </table>
    </div>
  );
};

export default UserList;
