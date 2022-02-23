export interface TContacts {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
}

export interface TPhotos {
    small: string,
    large: string,
}

export interface TProfileData {
    aboutMe: string | null,
    contacts: TContacts,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string
    userId: number,
}

export interface TProfileDataPhotos extends TProfileData {
    photos: TPhotos,
}

export interface InitialStateType {
    profileData: TProfileDataPhotos | null,
    status: string,
}
