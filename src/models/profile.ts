/** Интерфейс Light-данных о пользователе */
export interface IProfileLightModel {
    /** Имя */
    name: string,
    /** Фамилия */
    surname: string,
    /** Пол */
    sex: string,
    /** id пользователя */
    id: string,
}

/** Интерфейс всех данных о пользователе */
export interface IProfileModel  extends IProfileLightModel {
    /** Доп информация из профиля */
    about: string,
    /** Возраст */
    age: number,
    /** Доп информация об аутентификации */
    authentication: any,
    /** Список аватарок */
    avatars: string[],
    /** Список ссылок на соцсети? */
    links: string[],
    /** Город */
    location: string,
    /** Сфера деятельности */
    occupation: ProfileProfessionalFieldEnum
}

/** ENUM сфер деятельности */
export enum ProfileProfessionalFieldEnum {
    SOFTWARE_DEVELOPMENT = 'Software Development',
    DATA_SCIENCE = 'Data Science',
    //TODO Заполнить всё
}