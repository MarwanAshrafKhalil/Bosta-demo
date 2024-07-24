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
  TransitEvents: TransitEventsType[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: {
    dayDate: string;
    dayName: string;
  }[];
};

export type TransitEventsType = {
  state: string;
  timestamp: string;
  hub: string;
  reason: string;
};
