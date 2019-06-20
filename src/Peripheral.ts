import BLEPeripheral from "react-native-ble-peripheral";
import { v4 as uuidv4 } from "uuid";

class PrezenController {
  constructor(name: string = uuidv4()) {
    BLEPeripheral.setName(name);
    BLEPeripheral.addService(uuidv4(), true);
    BLEPeripheral.addCharacteristicToService(uuidv4(), uuidv4(), 15, 8, "foo"); //this is a Characteristic with read and write permissions and notify property
  }

  public stop(): void {
    BLEPeripheral.stop();
  }

  public start(): Promise<void> {
    return BLEPeripheral.start();
  }
}

export default PrezenController;
