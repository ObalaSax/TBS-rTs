import React from "react";
import Grid from "gridjs";

import { UserData } from "../../../library/data/userData";

function Users() {
  return (
    <div className="users">
      <div className="users-container">
        <Grid
          data={UserData}
          columns={[
            { name: "ID", id: "id" },
            { name: "First Name", id: "firstName" },
            { name: "Last Name", id: "lastName" },
            { name: "Email", id: "email" },
            { name: "Phone", id: "phone" },
          ]}
        />
      </div>
      <h1>Kaende</h1>
    </div>
  );
}

export default Users;
