import GridItem from "../GridItem/GridItem";
import { Table } from "./StyledTable";

const GridTable = ({ arr }) => {
  return (
    <div>
      <Table>
        {arr.map((item, index) => (
          <GridItem
            key={item.id}
            name={item.name}
            date={item.dob}
            email={item.client_email}
          />
        ))}
      </Table>
    </div>
  );
};

export default GridTable;
