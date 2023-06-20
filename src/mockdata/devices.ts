import { IDevice, IDeviceOnlineStatus } from "../models/IDevice";

const devices: IDevice[] = [
    {
        idDevice: 'first-device',
        idClient: 'first-client',
        name: 'Sensor 1',
        host: 'http://localhost',
        port: 3030,
        token: '123abc',
        description: 'First test sensor',
        maxTemp: 50.0,
        minTemp: 20.0,
        lastTempUpdate: 30.0  
    },
    {
        idDevice: 'second-device',
        idClient: 'second-client',
        name: 'Sensor 2',
        host: 'http://localhost',
        port: 3030,
        token: '123abc',
        description: 'second test sensor',
        maxTemp: 50.0,
        minTemp: 20.0,
        lastTempUpdate: 60.0  
    },
    {
        idDevice: 'third-device',
        idClient: 'third-client',
        name: 'Sensor 3',
        host: 'http://localhost',
        port: 3030,
        token: '123abc',
        description: 'Third test sensor',
        maxTemp: 50.0,
        minTemp: 20.0,
        lastTempUpdate: 30.0  
    },
]

export function deviceIsOnline(idClient: string): boolean {
    const onlineTable: IDeviceOnlineStatus = {
        'first-client': true,
        'second-client': true,
        'third-client': false,
    }

    return onlineTable[idClient] || false;
}

export default devices;