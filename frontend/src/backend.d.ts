import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ContactInfo {
    tiktokColor: string;
    alternatePhone: string;
    youTubeColor: string;
    email: string;
    tiktokIcon: string;
    youTubeUrl: string;
    address: string;
    facebookColor: string;
    facebookIcon: string;
    primaryPhone: string;
    facebookUrl: string;
    footerText: string;
    tiktokUrl: string;
    youTubeIcon: string;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface Service {
    id: bigint;
    nameBn: string;
    nameEn: string;
    descriptionBn: string;
    descriptionEn: string;
}
export interface SocialMediaLink {
    url: string;
    icon: string;
    name: string;
    platform: string;
    isActive: boolean;
}
export interface Course {
    id: bigint;
    descriptionBn: string;
    descriptionEn: string;
    titleBn: string;
    titleEn: string;
}
export interface DrivingSchoolProfile {
    owner: string;
    name: string;
    alternatePhone: string;
    registrationNumber: string;
    email: string;
    website: string;
    addressBn: string;
    addressEn: string;
    registrationTextBn: string;
    registrationTextEn: string;
    phone: string;
    taglineBn: string;
    taglineEn: string;
}
export interface GalleryImage {
    id: bigint;
    blob: ExternalBlob;
    name: string;
    description: string;
}
export interface TeamMember {
    id: bigint;
    name: string;
    positionBn: string;
    positionEn: string;
}
export interface DriverDocument {
    id: bigint;
    blob: ExternalBlob;
    name: string;
    description: string;
}
export interface WebsiteContent {
    aboutUsBn: string;
    aboutUsEn: string;
    taglineBn: string;
    taglineEn: string;
}
export interface StudentRecord {
    id: bigint;
    studentName: string;
    admissionDate: string;
    createdAt: Time;
    reference: string;
    fathersName: string;
    totalFee: bigint;
    courseDuration: CourseDuration;
    updatedAt: Time;
    address: string;
    phoneNumber: string;
    paidAmount: bigint;
    courseType: CourseType;
    remarks: string;
    dueAmount: bigint;
}
export interface UserProfile {
    name: string;
    email: string;
    phone: string;
}
export interface RegistrationInquiry {
    name: string;
    message: string;
    address: string;
    timestamp: Time;
    phone: string;
    course: string;
}
export enum CourseDuration {
    thirtyDays = "thirtyDays",
    sixtyDays = "sixtyDays"
}
export enum CourseType {
    car = "car",
    motorcycle = "motorcycle"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addDocument(blob: ExternalBlob, name: string, description: string): Promise<void>;
    addGalleryImage(blob: ExternalBlob, name: string, description: string): Promise<void>;
    addStudentRecord(studentName: string, fathersName: string, phoneNumber: string, address: string, courseType: CourseType, courseDuration: CourseDuration, totalFee: bigint, paidAmount: bigint, reference: string, admissionDate: string, remarks: string): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    cleanupOldEntries(days: bigint): Promise<void>;
    clearFormEntries(): Promise<void>;
    deleteStudentRecord(id: bigint): Promise<void>;
    getAllContactSubmissionsSorted(sortBy: bigint): Promise<Array<ContactSubmission>>;
    getAllCourses(): Promise<Array<Course>>;
    getAllRegistrationInquiriesSorted(sortBy: bigint): Promise<Array<RegistrationInquiry>>;
    getAllServices(): Promise<Array<Service>>;
    getAllStudentRecords(): Promise<Array<StudentRecord>>;
    getAllTeamMembers(): Promise<Array<TeamMember>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<ContactInfo>;
    getCourseById(id: bigint): Promise<Course>;
    getDocuments(): Promise<Array<DriverDocument>>;
    getGalleryImages(): Promise<Array<GalleryImage>>;
    getSchoolProfile(): Promise<DrivingSchoolProfile>;
    getSocialMediaLinks(): Promise<Array<SocialMediaLink>>;
    getStudentRecordsSorted(sortBy: bigint): Promise<Array<StudentRecord>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getWebsiteContent(): Promise<WebsiteContent>;
    initializeData(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setSocialMediaLinks(): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
    submitRegistrationInquiry(name: string, phone: string, address: string, course: string, message: string): Promise<void>;
    updateCourse(id: bigint, titleEn: string, descriptionEn: string, titleBn: string, descriptionBn: string): Promise<void>;
    updateService(id: bigint, nameEn: string, descriptionEn: string, nameBn: string, descriptionBn: string): Promise<void>;
    updateSocialMediaLink(id: bigint, platform: string, url: string, icon: string, name: string, isActive: boolean): Promise<void>;
    updateStudentRecord(id: bigint, updatedRecord: StudentRecord): Promise<void>;
    updateTeamMember(id: bigint, name: string, positionEn: string, positionBn: string): Promise<void>;
}
