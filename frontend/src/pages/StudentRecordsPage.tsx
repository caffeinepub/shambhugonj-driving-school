import React, { useState, useContext } from 'react';
import { Plus, Edit, Trash2, Search, Loader2 } from 'lucide-react';
import { LanguageContext } from '../App';
import {
  useStudentRecords,
  useAddStudentRecord,
  useUpdateStudentRecord,
  useDeleteStudentRecord,
} from '../hooks/useQueries';
import { StudentRecord, CourseType, CourseDuration } from '../backend';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  filterStudentsByDate,
  filterStudentsByMonth,
  calculateReportTotals,
} from '../utils/studentReports';

type SortOption = 'name' | 'recent';

interface StudentFormData {
  studentName: string;
  fathersName: string;
  phoneNumber: string;
  address: string;
  courseType: CourseType;
  courseDuration: CourseDuration;
  totalFee: string;
  paidAmount: string;
  reference: string;
  admissionDate: string;
  remarks: string;
}

const emptyForm: StudentFormData = {
  studentName: '',
  fathersName: '',
  phoneNumber: '',
  address: '',
  courseType: CourseType.car,
  courseDuration: CourseDuration.thirtyDays,
  totalFee: '',
  paidAmount: '',
  reference: '',
  admissionDate: new Date().toISOString().split('T')[0],
  remarks: '',
};

export default function StudentRecordsPage() {
  const { language } = useContext(LanguageContext);
  const isBn = language === 'bn';

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('recent');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<StudentRecord | null>(null);
  const [formData, setFormData] = useState<StudentFormData>(emptyForm);
  const [reportFilter, setReportFilter] = useState<'all' | 'daily' | 'monthly'>('all');

  const { data: allRecords = [], isLoading } = useStudentRecords();
  const addMutation = useAddStudentRecord();
  const updateMutation = useUpdateStudentRecord();
  const deleteMutation = useDeleteStudentRecord();

  // Apply sort client-side
  const sortedRecords = [...allRecords].sort((a, b) => {
    if (sortBy === 'name') {
      return a.studentName.localeCompare(b.studentName);
    }
    // most recent first by createdAt
    return Number(b.createdAt) - Number(a.createdAt);
  });

  // Apply date filter
  const today = new Date().toISOString().split('T')[0];
  const yearMonth = today.slice(0, 7);

  const dateFilteredRecords =
    reportFilter === 'daily'
      ? filterStudentsByDate(sortedRecords, today)
      : reportFilter === 'monthly'
      ? filterStudentsByMonth(sortedRecords, yearMonth)
      : sortedRecords;

  // Apply search filter
  const filteredRecords = dateFilteredRecords.filter((r) => {
    return (
      r.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phoneNumber.includes(searchTerm) ||
      r.reference.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totals = calculateReportTotals(filteredRecords);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addMutation.mutateAsync({
        studentName: formData.studentName,
        fathersName: formData.fathersName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        courseType: formData.courseType,
        courseDuration: formData.courseDuration,
        totalFee: BigInt(formData.totalFee || '0'),
        paidAmount: BigInt(formData.paidAmount || '0'),
        reference: formData.reference,
        admissionDate: formData.admissionDate,
        remarks: formData.remarks,
      });
      setIsAddDialogOpen(false);
      setFormData(emptyForm);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingRecord) return;
    try {
      const updatedRecord: StudentRecord = {
        ...editingRecord,
        studentName: formData.studentName,
        fathersName: formData.fathersName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        courseType: formData.courseType,
        courseDuration: formData.courseDuration,
        totalFee: BigInt(formData.totalFee || '0'),
        paidAmount: BigInt(formData.paidAmount || '0'),
        dueAmount: BigInt(0),
        reference: formData.reference,
        admissionDate: formData.admissionDate,
        remarks: formData.remarks,
      };
      // useUpdateStudentRecord expects a StudentRecord directly
      await updateMutation.mutateAsync(updatedRecord);
      setIsEditDialogOpen(false);
      setEditingRecord(null);
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (record: StudentRecord) => {
    setEditingRecord(record);
    setFormData({
      studentName: record.studentName,
      fathersName: record.fathersName,
      phoneNumber: record.phoneNumber,
      address: record.address,
      courseType: record.courseType,
      courseDuration: record.courseDuration,
      totalFee: record.totalFee.toString(),
      paidAmount: record.paidAmount.toString(),
      reference: record.reference,
      admissionDate: record.admissionDate,
      remarks: record.remarks,
    });
    setIsEditDialogOpen(true);
  };

  const handleDelete = async (id: bigint) => {
    if (!confirm(isBn ? 'এই রেকর্ড মুছে ফেলবেন?' : 'Delete this record?')) return;
    try {
      await deleteMutation.mutateAsync(id);
    } catch (err) {
      console.error(err);
    }
  };

  const inputClass =
    'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all';

  const FormFields = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {(
        [
          { name: 'studentName', labelBn: 'শিক্ষার্থীর নাম', labelEn: 'Student Name', type: 'text' },
          { name: 'fathersName', labelBn: 'পিতার নাম', labelEn: "Father's Name", type: 'text' },
          { name: 'phoneNumber', labelBn: 'ফোন নম্বর', labelEn: 'Phone Number', type: 'tel' },
          { name: 'address', labelBn: 'ঠিকানা', labelEn: 'Address', type: 'text' },
          { name: 'reference', labelBn: 'রেফারেন্স', labelEn: 'Reference', type: 'text' },
          { name: 'admissionDate', labelBn: 'ভর্তির তারিখ', labelEn: 'Admission Date', type: 'date' },
          { name: 'totalFee', labelBn: 'মোট ফি', labelEn: 'Total Fee', type: 'number' },
          { name: 'paidAmount', labelBn: 'পরিশোধিত', labelEn: 'Paid Amount', type: 'number' },
        ] as const
      ).map((field) => (
        <div key={field.name}>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            {isBn ? field.labelBn : field.labelEn}
          </label>
          <input
            type={field.type}
            value={formData[field.name]}
            onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
            className={inputClass}
          />
        </div>
      ))}
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          {isBn ? 'কোর্সের ধরন' : 'Course Type'}
        </label>
        <select
          value={formData.courseType}
          onChange={(e) =>
            setFormData({ ...formData, courseType: e.target.value as CourseType })
          }
          className={inputClass}
        >
          <option value={CourseType.car}>{isBn ? 'কার' : 'Car'}</option>
          <option value={CourseType.motorcycle}>{isBn ? 'মোটরসাইকেল' : 'Motorcycle'}</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          {isBn ? 'কোর্সের মেয়াদ' : 'Course Duration'}
        </label>
        <select
          value={formData.courseDuration}
          onChange={(e) =>
            setFormData({ ...formData, courseDuration: e.target.value as CourseDuration })
          }
          className={inputClass}
        >
          <option value={CourseDuration.thirtyDays}>{isBn ? '৩০ দিন' : '30 Days'}</option>
          <option value={CourseDuration.sixtyDays}>{isBn ? '৬০ দিন' : '60 Days'}</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-xs font-medium text-gray-600 mb-1">
          {isBn ? 'মন্তব্য' : 'Remarks'}
        </label>
        <textarea
          value={formData.remarks}
          onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
          rows={2}
          className={inputClass}
        />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Page Header */}
      <section
        className="py-10 px-4"
        style={{ background: 'linear-gradient(135deg, #e8f0fe 0%, #f0f7ff 60%, #ffffff 100%)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1
              className="text-2xl sm:text-3xl font-bold font-bengali"
              style={{ color: '#0b3d91' }}
            >
              {isBn ? 'শিক্ষার্থী রেকর্ড' : 'Student Records'}
            </h1>
            <p className="text-gray-500 text-sm mt-1 font-bengali">
              {isBn
                ? 'সকল শিক্ষার্থীর তথ্য পরিচালনা করুন'
                : 'Manage all student information'}
            </p>
          </div>
          <button
            onClick={() => {
              setFormData(emptyForm);
              setIsAddDialogOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:shadow-md"
            style={{ backgroundColor: '#2d8a4e' }}
          >
            <Plus className="w-4 h-4" />
            {isBn ? 'নতুন শিক্ষার্থী' : 'Add Student'}
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            {
              labelBn: 'মোট শিক্ষার্থী',
              labelEn: 'Total Students',
              value: totals.totalStudents,
            },
            {
              labelBn: 'পরিশোধিত',
              labelEn: 'Total Paid',
              value: `৳${totals.totalPaid.toLocaleString()}`,
            },
            {
              labelBn: 'বকেয়া',
              labelEn: 'Total Due',
              value: `৳${totals.totalDue.toLocaleString()}`,
            },
            {
              labelBn: 'ফিল্টার',
              labelEn: 'Filter',
              value:
                reportFilter === 'daily'
                  ? isBn
                    ? 'আজকের'
                    : 'Today'
                  : reportFilter === 'monthly'
                  ? isBn
                    ? 'এই মাস'
                    : 'This Month'
                  : isBn
                  ? 'সব'
                  : 'All',
            },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs text-gray-500 font-bengali mb-1">
                {isBn ? stat.labelBn : stat.labelEn}
              </p>
              <p className="text-xl font-bold" style={{ color: '#0b3d91' }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  isBn ? 'নাম বা ফোন দিয়ে খুঁজুন...' : 'Search by name or phone...'
                }
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="recent">{isBn ? 'সাম্প্রতিক' : 'Most Recent'}</option>
              <option value="name">{isBn ? 'নাম অনুযায়ী' : 'By Name'}</option>
            </select>
            <select
              value={reportFilter}
              onChange={(e) =>
                setReportFilter(e.target.value as 'all' | 'daily' | 'monthly')
              }
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="all">{isBn ? 'সব' : 'All'}</option>
              <option value="daily">{isBn ? 'আজকের' : 'Today'}</option>
              <option value="monthly">{isBn ? 'এই মাসের' : 'This Month'}</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin" style={{ color: '#0b3d91' }} />
            </div>
          ) : filteredRecords.length === 0 ? (
            <div className="text-center py-16 text-gray-500 font-bengali">
              {isBn ? 'কোনো রেকর্ড পাওয়া যায়নি' : 'No records found'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: '#f0f4fb' }}>
                    {[
                      isBn ? 'নাম' : 'Name',
                      isBn ? 'ফোন' : 'Phone',
                      isBn ? 'কোর্স' : 'Course',
                      isBn ? 'মোট ফি' : 'Total Fee',
                      isBn ? 'পরিশোধিত' : 'Paid',
                      isBn ? 'বকেয়া' : 'Due',
                      isBn ? 'তারিখ' : 'Date',
                      isBn ? 'কার্যক্রম' : 'Actions',
                    ].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-semibold font-bengali"
                        style={{ color: '#0b3d91' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filteredRecords.map((record) => (
                    <tr
                      key={record.id.toString()}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900">{record.studentName}</div>
                        <div className="text-xs text-gray-500">{record.fathersName}</div>
                      </td>
                      <td className="px-4 py-3 text-gray-700">{record.phoneNumber}</td>
                      <td className="px-4 py-3">
                        <span
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium font-bengali"
                          style={{
                            backgroundColor:
                              record.courseType === CourseType.car ? '#e8f0fe' : '#e8f5ed',
                            color:
                              record.courseType === CourseType.car ? '#0b3d91' : '#2d8a4e',
                          }}
                        >
                          {record.courseType === CourseType.car
                            ? isBn
                              ? 'কার'
                              : 'Car'
                            : isBn
                            ? 'মোটরসাইকেল'
                            : 'Motorcycle'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        ৳{record.totalFee.toString()}
                      </td>
                      <td className="px-4 py-3 text-gray-700">
                        ৳{record.paidAmount.toString()}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="font-semibold"
                          style={{
                            color: record.dueAmount > BigInt(0) ? '#dc2626' : '#2d8a4e',
                          }}
                        >
                          ৳{record.dueAmount.toString()}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">
                        {record.admissionDate}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEdit(record)}
                            className="p-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                            style={{ color: '#0b3d91' }}
                            title={isBn ? 'সম্পাদনা' : 'Edit'}
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(record.id)}
                            className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-red-500"
                            title={isBn ? 'মুছুন' : 'Delete'}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-bengali" style={{ color: '#0b3d91' }}>
              {isBn ? 'নতুন শিক্ষার্থী যোগ করুন' : 'Add New Student'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAdd} className="space-y-4 mt-2">
            <FormFields />
            <button
              type="submit"
              disabled={addMutation.isPending}
              className="w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-all disabled:opacity-60"
              style={{ backgroundColor: '#2d8a4e' }}
            >
              {addMutation.isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {isBn ? 'যোগ করা হচ্ছে...' : 'Adding...'}
                </span>
              ) : isBn ? (
                'যোগ করুন'
              ) : (
                'Add Student'
              )}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-bengali" style={{ color: '#0b3d91' }}>
              {isBn ? 'তথ্য সম্পাদনা করুন' : 'Edit Student Record'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEdit} className="space-y-4 mt-2">
            <FormFields />
            <button
              type="submit"
              disabled={updateMutation.isPending}
              className="w-full py-2.5 rounded-lg font-semibold text-sm text-white transition-all disabled:opacity-60"
              style={{ backgroundColor: '#0b3d91' }}
            >
              {updateMutation.isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {isBn ? 'আপডেট হচ্ছে...' : 'Updating...'}
                </span>
              ) : isBn ? (
                'আপডেট করুন'
              ) : (
                'Update Record'
              )}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </main>
  );
}
