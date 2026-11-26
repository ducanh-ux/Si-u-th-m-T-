/* ============================================================
   FILE ĐĂNG KÝ DANH SÁCH VỤ ÁN
   ------------------------------------------------------------
   Để thêm vụ án mới, bạn chỉ cần làm đúng 2 bước:
   1. Tạo file vụ án mới trong thư mục cases/ (ví dụ: case-02.js)
   2. Thêm 1 dòng đường dẫn vào mảng CASE_FILES bên dưới
   ============================================================ */

export const CASE_FILES = [
  "./case-01.js",
  "./case-02.js",
];

export async function loadCases() {
  const modules = await Promise.all(CASE_FILES.map(file => import(file)));
  return modules.map(m => m.default);
}
