import CustomModal, { ICustomModal } from "../CustomModal";

export interface DeviceFormModalProps extends ICustomModal {
  idDevice: string;
}

export default function DeviceFormModal({
  idDevice,
  children,
  open,
  modalOpen,
  modalClose,
  type,
}: DeviceFormModalProps) {

  // TODO
  return <>
    {/* <CustomModal
      children={<h1>test</h1>}
      open={isOpenModal}
      modalOpen={() => setModalUpdate(true)}
      modalClose={() => setModalUpdate(false)}
    /> */}
  </>
}
