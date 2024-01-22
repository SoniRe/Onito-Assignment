import $ from "jquery";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTables = () => {
  const usersList = useSelector((store) => store.users.usersList);

  useEffect(() => {
    $("#my-table").DataTable();
  }, []);

  useEffect(() => {
    const table = $("#my-table").DataTable();
    table.clear();
    usersList.forEach((user) =>
      table.row.add([
        user.name,
        user.mobile,
        user.age,
        user.sex,
        user.address,
        user.city,
        user.country,
        user.pincode,
      ])
    );
    table.draw();
  }, [usersList]);
};

export default useTables;
