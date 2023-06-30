import devices from "../mockdata/devices";
import { IDevice } from "../models/IDevice";
import Table, { ColumnsProps } from "../components/Table";
import StatusColor from "../components/StatusColor";
import DeviceFormModal from "../components/DeviceFormModal";

import { useState } from "react";
import useSetModal from "../hooks/useSetModal";

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
    valueGetter: ({ row }) => (
      <StatusColor
        maxTemp={row.maxTemp}
        minTemp={row.minTemp}
        lastTempUpdate={row.lastTempUpdate}
        idClient={row.idClient}
      />
    ),
  },
];

export default function Devices() {
  const { isOpenModal, setModalUpdate } = useSetModal();
  const [currentDevice, setCurrentDevice] = useState<IDevice>({} as IDevice);

  const handleOnSelectedRow = (device: IDevice) => {
    setCurrentDevice(device);
    setModalUpdate(true);
  };

  const handleModalClose = () => {
    setModalUpdate(false);
  };

  const handleOnSubmitForm = (
    event: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>,
    device: IDevice
  ) => {
    event.preventDefault();
    console.log(device);
  };

  return (
    <>
      <Table
        columns={DeviceColumns}
        rows={devices}
        variant="normal"
        onSelectedRow={handleOnSelectedRow}
      />
      {isOpenModal && (
        <DeviceFormModal
          device={currentDevice}
          open={isOpenModal}
          modalOpen={() => {}}
          modalClose={handleModalClose}
          onSubmit={handleOnSubmitForm}
        />
      )}
    </>
  );
}
