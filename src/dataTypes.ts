export type ShipmentDataType = {
  provider: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNubmers: string[];
  TransitEvents: {
    state: string;
    timestamp: string;
    hub: string;
  }[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: {
    dayDate: string;
    dayName: string;
  }[];
};
