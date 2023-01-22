import GridItem from "../GridItem/GridItem";
import { Table } from "./StyledTable";

const GridTable = ({ arr }) => {
  return (
    <div>
      <Table>
        {arr.map((item) => (
          <GridItem
            key={item.id}
            name={item.name}
            date={item.dob}
            email={item.client_email}
            id={item.id}
          />
        ))}
      </Table>
    </div>
  );
};

export default GridTable;
