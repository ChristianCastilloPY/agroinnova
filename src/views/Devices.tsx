import devices from "../mockdata/devices";
import { IDevice } from "../models/IDevice";
import Table, { ColumnsProps } from "../components/Table";
import StatusColor from "../components/StatusColor";

const DeviceColumns: ColumnsProps<IDevice>[] = [
  {
    label: "ID Client",
    align: "center",
    type: "id",
    field: "idClient",
    valueGetter: ({ row }) => row.idClient,
  },
  {
    label: "Name",
    align: "center",
    type: "text",
    field: "name",
    valueGetter: ({ row }) => row.name,
  },
  {
    label: "Description",
    align: "center",
    type: "text",
    field: "description",
    valueGetter: ({ row }) => row.description,
  },
  {
    label: "Status",
    align: "center",
    type: "component",
    field: "status",
    valueGetter: ({ row }) => <StatusColor {...row} />,
  }

]

export default function Devices() {
  return (
    <>
      {/* TODO Add modal with a form to modify data */}
      <Table
        columns={DeviceColumns}
        rows={devices}
        variant="normal"
      />
    </>
  );
}
