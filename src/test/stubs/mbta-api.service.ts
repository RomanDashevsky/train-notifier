import { scheduleResponseMock } from '../mocks/schedule-response'

const createSpy = jasmine.createSpy

export class MbtaApiServiceStub {
  getSchedule = createSpy().and.returnValue(scheduleResponseMock)
}
