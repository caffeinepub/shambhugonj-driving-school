import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CourseDuration, CourseType } from "../backend";
import type {
  ContactInfo,
  ContactSubmission,
  Course,
  DrivingSchoolProfile,
  GalleryImage,
  RegistrationInquiry,
  Service,
  SocialMediaLink,
  StudentRecord,
  TeamMember,
  WebsiteContent,
} from "../backend";
import { useActor } from "./useActor";

export function useSchoolProfile() {
  const { actor, isFetching } = useActor();

  return useQuery<DrivingSchoolProfile>({
    queryKey: ["schoolProfile"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.getSchoolProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useWebsiteContent() {
  const { actor, isFetching } = useActor();

  return useQuery<WebsiteContent>({
    queryKey: ["websiteContent"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.getWebsiteContent();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useContactInfo() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactInfo>({
    queryKey: ["contactInfo"],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.getContactInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllCourses() {
  const { actor, isFetching } = useActor();

  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCourses();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllTeamMembers() {
  const { actor, isFetching } = useActor();

  return useQuery<TeamMember[]>({
    queryKey: ["teamMembers"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTeamMembers();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAllServices() {
  const { actor, isFetching } = useActor();

  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllServices();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSocialMediaLinks() {
  const { actor, isFetching } = useActor();

  return useQuery<SocialMediaLink[]>({
    queryKey: ["socialMediaLinks"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSocialMediaLinks();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGalleryImages() {
  const { actor, isFetching } = useActor();

  return useQuery<GalleryImage[]>({
    queryKey: ["galleryImages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryImages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}

export function useSubmitRegistrationInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      address: string;
      course: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitRegistrationInquiry(
        data.name,
        data.phone,
        data.address,
        data.course,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["registrationInquiries"] });
    },
  });
}

export function useInitializeData() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      await actor.initializeData();
      await actor.setSocialMediaLinks();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
      queryClient.invalidateQueries({ queryKey: ["teamMembers"] });
      queryClient.invalidateQueries({ queryKey: ["services"] });
      queryClient.invalidateQueries({ queryKey: ["socialMediaLinks"] });
      queryClient.invalidateQueries({ queryKey: ["contactInfo"] });
    },
  });
}

// Admin check
export function useIsAdmin() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      try {
        return await actor.isCallerAdmin();
      } catch {
        return false;
      }
    },
    enabled: !!actor && !isFetching,
  });
}

// Student Records Management (Admin Only)
export function useStudentRecords() {
  const { actor, isFetching } = useActor();
  const { data: isAdmin = false } = useIsAdmin();

  return useQuery<StudentRecord[]>({
    queryKey: ["studentRecords"],
    queryFn: async () => {
      if (!actor) return [];
      if (!isAdmin) return [];
      return actor.getAllStudentRecords();
    },
    enabled: !!actor && !isFetching && isAdmin,
  });
}

export function useAddStudentRecord() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      studentName: string;
      fathersName: string;
      phoneNumber: string;
      address: string;
      courseType: CourseType;
      courseDuration: CourseDuration;
      totalFee: bigint;
      paidAmount: bigint;
      reference: string;
      admissionDate: string;
      remarks: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.addStudentRecord(
        data.studentName,
        data.fathersName,
        data.phoneNumber,
        data.address,
        data.courseType,
        data.courseDuration,
        data.totalFee,
        data.paidAmount,
        data.reference,
        data.admissionDate,
        data.remarks,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentRecords"] });
    },
  });
}

export function useUpdateStudentRecord() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: StudentRecord) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.updateStudentRecord(data.id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentRecords"] });
    },
  });
}

export function useDeleteStudentRecord() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.deleteStudentRecord(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["studentRecords"] });
    },
  });
}
