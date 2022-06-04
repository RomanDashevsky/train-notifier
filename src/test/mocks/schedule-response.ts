import { ScheduleResponse } from '../../app/notifier/types/schedule-response'

export const scheduleResponseMock: ScheduleResponse = {
  data: [
    {
      attributes: {
        arrival_time:"2022-06-04T05:14:00-04:00",
        departure_time:"2022-06-04T05:14:00-04:00"
      },
      id:"schedule-CR-528714-1501-WML-0035-30",
      relationships:{
        stop:{data:{id:"WML-0035",type:"stop"}},
        trip:{data:{id:"CR-528714-1501",type:"trip"}}
      }
    }
  ]
}
