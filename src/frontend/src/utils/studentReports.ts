import type { StudentRecord } from "../backend";

export function filterStudentsByDate(
  students: StudentRecord[],
  date: string,
): StudentRecord[] {
  return students.filter((s) => s.admissionDate === date);
}

export function filterStudentsByMonth(
  students: StudentRecord[],
  yearMonth: string,
): StudentRecord[] {
  return students.filter((s) => s.admissionDate.startsWith(yearMonth));
}

export function calculateReportTotals(students: StudentRecord[]) {
  return {
    totalStudents: students.length,
    totalPaid: students.reduce((sum, s) => sum + Number(s.paidAmount), 0),
    totalDue: students.reduce((sum, s) => sum + Number(s.dueAmount), 0),
  };
}
