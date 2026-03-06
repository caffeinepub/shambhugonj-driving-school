import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Initialize access control
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Course = {
    id : Nat;
    titleEn : Text;
    descriptionEn : Text;
    titleBn : Text;
    descriptionBn : Text;
  };

  type TeamMember = {
    id : Nat;
    name : Text;
    positionEn : Text;
    positionBn : Text;
  };

  type Service = {
    id : Nat;
    nameEn : Text;
    descriptionEn : Text;
    nameBn : Text;
    descriptionBn : Text;
  };

  type GalleryImage = {
    id : Nat;
    blob : Storage.ExternalBlob;
    name : Text;
    description : Text;
  };

  type SocialMediaLink = {
    platform : Text;
    url : Text;
    icon : Text;
    name : Text;
    isActive : Bool;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type RegistrationInquiry = {
    name : Text;
    phone : Text;
    address : Text;
    course : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type WebsiteContent = {
    aboutUsEn : Text;
    aboutUsBn : Text;
    taglineEn : Text;
    taglineBn : Text;
  };

  public type DrivingSchoolProfile = {
    name : Text;
    owner : Text;
    registrationNumber : Text;
    registrationTextEn : Text;
    registrationTextBn : Text;
    taglineEn : Text;
    taglineBn : Text;
    phone : Text;
    alternatePhone : Text;
    email : Text;
    addressEn : Text;
    addressBn : Text;
    website : Text;
  };

  public type StudentRecord = {
    id : Nat;
    studentName : Text;
    fathersName : Text;
    phoneNumber : Text;
    address : Text;
    courseType : CourseType;
    courseDuration : CourseDuration;
    totalFee : Nat;
    paidAmount : Nat;
    dueAmount : Nat;
    reference : Text;
    admissionDate : Text;
    remarks : Text;
    createdAt : Time.Time;
    updatedAt : Time.Time;
  };

  public type CourseType = {
    #car;
    #motorcycle;
  };

  public type CourseDuration = {
    #thirtyDays;
    #sixtyDays;
  };

  type DriverDocument = {
    id : Nat;
    blob : Storage.ExternalBlob;
    name : Text;
    description : Text;
  };

  public type UserProfile = {
    name : Text;
    email : Text;
    phone : Text;
  };

  type ContactInfo = {
    address : Text;
    primaryPhone : Text;
    alternatePhone : Text;
    email : Text;
    facebookUrl : Text;
    youTubeUrl : Text;
    tiktokUrl : Text;
    facebookIcon : Text;
    youTubeIcon : Text;
    tiktokIcon : Text;
    facebookColor : Text;
    youTubeColor : Text;
    tiktokColor : Text;
    footerText : Text;
  };

  let initialCourses = [
    {
      id = 1;
      titleEn = "Car Driving Training";
      descriptionEn = "Comprehensive car driving lessons for beginners and advanced drivers.";
      titleBn = "কার ড্রাইভিং প্রশিক্ষণ";
      descriptionBn = "নতুন এবং অভিজ্ঞ চালকদের জন্য সম্পূর্ণ কার ড্রাইভিং প্রশিক্ষণ।";
    },
    {
      id = 2;
      titleEn = "Motorcycle Driving Training";
      descriptionEn = "Professional motorcycle driving training for all riders.";
      titleBn = "মোটরসাইকেল ড্রাইভিং প্রশিক্ষণ";
      descriptionBn = "সব চালকদের জন্য পেশাদার মোটরসাইকেল ড্রাইভিং প্রশিক্ষণ।";
    },
    {
      id = 3;
      titleEn = "Theory Class";
      descriptionEn = "In-depth theory sessions covering traffic rules and road safety.";
      titleBn = "থিওরি ক্লাস";
      descriptionBn = "ট্রাফিক নিয়ম ও সড়ক নিরাপত্তা বিষয়ে গভীর থিওরি ক্লাস।";
    },
    {
      id = 4;
      titleEn = "Practical Training";
      descriptionEn = "Hands-on practical driving lessons with experienced instructors.";
      titleBn = "প্র্যাকটিক্যাল প্রশিক্ষণ";
      descriptionBn = "অভিজ্ঞ প্রশিক্ষকদের দ্বারা হাতে-কলমে ড্রাইভিং প্রশিক্ষণ।";
    },
  ];

  let initialTeamMembers = [
    {
      id = 1;
      name = "Md. Shahidul Islam";
      positionEn = "Chief Instructor";
      positionBn = "প্রধান প্রশিক্ষক";
    },
    { id = 2; name = "Kawsar"; positionEn = "Driving Instructor"; positionBn = "ড্রাইভিং প্রশিক্ষক" },
    { id = 3; name = "Babul"; positionEn = "Office Assistant"; positionBn = "অফিস সহকারী" },
    { id = 4; name = "Mostafa"; positionEn = "Marketing Officer"; positionBn = "মার্কেটিং অফিসার" },
    {
      id = 5;
      name = "Mizanur Rahman Rocky";
      positionEn = "Manager";
      positionBn = "ম্যানেজার";
    },
  ];

  let initialServices = [
    {
      id = 1;
      nameEn = "Learner License";
      descriptionEn = "Assistance with obtaining learner licenses from BRTA.";
      nameBn = "লার্নার লাইসেন্স";
      descriptionBn = "বিআরটিএ থেকে লার্নার লাইসেন্স পেতে সহায়তা।";
    },
    {
      id = 2;
      nameEn = "Smart Card Driving License";
      descriptionEn = "Support for smart card driving license applications.";
      nameBn = "স্মার্ট কার্ড ড্রাইভিং লাইসেন্স";
      descriptionBn = "স্মার্ট কার্ড ড্রাইভিং লাইসেন্স আবেদন করার জন্য সহায়তা।";
    },
    {
      id = 3;
      nameEn = "BRTA Support";
      descriptionEn = "Complete BRTA support services for driving license processing.";
      nameBn = "বিআরটিএ সহায়তা";
      descriptionBn = "ড্রাইভিং লাইসেন্স প্রসেসিং এর জন্য সম্পূর্ণ বিআরটিএ সহায়তা।";
    },
    {
      id = 4;
      nameEn = "File Processing";
      descriptionEn = "Efficient file processing for all licensing needs.";
      nameBn = "ফাইল প্রসেসিং";
      descriptionBn = "সব ধরনের লাইসেন্স সংক্রান্ত ফাইল প্রসেসিং।";
    },
  ];

  let schoolProfile : DrivingSchoolProfile = {
    name = "Shambhugonj Driving School";
    owner = "Md. Hafizul Islam";
    registrationNumber = "Government Reg. No: 001/26";
    registrationTextEn = "Government Approved Driving School";
    registrationTextBn = "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক অনুমোদিত";
    taglineEn = "Skilled drivers are essential for road safety";
    taglineBn = "নিরাপদ সড়কের জন্য চাই দক্ষ চালক";
    phone = "01641-891417";
    alternatePhone = "01712727004";
    email = "shambhugonjdrivingschool@gmail.com";
    addressEn = "Rasulpur, Muktagacha, Mymensingh, Bangladesh";
    addressBn = "৩৩ নং ওয়ার্ড\nময়মনসিংহ সিটি কর্পোরেশন\nনেত্রকোনা রোড\nশম্ভুগঞ্জ সদর, ময়মনসিংহ";
    website = "https://shambhugonjdriving.com";
  };

  let websiteContent : WebsiteContent = {
    aboutUsEn = "Md. Shahidul Islam is a BRTA certified driving instructor. Shambhugonj Driving School provides professional car and motorcycle driving training. We also assist with learner license and smart card driving license applications.";
    aboutUsBn = "মোঃ শহিদুল ইসলাম বিআরটিএ অনুমোদিত চালক প্রশিক্ষক। শম্ভুগঞ্জ ড্রাইভিং স্কুলে কার ও মোটরসাইকেল চালনার প্রশিক্ষণ দেওয়া হয়। আমরা লার্নার লাইসেন্স ও স্মার্ট কার্ড ড্রাইভিং লাইসেন্স পেতে সহায়তা করি।";
    taglineEn = "Skilled drivers are essential for road safety";
    taglineBn = "নিরাপদ সড়কের জন্য চাই দক্ষ চালক";
  };

  let initialSocialMediaLinks = [
    {
      platform = "Facebook";
      url = "https://www.facebook.com/share/1G9d7Md2ZA/";
      icon = "facebook";
      name = "Facebook";
      isActive = true;
    },
    {
      platform = "Facebook Profile";
      url = "https://www.facebook.com/brtashahid";
      icon = "facebook";
      name = "Facebook";
      isActive = true;
    },
    {
      platform = "YouTube";
      url = "https://www.youtube.com/@brtashahid";
      icon = "youtube";
      name = "YouTube";
      isActive = true;
    },
    {
      platform = "TikTok";
      url = "https://www.tiktok.com/@brtashahid";
      icon = "tiktok";
      name = "TikTok";
      isActive = true;
    },
    {
      platform = "LinkedIn";
      url = "https://www.linkedin.com/in/md-shahidul-islam-4787a1248";
      icon = "linkedin";
      name = "LinkedIn";
      isActive = true;
    },
  ];

  let courses = Map.empty<Nat, Course>();
  let teamMembers = Map.empty<Nat, TeamMember>();
  let services = Map.empty<Nat, Service>();
  let contactSubmissions = Map.empty<Time.Time, ContactSubmission>();
  let registrationInquiries = Map.empty<Time.Time, RegistrationInquiry>();
  let galleryImages = Map.empty<Nat, GalleryImage>();
  let socialMediaLinks = Map.empty<Nat, SocialMediaLink>();
  let studentRecords = Map.empty<Nat, StudentRecord>();
  let documents = Map.empty<Nat, DriverDocument>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  var lastFileId = 0;
  var nextStudentId = 1;

  let contactInfo : ContactInfo = {
    address = "৩৩ নং ওয়ার্ড\nময়মনসিংহ সিটি কর্পোরেশন\nনেত্রকোনা রোড\nশম্ভুগঞ্জ সদর, ময়মনসিংহ";
    primaryPhone = "01712727004";
    alternatePhone = "01711775554";
    email = "shambhugonjdrivingschool@gmail.com";
    facebookUrl = "https://www.facebook.com/brtashahid";
    youTubeUrl = "https://www.youtube.com/@brtashahid";
    tiktokUrl = "https://www.tiktok.com/@brtashahid";
    facebookIcon = "facebook";
    youTubeIcon = "youtube";
    tiktokIcon = "tiktok";
    facebookColor = "#1877F2";
    youTubeColor = "#FF0000";
    tiktokColor = "#000000";
    footerText = "© 2026 শম্ভুগঞ্জ ড্রাইভিং স্কুল. All rights reserved.";
  };

  module ContactSubmission {
    public func compareByName(submission1 : ContactSubmission, submission2 : ContactSubmission) : Order.Order {
      Text.compare(submission1.name, submission2.name);
    };

    public func compareByMostRecent(submission1 : ContactSubmission, submission2 : ContactSubmission) : Order.Order {
      Int.compare(submission2.timestamp, submission1.timestamp);
    };
  };

  module RegistrationInquiry {
    public func compareByMostRecent(inquiry1 : RegistrationInquiry, inquiry2 : RegistrationInquiry) : Order.Order {
      Int.compare(inquiry2.timestamp, inquiry1.timestamp);
    };
  };

  module StudentRecord {
    public func compareByStudentName(record1 : StudentRecord, record2 : StudentRecord) : Order.Order {
      Text.compare(record1.studentName, record2.studentName);
    };

    public func compareByMostRecent(record1 : StudentRecord, record2 : StudentRecord) : Order.Order {
      Int.compare(record2.createdAt, record1.createdAt);
    };

    public func compareByCourseType(record1 : StudentRecord, record2 : StudentRecord) : Order.Order {
      switch (record1.courseType, record2.courseType) {
        case (#car, #motorcycle) { #less };
        case (#motorcycle, #car) { #greater };
        case (_) { #equal };
      };
    };

    public func compareByCourse(record1 : StudentRecord, record2 : StudentRecord) : Order.Order {
      Text.compare(record1.remarks, record2.remarks);
    };
  };

  include MixinStorage();

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profiles");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Admin-only: Content Management
  public shared ({ caller }) func addGalleryImage(blob : Storage.ExternalBlob, name : Text, description : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add gallery images");
    };
    lastFileId += 1;
    let image : GalleryImage = { id = lastFileId; blob; name; description };
    galleryImages.add(lastFileId, image);
  };

  public shared ({ caller }) func addDocument(blob : Storage.ExternalBlob, name : Text, description : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add documents");
    };
    lastFileId += 1;
    let doc : DriverDocument = { id = lastFileId; blob; name; description };
    documents.add(lastFileId, doc);
  };

  // Public: View content
  public query ({ caller }) func getGalleryImages() : async [GalleryImage] {
    galleryImages.values().toArray();
  };

  public query ({ caller }) func getDocuments() : async [DriverDocument] {
    documents.values().toArray();
  };

  public query ({ caller }) func getSocialMediaLinks() : async [SocialMediaLink] {
    socialMediaLinks.values().toArray();
  };

  // Admin-only: Update social media
  public shared ({ caller }) func updateSocialMediaLink(id : Nat, platform : Text, url : Text, icon : Text, name : Text, isActive : Bool) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update social media links");
    };
    let updatedLink : SocialMediaLink = {
      platform;
      url;
      icon;
      name;
      isActive;
    };
    socialMediaLinks.add(id, updatedLink);
  };

  public shared ({ caller }) func setSocialMediaLinks() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can set social media links");
    };
    for (i in Nat.range(0, initialSocialMediaLinks.size())) {
      socialMediaLinks.add(i + 1, initialSocialMediaLinks[i]);
    };
  };

  // Public: View school info
  public query ({ caller }) func getSchoolProfile() : async DrivingSchoolProfile {
    schoolProfile;
  };

  public query ({ caller }) func getWebsiteContent() : async WebsiteContent {
    websiteContent;
  };

  public query ({ caller }) func getAllCourses() : async [Course] {
    courses.values().toArray();
  };

  public query ({ caller }) func getCourseById(id : Nat) : async Course {
    switch (courses.get(id)) {
      case (null) { Runtime.trap("Course not found") };
      case (?course) { course };
    };
  };

  public query ({ caller }) func getAllTeamMembers() : async [TeamMember] {
    teamMembers.values().toArray();
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray();
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    contactInfo;
  };

  // Admin-only: View submissions (contains personal data)
  public query ({ caller }) func getAllContactSubmissionsSorted(sortBy : Nat) : async [ContactSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contact submissions");
    };
    let sortedByName = contactSubmissions.values().toArray().sort(ContactSubmission.compareByName);
    let sortedByMostRecent = contactSubmissions.values().toArray().sort(ContactSubmission.compareByMostRecent);

    switch (sortBy) {
      case (0) { sortedByName };
      case (1) { sortedByMostRecent };
      case (_) { Runtime.trap("Invalid sort option") };
    };
  };

  public query ({ caller }) func getAllRegistrationInquiriesSorted(sortBy : Nat) : async [RegistrationInquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view registration inquiries");
    };
    let sortedByMostRecent = registrationInquiries.values().toArray().sort(RegistrationInquiry.compareByMostRecent);

    switch (sortBy) {
      case (0) { sortedByMostRecent };
      case (_) { Runtime.trap("Invalid sort option") };
    };
  };

  // Public: Submit forms (visitors can submit)
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(Time.now(), submission);
  };

  public shared ({ caller }) func submitRegistrationInquiry(
    name : Text,
    phone : Text,
    address : Text,
    course : Text,
    message : Text,
  ) : async () {
    let inquiry : RegistrationInquiry = {
      name;
      phone;
      address;
      course;
      message;
      timestamp = Time.now();
    };
    registrationInquiries.add(Time.now(), inquiry);
  };

  // Admin-only: Data management
  public shared ({ caller }) func clearFormEntries() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can clear form entries");
    };
    contactSubmissions.clear();
    registrationInquiries.clear();
    studentRecords.clear();
    lastFileId := 0;
  };

  public shared ({ caller }) func updateCourse(id : Nat, titleEn : Text, descriptionEn : Text, titleBn : Text, descriptionBn : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update courses");
    };
    let updatedCourse : Course = {
      id;
      titleEn;
      descriptionEn;
      titleBn;
      descriptionBn;
    };
    courses.add(id, updatedCourse);
  };

  public shared ({ caller }) func updateTeamMember(id : Nat, name : Text, positionEn : Text, positionBn : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update team members");
    };
    let updatedMember : TeamMember = {
      id;
      name;
      positionEn;
      positionBn;
    };
    teamMembers.add(id, updatedMember);
  };

  public shared ({ caller }) func updateService(id : Nat, nameEn : Text, descriptionEn : Text, nameBn : Text, descriptionBn : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update services");
    };
    let updatedService : Service = {
      id;
      nameEn;
      descriptionEn;
      nameBn;
      descriptionBn;
    };
    services.add(id, updatedService);
  };

  public shared ({ caller }) func initializeData() : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can initialize data");
    };
    if (courses.isEmpty()) {
      for (course in initialCourses.values()) {
        courses.add(course.id, course);
      };
    };

    if (teamMembers.isEmpty()) {
      for (member in initialTeamMembers.values()) {
        teamMembers.add(member.id, member);
      };
    };

    if (services.isEmpty()) {
      for (service in initialServices.values()) {
        services.add(service.id, service);
      };
    };
  };

  public shared ({ caller }) func cleanupOldEntries(days : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can cleanup old entries");
    };
    let expirationTime = Time.now() - (days * 24 * 60 * 60 * 1000000000);

    let expiredContactTimes = List.empty<Time.Time>();
    for ((timestamp, _) in contactSubmissions.entries()) {
      if (timestamp < expirationTime) {
        expiredContactTimes.add(timestamp);
      };
    };
    for (timestamp in expiredContactTimes.values()) {
      contactSubmissions.remove(timestamp);
    };

    let expiredInquiryTimes = List.empty<Time.Time>();
    for ((timestamp, _) in registrationInquiries.entries()) {
      if (timestamp < expirationTime) {
        expiredInquiryTimes.add(timestamp);
      };
    };
    for (timestamp in expiredInquiryTimes.values()) {
      registrationInquiries.remove(timestamp);
    };
  };

  // Admin-only: Student record management (contains personal and financial info)
  public shared ({ caller }) func addStudentRecord(
    studentName : Text,
    fathersName : Text,
    phoneNumber : Text,
    address : Text,
    courseType : CourseType,
    courseDuration : CourseDuration,
    totalFee : Nat,
    paidAmount : Nat,
    reference : Text,
    admissionDate : Text,
    remarks : Text,
  ) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add student records");
    };

    let dueAmount = if (totalFee > paidAmount) { totalFee - paidAmount } else { 0 };

    let studentRecord : StudentRecord = {
      id = nextStudentId;
      studentName;
      fathersName;
      phoneNumber;
      address;
      courseType;
      courseDuration;
      totalFee;
      paidAmount;
      dueAmount;
      reference;
      admissionDate;
      remarks;
      createdAt = Time.now();
      updatedAt = Time.now();
    };

    studentRecords.add(nextStudentId, studentRecord);
    nextStudentId += 1;
    studentRecord.id;
  };

  public query ({ caller }) func getAllStudentRecords() : async [StudentRecord] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view student records");
    };
    studentRecords.values().toArray();
  };

  public query ({ caller }) func getStudentRecordsSorted(sortBy : Nat) : async [StudentRecord] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view student records");
    };
    let sortedByName = studentRecords.values().toArray().sort(StudentRecord.compareByStudentName);
    let sortedByMostRecent = studentRecords.values().toArray().sort(StudentRecord.compareByMostRecent);

    switch (sortBy) {
      case (0) { sortedByName };
      case (1) { sortedByMostRecent };
      case (_) { sortedByName };
    };
  };

  public shared ({ caller }) func updateStudentRecord(id : Nat, updatedRecord : StudentRecord) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update student records");
    };

    switch (studentRecords.get(id)) {
      case (null) {
        Runtime.trap("Student record not found");
      };
      case (?existingRecord) {
        let dueAmount = if (updatedRecord.totalFee > updatedRecord.paidAmount) {
          updatedRecord.totalFee - updatedRecord.paidAmount;
        } else { 0 };

        let recordWithUpdatedTimestamp : StudentRecord = {
          updatedRecord with
          id;
          dueAmount;
          createdAt = existingRecord.createdAt;
          updatedAt = Time.now();
        };

        studentRecords.add(id, recordWithUpdatedTimestamp);
      };
    };
  };

  public shared ({ caller }) func deleteStudentRecord(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete student records");
    };
    switch (studentRecords.get(id)) {
      case (null) {
        Runtime.trap("Student record not found");
      };
      case (?_) {
        studentRecords.remove(id);
      };
    };
  };
};
