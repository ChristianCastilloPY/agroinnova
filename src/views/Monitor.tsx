import DeviceStatusCard from "../components/DeviceStatusCard";

export default function Monitor() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: "20px",
      }}
    >
      <DeviceStatusCard
        deviceName="temp 1"
        type="temperature"
        value={25}
        lastValue={20}
      />
      <DeviceStatusCard
        deviceName="temp 2"
        type="temperature"
        value={22}
        lastValue={20}
      />
      <DeviceStatusCard
        deviceName="temp 3"
        type="temperature"
        value={30}
        lastValue={28}
      />
      <DeviceStatusCard
        deviceName="temp 4"
        type="temperature"
        value={29}
        lastValue={24}
      />
      <DeviceStatusCard
        deviceName="temp 5"
        type="temperature"
        value={35}
        lastValue={20}
      />
      <DeviceStatusCard
        deviceName="humidity 1"
        type="humidity"
        value={50}
        lastValue={41}
      />
      <DeviceStatusCard
        deviceName="humidity 2"
        type="humidity"
        value={23}
        lastValue={12}
      />
      <DeviceStatusCard
        deviceName="humidity 3"
        type="humidity"
        value={56}
        lastValue={45}
      />
      <DeviceStatusCard
        deviceName="humidity 4"
        type="humidity"
        value={34}
        lastValue={40}
      />
      <DeviceStatusCard
        deviceName="humidity 5"
        type="humidity"
        value={15}
        lastValue={20}
      />
      <DeviceStatusCard
        deviceName="earth 1"
        type="earth"
        value={3}
        lastValue={2.5}
      />
      <DeviceStatusCard
        deviceName="earth 2"
        type="earth"
        value={2}
        lastValue={3.1}
      />
      <DeviceStatusCard
        deviceName="earth 3"
        type="earth"
        value={3}
        lastValue={2.5}
      />
      <DeviceStatusCard
        deviceName="phosphate 1"
        type="phosphate"
        value={0.5}
        lastValue={0.6}
      />
      <DeviceStatusCard
        deviceName="phosphate 2"
        type="phosphate"
        value={0.4}
        lastValue={0.7}
      />
    </div>
  );
}
