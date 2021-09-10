export enum UserRoles {
    SuperAdmin = 'super-admin',
    Admin = 'admin',
    User = 'user',
  }
  
  export enum UserTypes {
    Examiner = 'examiner',
    Test_Taker = 'test_taker',
  }
  
  export enum AssessmentStatus {
    Active = 'active',
    Completed = 'completed',
    Missed = 'missed',
    Inactive = 'inactive',
  }

  export enum AssessmentType {
    Technical = 'technical',
    Aptitude = 'aptitude',
    Logical = 'logical'
  }
  
  export const UserRolesEnums = Object.values(UserRoles);
  export const UserTypesEnums = Object.values(UserTypes);
  export const AssessmentStatusEnum = Object.values(AssessmentStatus);
  export const AssessmentTypeEnums = Object.values(AssessmentType);