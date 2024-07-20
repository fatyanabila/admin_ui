import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const MyDatatable = () => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, type),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [type]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, type, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "title", headerName: "Name", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <span
               className="deleteButton"
               onClick={() => handleDelete(params.row.id)}>
               Delete
             </span>
           </div>
         );
       },
     },
   ];
   
   return (
     <div className="mydatatable">
       <div className="mydatatableTitle">
         {type.toUpperCase()}
         <Link to={"/" + type + "/new"} className="link">
           Add New
         </Link>
       </div>
       <DataGrid
         className="datagrid"
         rows={data}
         columns={columns}
         initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;

