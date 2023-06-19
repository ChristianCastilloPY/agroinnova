import { IDeviceMetric } from "../../models/IDevice"

export default function StatusColor({
  maxTemp,
  minTemp,
  lastTempUpdate
}: IDeviceMetric) {
  const isTempOk = lastTempUpdate <= maxTemp && lastTempUpdate >= minTemp
  
  return (
    <>
      {/* TODO Add Online status */}
      {/* TODO Add Colors */}
      <div>
        {isTempOk ? 'Temp Ok' : 'Temp Not Ok'}
      </div>
    </>
  )
}