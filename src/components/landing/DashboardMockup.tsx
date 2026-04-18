"use client";
import { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Building2,
  CreditCard,
  Receipt,
  Wrench,
  Bell,
  Search,
  Globe,
  MapPin,
  AlertCircle,
  Clock,
  CheckCircle2,
  Home,
  Briefcase,
  Users,
  Settings,
  PieChart,
  Phone,
  Mail,
  Link as LinkIcon,
  FileBadge2,
  Building,
  Calendar,
  MoreVertical,
  Trash2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  FileBarChart,
  RefreshCcw,
  Send,
  User,
  ArrowRightLeft,
  Lock,
  Activity,
  Wallet
} from 'lucide-react';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('الرئيسية');

  const generalItems = [
    { icon: LayoutDashboard, label: 'الرئيسية' },
    { icon: FileText, label: 'العقود' },
    { icon: Building2, label: 'العقارات' },
    { icon: CreditCard, label: 'المدفوعات' },
    { icon: Receipt, label: 'الإيصالات' },
    { icon: Wrench, label: 'المصروفات' },
  ];

  const officeItems = [
    { icon: Briefcase, label: 'لوحة المكتب العقاري' },
    { icon: Bell, label: 'التذكيرات' },
    { icon: FileBarChart, label: 'التقارير' },
  ];

  const renderDashboardOverview = () => (
    <div className="animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-8">
        <div className="flex bg-white rounded-full items-center px-4 py-2 border border-gray-200/80 shadow-sm">
          <Calendar className="w-4 h-4 text-gray-500 ml-2" />
          <span className="text-gray-600 text-sm font-sans">Saturday, April 18, 2026</span>
        </div>
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-end gap-2">
            مرحباً بعودتك, محمد عبدالله <span className="text-xl">👋</span>
          </h1>
          <p className="text-gray-500 text-sm">نظرة عامة على نظام إدارة العقارات</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative flex flex-col justify-center items-center">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3">
            <FileText className="w-5 h-5" />
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">إجمالي العقود</p>
          <p className="text-3xl font-bold text-gray-900 font-sans">142</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative flex flex-col justify-center items-center">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">العقود النشطة</p>
          <p className="text-3xl font-bold text-gray-900 font-sans">128</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative flex flex-col justify-center items-center">
          <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-3">
            <AlertCircle className="w-5 h-5" />
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">العقود المنتهية</p>
          <p className="text-3xl font-bold text-gray-900 font-sans">14</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-[#f9fafa] rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col pt-6 px-6 relative h-72">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-16">
            <Clock className="w-4 h-4 text-orange-400" /> العقود التي تنتهي قريبًا
          </h3>
          <div className="flex-1 flex flex-col gap-3 pb-2 w-full mt-2">
            <div className="bg-white border border-red-100 rounded-lg p-3 shadow-sm w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-red-500"></div>
              <h4 className="font-bold text-gray-900 text-xs mb-1">شركة الرؤية المتقدمة لتقنية المعلومات</h4>
              <div className="flex justify-between items-center text-[10px] text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-red-400" /> برج العليا الإداري</span>
                <span className="font-sans font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">SAR 850k</span>
              </div>
            </div>
            <div className="bg-white border border-red-100 rounded-lg p-3 shadow-sm w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-orange-400"></div>
              <h4 className="font-bold text-gray-900 text-xs mb-1">مجموعة العليان التجارية</h4>
              <div className="flex justify-between items-center text-[10px] text-gray-500">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-orange-400" /> بلازا الشاطئ</span>
                <span className="font-sans font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">SAR 425k</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-[#f9fafa] rounded-xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-6 h-72 flex flex-col relative">
          <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-6 justify-end">
            المدفوعات الشهرية <TrendingUp className="w-4 h-4 text-gray-500" />
          </h3>
          <div className="flex-1 flex items-end gap-12 font-sans px-8 text-xs text-gray-400 justify-between relative mt-4">
            {/* Grid lines */}
            <div className="absolute inset-x-8 bottom-0 top-0 flex flex-col justify-between z-0">
              <div className="border-b border-gray-200 border-dashed w-full flex items-center"><span className="-right-10 absolute font-bold text-emerald-700">1.8M</span></div>
              <div className="border-b border-gray-200 border-dashed w-full flex items-center"><span className="-right-10 absolute">1.35M</span></div>
              <div className="border-b border-gray-200 border-dashed w-full flex items-center"><span className="-right-10 absolute">900k</span></div>
              <div className="border-b border-gray-200 border-dashed w-full flex items-center"><span className="-right-10 absolute">450k</span></div>
              <div className="border-b border-gray-200 border-solid w-full flex items-center"><span className="-right-10 absolute">0</span></div>
            </div>

            <div className="flex flex-col items-center gap-2 z-10 w-8">
              <div className="w-7 bg-[#111827] rounded-t-sm h-[30%]"></div>
              <span>Sep</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 w-8">
              <div className="w-7 bg-[#111827] rounded-t-sm h-[30%]"></div>
              <span>Jan</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 w-8">
              <div className="w-7 bg-[#111827] rounded-t-sm h-[60%]"></div>
              <span>Aug</span>
            </div>
            <div className="flex flex-col items-center gap-2 z-10 w-8">
              <div className="w-7 bg-[#111827] rounded-t-sm h-[60%]"></div>
              <span>Feb</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContracts = () => (
    <div className="animate-in fade-in duration-300">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">العقود</h1>
        <p className="text-gray-500 text-sm">إدارة عقود الإيجار الخاصة بك بكفاءة وسهولة.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6 text-center">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><FileText className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي العقود</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">142</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><TrendingUp className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">القيمة الإجمالية</p>
          <p className="text-2xl font-bold text-gray-900 font-sans text-emerald-700">SAR 12.45M</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المدفوع</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 3.85M</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center"><AlertCircle className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المتبقي</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 8.60M</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#fafafa]">
          <button className="flex items-center text-gray-500 border border-gray-200 bg-white rounded-lg p-2"><FilterIcon className="w-4 h-4" /></button>
          <div className="flex bg-gray-100 p-1 rounded-lg text-sm">
            <button className="px-4 py-1.5 rounded-md text-gray-500">منتهي</button>
            <button className="px-4 py-1.5 rounded-md text-gray-500">مستحق قريبا 30 يوم</button>
            <button className="px-4 py-1.5 rounded-md text-gray-500">نشط</button>
            <button className="px-4 py-1.5 bg-white shadow-sm rounded-md font-bold text-emerald-700">جميع العقود</button>
          </div>
        </div>
        <table className="w-full text-sm text-right">
          <thead className="bg-[#fcfafb] text-gray-500 font-medium border-b border-gray-100 text-[13px]">
            <tr>
              <th className="px-6 py-4">مستأجر</th>
              <th className="px-6 py-4">العقار</th>
              <th className="px-6 py-4 text-emerald-600 border-b-2 border-emerald-500">الدفعة القادمة</th>
              <th className="px-6 py-4">حالة الدفع</th>
              <th className="px-6 py-4">المبلغ</th>
              <th className="px-6 py-4">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 cursor-pointer">
            <tr className="hover:bg-gray-50 border-r-2 border-transparent">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center font-sans text-xs">AV</div>
                <div>
                  <div className="font-bold text-gray-900 font-sans">شركة الرؤية المتقدمة لتقنية المعلومات</div>
                  <div className="text-[10px] text-gray-400 font-sans">#V-901452</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-medium text-gray-700 flex items-center gap-1"><Building className="w-3 h-3 text-gray-400" /> برج العليا الإداري</div>
                <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> الرياض • 15 مكتب</div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="font-bold text-emerald-700 font-sans">SAR 212,500</div>
                <div className="text-xs text-orange-500 font-sans flex items-center justify-center gap-1">2026-05-01 <Clock className="w-3 h-3" /></div>
                <div className="text-[10px] bg-orange-100 text-orange-600 rounded-md px-2 py-0.5 mt-1 inline-block mx-auto">قريباً</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2 text-xs font-sans font-bold text-gray-600 mb-1">75%</div>
                <div className="w-20 bg-gray-100 rounded-full h-1.5 ml-auto">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-bold text-gray-900 font-sans">SAR 850,000</div>
                <div className="text-[11px] text-red-500 mt-0.5">المتبقي: SAR 212,500</div>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-600 bg-emerald-100 flex items-center w-max gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full block"></span> نشط
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 border-r-2 border-transparent">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold flex items-center justify-center font-sans text-xs">OT</div>
                <div>
                  <div className="font-bold text-gray-900 font-sans">مجموعة العليان التجارية</div>
                  <div className="text-[10px] text-gray-400 font-sans">#V-802213</div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-medium text-gray-700 flex items-center gap-1"><Building className="w-3 h-3 text-gray-400" /> بلازا الشاطئ</div>
                <div className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> جدة • معرضين</div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="font-bold text-gray-500 font-sans">SAR 0</div>
                <div className="text-xs text-emerald-500 font-sans flex items-center justify-center gap-1">--</div>
                <div className="text-[10px] bg-emerald-100 text-emerald-600 rounded-md px-2 py-0.5 mt-1 inline-block mx-auto">مكتمل</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2 text-xs font-sans font-bold text-gray-600 mb-1">100%</div>
                <div className="w-20 bg-gray-100 rounded-full h-1.5 ml-auto">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-bold text-gray-900 font-sans">SAR 425,000</div>
                <div className="text-[11px] text-gray-400 mt-0.5">المتبقي: SAR 0</div>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-gray-500 bg-gray-200 flex items-center w-max gap-1 border border-gray-300">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full block"></span> منتهي
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-[#fafafa]">
          <div className="flex items-center gap-1 text-gray-500 text-xs font-sans">
            showing <b>1-10</b> of 142
          </div>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-400"><ChevronRight className="w-4 h-4" /></button>
            <button className="w-8 h-8 flex items-center justify-center bg-emerald-600 border border-emerald-600 rounded text-white font-sans text-xs">1</button>
            <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-400"><ChevronLeft className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="animate-in fade-in duration-300">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 flex items-center justify-end gap-2"><Building2 className="w-6 h-6" /> قائمة الأملاك</h1>
        <p className="text-gray-500 text-sm">تنظيم وإدارة جميع أملاكك العقارية من مكان واحد.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-6 mb-8">
        <div className="flex items-center gap-2 text-gray-400 border border-gray-200/80 rounded-xl px-4 py-3 bg-[#f9fafb] mb-6">
          <Search className="w-5 h-5" />
          <input type="text" placeholder="ابحث عن عقار..." className="bg-transparent text-sm w-full outline-none font-sans" />
        </div>

        <table className="w-full text-sm text-right">
          <thead className="bg-[#fcfafb] text-gray-500 font-medium border-b border-gray-100 text-[13px]">
            <tr>
              <th className="px-6 py-4">رقم الصك</th>
              <th className="px-6 py-4">اسم العقار</th>
              <th className="px-6 py-4">الاستخدام</th>
              <th className="px-6 py-4">عدد الوحدات</th>
              <th className="px-6 py-4">المدينة</th>
              <th className="px-6 py-4">العنوان الوطني</th>
              <th className="px-6 py-4">actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-900 font-sans flex items-center justify-end gap-2 text-sm">
                <FileText className="w-4 h-4 text-gray-400 bg-gray-100 p-0.5 rounded" />
                110214008912
              </td>
              <td className="px-6 py-4">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold font-sans">برج العليا الإداري</span>
              </td>
              <td className="px-6 py-4 text-gray-600">مكاتب تجارية</td>
              <td className="px-6 py-4 font-bold font-sans text-gray-900">45</td>
              <td className="px-6 py-4 text-gray-600">الرياض</td>
              <td className="px-6 py-4 text-gray-500 font-sans text-xs flex items-center justify-end gap-1"><MapPin className="w-3 h-3 text-gray-400" /> 13511 ,8222 ,3092</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-4">
                  <button className="text-gray-600 hover:text-emerald-600 text-xs font-bold font-sans">عرض التفاصيل</button>
                  <Trash2 className="w-4 h-4 text-red-400 hover:text-red-600 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-900 font-sans flex items-center justify-end gap-2 text-sm">
                <FileText className="w-4 h-4 text-gray-400 bg-gray-100 p-0.5 rounded" />
                6102110037136
              </td>
              <td className="px-6 py-4">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold font-sans">بلازا الشاطئ</span>
              </td>
              <td className="px-6 py-4 text-gray-600">معارض تجارية</td>
              <td className="px-6 py-4 font-bold font-sans text-gray-900">18</td>
              <td className="px-6 py-4 text-gray-600">جدة</td>
              <td className="px-6 py-4 text-gray-500 font-sans text-xs flex items-center justify-end gap-1"><MapPin className="w-3 h-3 text-gray-400" /> 23512 ,4451 ,1885</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-4">
                  <button className="text-gray-600 hover:text-emerald-600 text-xs font-bold font-sans">عرض التفاصيل</button>
                  <Trash2 className="w-4 h-4 text-red-400 hover:text-red-600 cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-900 font-sans flex items-center justify-end gap-2 text-sm">
                <FileText className="w-4 h-4 text-gray-400 bg-gray-100 p-0.5 rounded" />
                711011004523
              </td>
              <td className="px-6 py-4">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold font-sans">مجمع الياسمين السكني</span>
              </td>
              <td className="px-6 py-4 text-gray-600">وحدات سكنية</td>
              <td className="px-6 py-4 font-bold font-sans text-gray-900">60</td>
              <td className="px-6 py-4 text-gray-600">الدمام</td>
              <td className="px-6 py-4 text-gray-500 font-sans text-xs flex items-center justify-end gap-1"><MapPin className="w-3 h-3 text-gray-400" /> 32211 ,7743 ,1002</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-4">
                  <button className="text-gray-600 hover:text-emerald-600 text-xs font-bold font-sans">عرض التفاصيل</button>
                  <Trash2 className="w-4 h-4 text-red-400 hover:text-red-600 cursor-pointer" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPayments = () => (
    <div className="animate-in fade-in duration-300">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">المدفوعات</h1>
        <p className="text-gray-500 text-sm">تتبع المدفوعات والإيرادات الخاصة بك بسلاسة.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6 text-center">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><Wallet className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">الإجمالي المتوقع</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 8.60M</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-1">الإجمالي المحصل</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 3.85M</p>
          <p className="text-[10px] text-gray-400 font-sans">collected 44.7%</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center"><Clock className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">المبلغ المعلق</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 4.25M</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative flex flex-col justify-center">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center"><AlertCircle className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-1">عدد المتأخرات</p>
          <p className="text-2xl font-bold text-gray-900 font-sans mb-1">18</p>
          <p className="text-[10px] text-gray-400 font-sans">الدفعات التي تتطلب إجراء</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#fafafa]">
          <button className="flex items-center text-gray-500 border border-gray-200 bg-white rounded-lg p-2"><FilterIcon className="w-4 h-4" /></button>
          <div className="flex bg-gray-100 p-1 rounded-lg text-sm">
            <button className="px-4 py-1.5 rounded-md text-gray-500">القادمة</button>
            <button className="px-4 py-1.5 rounded-md text-gray-500">متأخر</button>
            <button className="px-4 py-1.5 rounded-md text-gray-500">المدفوع</button>
            <button className="px-4 py-1.5 bg-white shadow-sm rounded-md font-bold text-emerald-700">الكل</button>
          </div>
        </div>
        <table className="w-full text-sm text-right">
          <thead className="bg-[#fcfafb] text-gray-500 font-medium border-b border-gray-100 text-[13px]">
            <tr>
              <th className="px-6 py-4">مستأجر</th>
              <th className="px-6 py-4">العقار</th>
              <th className="px-6 py-4 text-center">التقدم</th>
              <th className="px-6 py-4">المبلغ</th>
              <th className="px-6 py-4">تاريخ الاستحقاق</th>
              <th className="px-6 py-4">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 flex flex-col items-end">
                <div className="font-bold text-gray-900 font-sans flex items-center justify-end gap-2 pt-2">
                  مؤسسة السعدون للصناعة والتجارة
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><User className="w-3 h-3" /></div>
                </div>
                <div className="text-[10px] text-gray-400 font-sans mt-1 pr-8">#10661671838</div>
              </td>
              <td className="px-6 py-4">
                <div className="font-medium text-gray-700 flex items-center justify-end gap-1"><Building className="w-3 h-3 text-gray-400" /> برج العليا الإداري</div>
                <div className="text-[11px] text-gray-400 mt-1">مكتب: 405</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-4 text-[10px] font-sans font-bold text-gray-400 mb-1">
                  <span className="text-blue-500 text-xs">25%</span>
                  150,000 / 37,500
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 ml-auto">
                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="font-bold text-gray-900 font-sans">SAR 150,000</div>
                <div className="text-[10px] text-red-500 mt-0.5 font-sans">المتبقي: SAR 112,500</div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="font-bold text-red-600 font-sans">2026-03-01</div>
                <div className="text-[10px] text-red-400 font-sans">late</div>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded border border-red-200 text-xs font-bold text-red-600 bg-red-50 flex items-center w-max ml-auto gap-1">
                  متأخر <AlertCircle className="w-3 h-3" />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderReceipts = () => (
    <div className="animate-in fade-in duration-300">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">السندات والإيصالات</h1>
        <p className="text-gray-500 text-sm">إدارة جميع سندات القبض والصرف الخاصة بك بسهولة.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center"><Receipt className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي السندات</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">84</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المقبوضات</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 1.25M</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center"><TrendingUp className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المدفوعات</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 430K</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><Wallet className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">صافي التدفق</p>
          <p className="text-xl font-bold text-gray-900 font-sans">SAR 820K</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#fafafa]">
          <button className="flex items-center text-gray-500 border border-gray-200 bg-white rounded-lg p-2"><FilterIcon className="w-4 h-4" /></button>
          <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg w-1/3 px-3">
            <Search className="w-4 h-4 text-gray-400" />
            <input type="text" placeholder="ابحث عن سند..." className="bg-transparent text-sm w-full outline-none py-2 font-sans" />
          </div>
          <div className="flex bg-gray-100 p-1 rounded-lg text-sm mr-auto block">
            <button className="px-6 py-1.5 rounded-md text-gray-500">سندات الصرف</button>
            <button className="px-6 py-1.5 rounded-md text-gray-500">سندات القبض</button>
            <button className="px-6 py-1.5 bg-white shadow-sm rounded-md font-bold text-emerald-700">الكل</button>
          </div>
        </div>
        <table className="w-full text-sm text-right">
          <thead className="bg-[#fcfafb] text-gray-500 font-medium border-b border-gray-100 text-[13px]">
            <tr>
              <th className="px-6 py-4">رقم السند</th>
              <th className="px-6 py-4">النوع</th>
              <th className="px-6 py-4">المبلغ</th>
              <th className="px-6 py-4">الأطراف</th>
              <th className="px-6 py-4">السبب</th>
              <th className="px-6 py-4">التاريخ</th>
              <th className="px-6 py-4 w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            <tr className="hover:bg-gray-50 cursor-pointer">
              <td className="px-6 py-4 flex flex-col items-end">
                <div className="text-gray-500 font-sans text-xs">#R-20260118-6455</div>
                <div className="text-[10px] text-blue-500 border border-blue-100 bg-blue-50 px-2 py-0.5 mt-1 rounded font-sans cursor-pointer flex items-center justify-end w-max mt-1">العقد #V-901452</div>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="bg-[#e6fcf4] text-emerald-700 px-3 py-1 rounded-full text-[11px] font-bold">سند قبض</span>
              </td>
              <td className="px-6 py-4 font-bold font-sans text-emerald-600 text-center">SAR 150,000.00 +</td>
              <td className="px-6 py-4 text-gray-700 font-bold text-xs flex items-center justify-end gap-2">
                شركة النخبة <ArrowRightLeft className="w-3 h-3 text-gray-300" /> الرؤية المتقدمة
              </td>
              <td className="px-6 py-4 text-gray-500 text-xs">دفعة إيجار مكاتب</td>
              <td className="px-6 py-4 text-gray-500 font-sans text-xs text-center">2026-01-18</td>
              <td className="px-6 py-4 text-gray-400"><MoreVertical className="w-4 h-4 ml-auto" /></td>
            </tr>
            <tr className="hover:bg-gray-50 cursor-pointer">
              <td className="px-6 py-4 flex flex-col items-end">
                <div className="text-gray-500 font-sans text-xs">#R-20251226-4004</div>
                <div className="text-[10px] text-gray-500 border border-gray-200 bg-gray-50 px-2 py-0.5 mt-1 rounded font-sans cursor-pointer flex items-center justify-end w-max mt-1 gap-1">برج العليا الإداري <Building className="w-3 h-3" /></div>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="bg-[#fceeed] text-red-700 px-3 py-1 rounded-full text-[11px] font-bold">سند صرف</span>
              </td>
              <td className="px-6 py-4 font-bold font-sans text-red-600 text-center">SAR 24,000.00 -</td>
              <td className="px-6 py-4 text-gray-700 font-bold text-xs flex items-center justify-end gap-2">
                شركة التنظيف <ArrowRightLeft className="w-3 h-3 text-gray-300" /> شركة النخبة
              </td>
              <td className="px-6 py-4 text-gray-500 text-xs">صيانة دورية للمرافق</td>
              <td className="px-6 py-4 text-gray-500 font-sans text-xs text-center">2025-12-26</td>
              <td className="px-6 py-4 text-gray-400"><MoreVertical className="w-4 h-4 ml-auto" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderExpenses = () => (
    <div className="animate-in fade-in duration-300">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">المصروفات</h1>
        <p className="text-gray-500 text-sm">راقب مصروفاتك للحفاظ على صحة مالية مثالية.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center"><Wallet className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">إجمالي المصروفات</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 184.5K</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><User className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">على المالك</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 150K</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><User className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">على المستأجر</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 24K</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
          <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center"><Briefcase className="w-4 h-4" /></div>
          <p className="text-gray-500 text-sm font-medium mb-2">على المكتب</p>
          <p className="text-2xl font-bold text-gray-900 font-sans">SAR 10.5K</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-1 bg-white rounded-xl border border-gray-100 shadow-sm p-6 relative flex flex-col">
          <h3 className="text-gray-900 font-bold mb-8 text-left">تفصيل المصروفات</h3>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-40 h-40 border-[20px] rounded-full border-[#10b981] relative">
              <div className="absolute -inset-[20px] border-[20px] rounded-full border-blue-500" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 80% 100%)' }}></div>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold"><span className="w-4 h-2 bg-blue-500 block rounded-sm"></span> صيانة مصاعد</div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold"><span className="w-4 h-2 bg-[#10b981] block rounded-sm"></span> شركة نظافة</div>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#fafafa]">
            <button className="flex items-center text-gray-500 border border-gray-200 bg-white rounded-lg p-2"><FilterIcon className="w-4 h-4" /></button>
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg w-1/2 px-3">
              <Search className="w-4 h-4 text-gray-400" />
              <input type="text" placeholder="ابحث عن مصروف..." className="bg-transparent text-sm w-full outline-none py-2 font-sans" />
            </div>
            <div className="flex bg-gray-100 p-1 rounded-lg text-sm mr-auto">
              <button className="px-6 py-1.5 rounded-md text-gray-500">مكتب عقار</button>
              <button className="px-6 py-1.5 rounded-md text-gray-500">مستأجر</button>
              <button className="px-6 py-1.5 rounded-md text-gray-500">مالك</button>
              <button className="px-6 py-1.5 bg-white shadow-sm rounded-md font-bold text-gray-800">الكل</button>
            </div>
          </div>
          <table className="w-full text-sm text-right flex-1">
            <thead className="bg-[#fcfafb] text-gray-500 font-medium border-b border-gray-100 text-[13px]">
              <tr>
                <th className="px-6 py-4">نوع المصروف</th>
                <th className="px-6 py-4">المبلغ</th>
                <th className="px-6 py-4">على من</th>
                <th className="px-6 py-4">مرتبط بـ</th>
                <th className="px-6 py-4">ملاحظات</th>
                <th className="px-6 py-4">التاريخ</th>
                <th className="px-6 py-4 w-12">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-gray-900">صيانة مصاعد</td>
                <td className="px-6 py-4 font-bold font-sans text-red-600 text-center">SAR 150,000.00</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-[#eff3fe] text-blue-700 px-3 py-1 rounded-full text-[11px] font-bold border border-blue-100">مالك</span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-[10px] text-emerald-600 border border-emerald-100 bg-emerald-50 px-2 py-1.5 rounded font-sans flex items-center justify-end w-max gap-1">برج العليا الإداري <Building className="w-3 h-3" /></div>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">تجديد عقد الصيانة السنوي للمصاعد 1-6</td>
                <td className="px-6 py-4 text-gray-400 font-sans text-xs text-center w-24">2026-02-15</td>
                <td className="px-6 py-4 text-gray-400"><Trash2 className="w-4 h-4 ml-auto text-red-400 hover:text-red-500 cursor-pointer" /></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-gray-900">خدمات تنظيف</td>
                <td className="px-6 py-4 font-bold font-sans text-red-600 text-center">SAR 24,000.00</td>
                <td className="px-6 py-4 text-center">
                  <span className="bg-[#e6fcf4] text-emerald-700 px-3 py-1 rounded-full text-[11px] font-bold border border-emerald-100">مستأجر</span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-[10px] text-blue-500 border border-blue-100 bg-blue-50 px-2 py-1.5 rounded font-sans flex items-center justify-end w-max gap-1">العقد #V-901452 <FileText className="w-3 h-3" /></div>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">نظافة الواجهات الزجاجية الشهرية</td>
                <td className="px-6 py-4 text-gray-400 font-sans text-xs text-center w-24">2025-11-21</td>
                <td className="px-6 py-4 text-gray-400"><Trash2 className="w-4 h-4 ml-auto text-red-400 hover:text-red-500 cursor-pointer" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderOfficeDashboard = () => (
    <div className="animate-in fade-in duration-300">
      <div className="bg-[#46a77d] rounded-t-2xl relative h-40 mb-16 overflow-visible shadow-sm">
        <div className="absolute top-6 right-6">
          <span className="bg-black/10 text-white border border-white/20 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> نشط
          </span>
        </div>
        <div className="absolute top-16 right-6">
          <h1 className="text-white text-3xl font-bold">شركة النخبة لإدارة الأملاك</h1>
        </div>
        <div className="absolute -bottom-10 left-10 w-24 h-24 bg-gray-50 rounded-full border-4 border-white shadow-md flex items-center justify-center">
          <span className="text-3xl font-bold text-emerald-700">ش</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6 px-2">
        <button className="flex items-center gap-2 border border-gray-200 bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-50 transition">
          <FileText className="w-4 h-4" /> تعديل البيانات
        </button>
        <div className="flex gap-6 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2"><span className="text-gray-400">المالك:</span> محمد عبدالله</div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2"><span className="text-gray-400">تأسس في:</span> 20/05/2015</div>
        </div>
      </div>
      <div className="flex gap-2 border-b border-gray-200 mb-6 px-4">
        <button className="border-b-2 border-emerald-600 px-6 py-3 font-bold text-emerald-800 flex items-center gap-2 bg-gray-50/50 rounded-t-lg">
          <Building className="w-4 h-4" /> نظرة عامة
        </button>
        <button className="px-6 py-3 font-medium text-gray-500 flex items-center gap-2 hover:text-gray-800">
          <Users className="w-4 h-4" /> الموظفين
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border border-gray-200/80 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-800 mb-6 flex items-center gap-2">
            <Phone className="w-5 h-5 text-emerald-600" /> معلومات التواصل
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm"><Phone className="w-4 h-4" /> الهاتف</div>
              <div className="font-sans font-medium text-gray-900">+966 50 322 XXXX</div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-50 pb-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm"><Mail className="w-4 h-4" /> البريد</div>
              <div className="font-sans font-medium text-gray-900">info@alnokXXX.sa</div>
            </div>
            <div className="flex items-start justify-between border-b border-gray-50 pb-3 gap-8">
              <div className="flex items-center gap-2 text-gray-500 text-sm flex-shrink-0"><MapPin className="w-4 h-4" /> العنوان</div>
              <div className="font-medium text-gray-900 text-sm text-left">الرياض - طريق الملك فهد - برج الفيصلية</div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-gray-500 text-sm"><LinkIcon className="w-4 h-4" /> الموقع</div>
              <div className="font-sans font-medium text-blue-600 hover:underline cursor-pointer">www.alnokXXX.sa</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200/80 bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <FileBadge2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-gray-500 text-sm font-medium mb-1">رقم الترخيص (فال)</div>
                <div className="font-bold text-gray-900 font-sans text-lg">11000XXXX</div>
              </div>
            </div>
            <div className="border border-gray-200/80 bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-gray-500 text-sm font-medium mb-1">السجل التجاري</div>
                <div className="font-bold text-gray-900 font-sans text-lg">101099XXXX</div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200/80 bg-white rounded-xl p-6 flex-1 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">نبذة عن المكتب</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              شركة النخبة لإدارة الأملاك متخصصة في خدمات إدارة المحافظ العقارية، تحصيل الإيجارات المؤتمت، والصيانة عبر استخدام أحدث التقنيات كمنصة PropertyON.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReminders = () => (
    <div className="animate-in fade-in duration-300">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 flex items-center justify-end gap-2 text-emerald-800">مركز التذكيرات <Bell className="w-6 h-6" /></h1>
        <p className="text-gray-500 text-sm">إرسال تذكيرات يدوية للمستأجرين ومراجعة السجل.</p>
      </div>

      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[500px]">
          <div className="bg-[#fcfafb] border-b border-gray-100 p-4 text-center font-bold text-gray-900 flex justify-center items-center gap-2">
            إنشاء رسالة جديدة <Send className="w-4 h-4 text-blue-500" />
          </div>
          <div className="p-6 flex-1 flex flex-col gap-5 text-sm h-full overflow-y-auto">
            <div>
              <label className="block text-gray-700 font-bold mb-2">1. اختر القالب</label>
              <select className="w-full border border-gray-200 rounded-lg bg-gray-50 py-2.5 px-3 outline-none text-gray-600">
                <option>-- اختر قالب الرسالة --</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">2. اختر العقد (المستلم)</label>
              <div className="w-full border border-gray-200 rounded-lg bg-white py-2.5 px-3 flex items-center gap-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input type="text" placeholder="ابحث برقم العقد أو اسم المستأجر..." className="bg-transparent outline-none flex-1 text-gray-600" />
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <label className="block text-gray-700 font-bold mb-2">3. معاينة الرسالة</label>
              <div className="w-full border border-gray-200 border-dashed rounded-lg bg-[#fcfafb] p-6 text-center text-gray-400 flex flex-col items-center justify-center flex-1 min-h-[120px]">
                ستظهر معاينة الرسالة هنا بعد اختيار القالب والعقد...
              </div>
            </div>
            <button className="w-full bg-[#46a77d] hover:bg-emerald-600 text-white font-bold py-3 rounded-lg shadow flex justify-center items-center gap-2 mt-4 transition">
              <Send className="w-4 h-4" /> إرسال التذكير الآن
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-[500px]">
          <div className="bg-[#fcfafb] border-b border-gray-100 p-4 flex justify-between items-center text-gray-900 font-bold">
            <button className="bg-white border border-gray-200 rounded-md p-1.5 text-gray-400 hover:text-gray-600"><RefreshCcw className="w-4 h-4" /></button>
            <div className="flex items-center gap-2">سجل الرسائل المرسلة <FileText className="w-4 h-4 text-purple-500" /></div>
          </div>
          <div className="p-4 border-b border-gray-100">
            <div className="w-full border border-gray-200 rounded-lg bg-white py-2 px-3 flex items-center gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input type="text" placeholder="بحث في السجل..." className="bg-transparent outline-none flex-1 text-xs text-gray-600" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollbarWidth: 'thin' }}>
            <div className="pb-4 border-b border-gray-50 flex flex-col items-end text-sm">
              <span className="text-[10px] text-gray-400 font-sans mb-2">18/01/2026, 22:58:21</span>
              <div className="flex items-center justify-end gap-3 mb-2 w-full text-xs">
                <span className="text-gray-500 font-sans">+966 55 897 XXXX</span>
                <span className="bg-gray-100 border border-gray-200 text-gray-600 px-2 py-0.5 rounded flex items-center gap-1 font-bold">تذكير بدفعة إيجار <FileText className="w-3 h-3 text-gray-400" /></span>
              </div>
              <p className="text-gray-600 text-xs text-right leading-relaxed mt-2" dir="rtl">
                مرحباً بك ممثل شركة الرؤية المتقدمة لتقنية المعلومات 🏢، نود تذكيركم بلطف بدفعة الإيجار المستحقة لعقدكم رقم (V-901452) لمجموعة مكاتبكم في برج العليا الإداري.<br /><br />
                • المبلغ الإجمالي المستحق: <b>150,000.00 ريال</b><br />
                • تاريخ الاستحقاق: 15/02/2026<br /><br />
                يمكنكم متابعة الدفعة بكل سهولة عبر منصة 📩 SaqrON من خلال الرابط التالي: https://app.f4lcon.tech/<br />
                شكراً لثقتكم واختياركم شركة النخبة لإدارة الأملاك. 🤝
              </p>
              <span className="text-emerald-500 text-[10px] font-bold flex items-center gap-1 mt-3 bg-emerald-50 px-2 py-1 rounded inline-flex"><CheckCircle2 className="w-3 h-3" /> تم الإرسال عبر واتساب</span>
            </div>
            <div className="pb-4 border-b border-gray-50 flex flex-col items-end text-sm">
              <span className="text-[10px] text-gray-400 font-sans mb-2">10/12/2025, 09:15:33</span>
              <div className="flex items-center justify-end gap-3 mb-2 w-full text-xs">
                <span className="text-gray-500 font-sans">+966 50 322 XXXX</span>
                <span className="bg-gray-100 border border-gray-200 text-gray-600 px-2 py-0.5 rounded flex items-center gap-1 font-bold">إشعار استلام سند <Receipt className="w-3 h-3 text-gray-400" /></span>
              </div>
              <p className="text-gray-600 text-xs text-right leading-relaxed mt-2" dir="rtl">
                عناية مجموعة العليان التجارية الموقرة، 💼<br /><br />
                نفيدكم بتوثيق استلام دفعتكم السنوية وإصدار سند قبض رقم R-20251226-4004 بمبلغ <b>425,000.00 ريال</b> لمعارضكم في بلازا الشاطئ.<br />
                شكرًا لالتزامكم الدائم واحترافيتكم. يمكنكم الاطلاع على نسخة من السند عبر نظامنا: https://app.f4lcon.tech/ <br />
                وتقبلوا خالص التحيات من شركة النخبة لإدارة الأملاك المميزة. ✨
              </p>
              <span className="text-emerald-500 text-[10px] font-bold flex items-center gap-1 mt-3 bg-emerald-50 px-2 py-1 rounded inline-flex"><CheckCircle2 className="w-3 h-3" /> تم الإرسال عبر SMS </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="animate-in fade-in duration-300">
      <div className="text-left mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 flex items-center justify-end gap-2 text-blue-800">مركز التقارير <FileBarChart className="w-6 h-6" /></h1>
        <p className="text-gray-500 text-sm">إنشاء تقارير مالية وتشغيلية متقدمة لإدارة ممتلكاتك بكفاءة عالية.</p>
      </div>

      <div className="flex gap-6 items-start h-[500px]">
        <div className="flex-1 bg-[#f8f9fc] rounded-xl flex flex-col gap-4 overflow-y-auto h-full pr-2" style={{ scrollbarWidth: 'none' }}>
          <div className="flex justify-between items-center mb-2">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold font-sans">16</span>
            <h3 className="font-bold text-gray-800 text-lg">جميع التقارير</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group">
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">ملخص العقارات</h4>
                <p className="text-[10px] text-gray-500 mt-1">نظرة شاملة على جميع العقارات</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><Building2 className="w-5 h-5" /></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group">
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">الوحدات حسب العقار</h4>
                <p className="text-[10px] text-gray-500 mt-1">تفصيل الوحدات لكل عقار</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0"><LayoutDashboard className="w-5 h-5" /></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group">
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">ملخص الوحدات</h4>
                <p className="text-[10px] text-gray-500 mt-1">ملخص حالة جميع الوحدات</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><Home className="w-5 h-5" /></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group">
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">عقود الوحدة</h4>
                <p className="text-[10px] text-gray-500 mt-1">سجل العقود لكل وحدة</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-500 flex items-center justify-center shrink-0"><FileText className="w-5 h-5" /></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group">
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">تقرير الدفعات</h4>
                <p className="text-[10px] text-gray-500 mt-1">المجدول مقابل الدفعات المحصّلة</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><CreditCard className="w-5 h-5" /></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group">
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">تقرير المصروفات</h4>
                <p className="text-[10px] text-gray-500 mt-1">المصاريف المرتبطة بالعقود</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><TrendingUp className="w-5 h-5" /></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group">
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600">مصروفات المكتب</h4>
                <p className="text-[10px] text-gray-500 mt-1">تتبع مصروفات المكتب</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0"><Receipt className="w-5 h-5" /></div>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow hover:border-blue-200 cursor-pointer flex justify-end items-center gap-4 transition text-right group relative overflow-hidden">
              <div className="absolute left-2 text-[8px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-sans uppercase tracking-widest font-bold">Coming Soon</div>
              <div className="opacity-60 pointer-events-none">
                <h4 className="font-bold text-gray-900">سجل التدقيق</h4>
                <p className="text-[10px] text-gray-500 mt-1">سجل نشاط النظام</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 opacity-60"><Lock className="w-5 h-5" /></div>
            </div>
          </div>
        </div>

        <div className="w-64 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col h-full shrink-0">
          <div className="w-full border border-gray-200 rounded-md bg-white py-1.5 px-2 flex items-center gap-2 mb-6">
            <Search className="w-4 h-4 text-gray-400" />
            <input type="text" placeholder="ابحث عن تقرير..." className="bg-transparent outline-none flex-1 text-xs text-gray-600" />
          </div>

          <div className="flex-1 space-y-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
            <button className="w-full text-right bg-blue-50 text-blue-600 font-bold text-sm px-4 py-2.5 rounded-lg flex items-center justify-end gap-3 transition">جميع التقارير <LayoutDashboard className="w-4 h-4" /></button>
            <button className="w-full text-right text-gray-600 hover:bg-gray-50 font-medium text-sm px-4 py-2.5 rounded-lg flex items-center justify-end gap-3 transition">تقارير العقارات <Building2 className="w-4 h-4" /></button>
            <button className="w-full text-right text-gray-600 hover:bg-gray-50 font-medium text-sm px-4 py-2.5 rounded-lg flex items-center justify-end gap-3 transition">تقارير الوحدات <Home className="w-4 h-4" /></button>
            <button className="w-full text-right text-gray-600 hover:bg-gray-50 font-medium text-sm px-4 py-2.5 rounded-lg flex items-center justify-end gap-3 transition">تقارير العقود <FileText className="w-4 h-4" /></button>
            <button className="w-full text-right text-gray-600 hover:bg-gray-50 font-medium text-sm px-4 py-2.5 rounded-lg flex items-center justify-end gap-3 transition">التقارير المالية <CreditCard className="w-4 h-4" /></button>
            <button className="w-full text-right text-gray-600 hover:bg-gray-50 font-medium text-sm px-4 py-2.5 rounded-lg flex items-center justify-end gap-3 transition">تقارير الصيانة <Wrench className="w-4 h-4" /></button>
            <button className="w-full text-right text-gray-600 hover:bg-gray-50 font-medium text-sm px-4 py-2.5 rounded-lg flex items-center justify-end gap-3 transition">التحليلات <PieChart className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="w-full max-w-[1250px] mx-auto rounded-xl border border-gray-200/80 bg-[#f4f7f6] flex text-right shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] relative select-none"
      dir="rtl"
      style={{ height: '800px', overflow: 'hidden' }}
    >
      <div className="w-64 bg-white border-l border-gray-200/80 hidden md:flex flex-col flex-shrink-0 z-10 shadow-sm relative h-full">
        <div className="p-6 flex items-center justify-center h-[76px] border-b border-gray-100 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-[0_4px_10px_rgba(5,150,105,0.3)]">
              <span className="text-white font-bold text-xl leading-none -mt-1 tracking-tight">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-gray-900 leading-none mb-1 tracking-tight text-xl">SaqrON</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#46a77d]">PropertyON</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6" style={{ scrollbarWidth: 'none' }}>
          <div className="mb-6 mt-2">
            <p className="px-3 text-[11px] font-bold text-gray-400 mb-2 font-fixed">عام</p>
            {generalItems.map((item, i) => {
              const isActive = activeTab === item.label;
              return (
                <div
                  key={i}
                  onClick={() => setActiveTab(item.label)}
                  className={`flex items-center space-x-3 space-x-reverse px-3 py-2.5 rounded-xl text-[14px] font-semibold transition-all cursor-pointer mb-1 w-full ${isActive ? 'bg-emerald-500 text-white shadow-[0_4px_12px_rgba(5,150,105,0.25)]' : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-700'}`}
                >
                  <item.icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 2} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mb-6">
            <p className="px-3 text-[11px] font-bold text-gray-400 mb-2 font-fixed">مكتب العقار</p>
            {officeItems.map((item, i) => {
              const isActive = activeTab === item.label;
              return (
                <div
                  key={i}
                  onClick={() => setActiveTab(item.label)}
                  className={`flex items-center space-x-3 space-x-reverse px-3 py-2.5 rounded-xl text-[14px] font-semibold transition-all cursor-pointer mb-1 w-full ${isActive ? 'bg-emerald-500 text-white shadow-[0_4px_12px_rgba(5,150,105,0.25)]' : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-700'}`}
                >
                  <item.icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 2} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          <div>
            <p className="px-3 text-[11px] font-bold text-gray-400 mb-2 font-fixed">النظام</p>
            <div className="flex items-center space-x-3 space-x-reverse px-3 py-2.5 rounded-xl text-[14px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-emerald-700 cursor-pointer">
              <Settings className="w-[18px] h-[18px]" strokeWidth={2} />
              <span>الإعدادات</span>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm tracking-widest shadow-inner border border-emerald-200">S</div>
            <div>
              <p className="font-bold text-gray-900 text-sm leading-none mb-1">محمد عبدالله</p>
              <p className="text-[10px] text-gray-400 font-sans tracking-wide">+96650322XXXX</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[#f8f9fc] relative overflow-hidden h-full">
        <div className="h-[76px] bg-white border-b border-gray-200/80 flex items-center justify-between px-8 flex-shrink-0 shadow-sm z-20 relative">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-gray-200/80 bg-gray-50 px-3 py-1.5 rounded-lg">
              <span className="text-gray-400 text-xs">الدور الحالي</span>
              <span className="font-bold text-gray-800 text-sm">مشرف مكتب</span>
              <div className="w-4 h-4 rounded text-blue-600 bg-blue-100 flex items-center justify-center ml-2 border border-blue-200 shadow-sm"><ShieldCheck className="w-3 h-3" /></div>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-gray-400 border border-gray-200/80 rounded-full px-4 py-1.5 w-96 bg-[#f9fafb]">
              <Search className="w-4 h-4" />
              <input type="text" placeholder="ابحث عن رقم العقد، اسم المستأجر..." className="bg-transparent text-sm w-full outline-none font-sans" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <Globe className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition" />
            <div className="relative">
              <Bell className="w-5 h-5 hover:text-emerald-600 cursor-pointer transition" />
              <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0 border border-white"></div>
            </div>
          </div>
        </div>

        <div className="p-8 overflow-y-auto flex-1 relative z-0 h-full" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}>
          {activeTab === 'الرئيسية' && renderDashboardOverview()}
          {activeTab === 'العقود' && renderContracts()}
          {activeTab === 'لوحة المكتب العقاري' && renderOfficeDashboard()}
          {activeTab === 'العقارات' && renderProperties()}
          {activeTab === 'المدفوعات' && renderPayments()}
          {activeTab === 'الإيصالات' && renderReceipts()}
          {activeTab === 'المصروفات' && renderExpenses()}
          {activeTab === 'التذكيرات' && renderReminders()}
          {activeTab === 'التقارير' && renderReports()}
        </div>
      </div>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );
}
