import { IDeviceMetric } from "../../models/IDevice"
import { deviceIsOnline } from "../../mockdata/devices";
import statusColors from "../../utils/statusColors";
import CircleIcon from '@mui/icons-material/Circle';

interface IStatusColorParams extends IDeviceMetric {
  idClient: string;
}

export default function StatusColor({
  idClient,
  maxTemp,
  minTemp,
  lastTempUpdate
}: IStatusColorParams) {
  const isOnline = deviceIsOnline(idClient)
  const isTempOk = lastTempUpdate <= maxTemp && lastTempUpdate >= minTemp

  return (
    <>
      {
        isOnline ?
          (
            isTempOk ?
              <CircleIcon style={{color: statusColors.online}}/>
              : <CircleIcon style={{color: statusColors.warning}} />
          )
          : <CircleIcon style={{color: statusColors.offline}} />
      }
    </>
  )
}