# 📜 Quy tắc viết Commit

Dự án này áp dụng chuẩn **Conventional Commits** để đặt tên commit, giúp:

- Lịch sử commit rõ ràng, dễ đọc.
- Dễ dàng tạo changelog tự động.
- Hỗ trợ release version tự động (semantic versioning).

---

## 📌 Cấu trúc commit

<type>(<scope>): <description>

- **type**: Loại thay đổi (bắt buộc).
- **scope**: Phạm vi hoặc module bị ảnh hưởng (tùy chọn).
- **description**: Mô tả ngắn gọn, không viết hoa chữ cái đầu, không kết thúc bằng dấu chấm.

---

## 🏷 Loại commit (`type`)

| Type         | Ý nghĩa                                                    |
| ------------ | ---------------------------------------------------------- |
| **feat**     | ✨ Thêm tính năng mới.                                     |
| **fix**      | 🐛 Sửa lỗi.                                                |
| **docs**     | 📚 Thay đổi tài liệu (README, comment...).                 |
| **style**    | 🎨 Thay đổi định dạng, format code, không ảnh hưởng logic. |
| **refactor** | 🔨 Thay đổi cấu trúc code nhưng không thay đổi hành vi.    |
| **perf**     | ⚡ Cải thiện hiệu suất.                                    |
| **test**     | 🧪 Thêm hoặc chỉnh sửa test.                               |
| **build**    | 📦 Thay đổi liên quan đến build system, dependency.        |
| **ci**       | 🤖 Thay đổi cấu hình CI/CD.                                |
| **chore**    | 🧹 Thay đổi lặt vặt, không ảnh hưởng code logic.           |
| **revert**   | ⏪ Hoàn tác commit trước đó.                               |

---

## 📝 Ví dụ commit hợp lệ

feat(auth): thêm đăng nhập bằng Google
fix(api): sửa lỗi không fetch được dữ liệu
docs(readme): cập nhật hướng dẫn cài đặt
style: format code với prettier
refactor(user): tách component UserProfile
perf(list): tối ưu render danh sách
test: thêm unit test cho utils
build: nâng cấp react-native lên 0.74
ci: cấu hình github actions chạy lint
chore: xóa file không dùng
revert: revert "feat(auth): thêm đăng nhập bằng Google"

---

## ⚠ Quy tắc mô tả

- Viết **ngắn gọn, súc tích** (≤ 72 ký tự).
- Không viết hoa chữ cái đầu.
- Không kết thúc bằng dấu chấm.
- Dùng **tiếng Anh hoặc tiếng Việt** thống nhất trong dự án.
