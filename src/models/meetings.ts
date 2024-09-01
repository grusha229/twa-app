import { IProfileLightModel, ProfileProfessionalFieldEnum } from "./profile";

/** Интерфейс данных о встрече */
export interface IMeetingModel {
    title: string,
    awaiting: IProfileLightModel[],
    blocked: IProfileLightModel[],
    description: string,
    id: string,
    location: IMeetingLocationModel,
    owner: IProfileLightModel,
    participants: IProfileLightModel[],
    restriction: IMeetingRestrictionsModel,
    schedule: IMeetingScheduleModel,
    status: MeetingStatusEnum,
};

export interface IMeetingLocationModel {
    city: string;
    address: string;
}

export interface IMeetingRestrictionsModel {
    age_range: any,
    capacity: number,
    professional_field: ProfileProfessionalFieldEnum[]
}

export interface IMeetingScheduleModel {
    date: string,
    end_time: string,
    start_time: string,
}

/** ENUM статусов встречи */
export enum MeetingStatusEnum {
    SCHEDULED = 'scheduled',
    IN_PROGRESS = 'in_progress',
    FINISHED = 'finished',
    CANCELED = 'cancelled'
}