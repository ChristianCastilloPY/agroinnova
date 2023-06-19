import { IDevice } from "../models/IDevice";

const devices: IDevice[] = [
    {
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
        idClient: 'second-client',
        name: 'Sensor 2',
        host: 'http://localhost',
        port: 3030,
        token: '123abc',
        description: 'First test sensor',
        maxTemp: 50.0,
        minTemp: 20.0,
        lastTempUpdate: 60.0  
    },
    {
        idClient: 'third-client',
        name: 'Sensor 3',
        host: 'http://localhost',
        port: 3030,
        token: '123abc',
        description: 'First test sensor',
        maxTemp: 50.0,
        minTemp: 20.0,
        lastTempUpdate: 30.0  
    },
]

export default devices;