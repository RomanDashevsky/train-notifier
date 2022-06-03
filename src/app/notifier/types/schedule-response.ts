export interface PlaceData {
  data: {
    id: string;
    type: 'route' | 'stop' | 'trip';
  };
}

export interface Schedule {
  id: string;
  attributes: {
    arrival_time: string;
    departure_time: string;
  };
  relationships: {
    stop: PlaceData;
    trip: PlaceData;
  };
}

export interface ScheduleResponse {
  data: Schedule[];
}
