export interface IDeviceMetric {
    maxTemp: number;
    minTemp: number;
    lastTempUpdate: number;
}

export interface IDevice extends IDeviceMetric {
    idClient: string;
    name: string;
    host: string;
    port: number;
    token: string;
    description: string;
}
