export interface PlaceData {
  data: {
    id: string;
    type: 'route' | 'stop' | 'trip';
  };
}

export interface ScheduleAttributes {
  arrival_time: string;
  departure_time: string;
}

export interface ScheduleRelationships {
  stop: PlaceData;
  trip: PlaceData;
}

export interface Schedule {
  id: string;
  attributes: ScheduleAttributes;
  relationships: ScheduleRelationships;
}

export interface ScheduleResponse {
  data: Schedule[];
}
