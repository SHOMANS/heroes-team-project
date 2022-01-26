import { FC } from "react";
import { IOrder, IProduct, IUser } from "../../../Store/Types";
import Button from "../../Elements/Buttons";
import DeleteIcon from "../../Icons/DeleteIcon";
import EditIcon from "../../Icons/EditIcon";

interface IProps {
  data?: IProduct[];
  handleDeleteRow: Function;
  handleEditRow: Function;
  create?: string;
}

const Products: FC<IProps> = ({ data, handleDeleteRow, handleEditRow }) => {
  return (
    <>
      {data?.map((row) => (
        <tbody key={row._id}>
          <tr>
            <th>{row._id}</th>
            <th>{row.name}</th>
            <th>{row.price}</th>
            <th>{row.categories.map((cat) => cat + ", ")}</th>
            <th>
              <Button
                padding="3px"
                bold
                height=""
                width=""
                backgroundColor="#FFFFFF"
                margin="0 10px 0 0"
                onClick={() => handleEditRow(row._id)}
              >
                <EditIcon />
              </Button>
              <Button
                padding="3px"
                bold
                height=""
                width=""
                backgroundColor="#FC4059"
                onClick={() => handleDeleteRow(row._id, row.name)}
              >
                <DeleteIcon />
              </Button>
            </th>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default Products;
