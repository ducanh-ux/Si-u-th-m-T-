/* ============================================================
   HƯỚNG DẪN CẤU TRÚC MỘT VỤ ÁN (DÙNG ĐỂ TẠO VỤ ÁN MỚI)
   ------------------------------------------------------------
   Mỗi file vụ án là một đối tượng độc lập hoàn toàn (export default { ... }).
   ID của manh mối, địa điểm, nghi phạm chỉ cần KHÔNG trùng trong CÙNG vụ án này.

   - id:        Mã định danh duy nhất của vụ án (ví dụ: "case-01", "case-02").
   - title:     Tên vụ án (hiện ở danh sách chọn vụ và tiêu đề khi chơi).
   - summary:   Một dòng mô tả ngắn (hiện trên thẻ chọn vụ án).
   - intro:     Đoạn mở đầu bối cảnh vụ án (hiện khi bắt đầu điều tra).

   - clues:     Danh sách manh mối dưới dạng { ma_manh_moi: { name, text } }.
                  + name: Tên manh mối (chỉ nêu sự kiện, hiện trong Sổ tay & Buộc tội).
                  + text: Nội dung chi tiết của manh mối.

   - locations: Mảng các địa điểm có thể khám xét:
                  + id:    Mã địa điểm (không trùng trong vụ án).
                  + name:  Tên địa điểm.
                  + desc:  Mô tả khung cảnh địa điểm.
                  + items: Mảng các mục khám xét:
                      * label: Nút bấm khám xét.
                      * text:  Kết quả hiện ra sau khi bấm.
                      * clue:  (Tuỳ chọn) Mã manh mối nhận được (khớp với khóa trong clues).
                      * needs: (Tuỳ chọn) Mã manh mối bắt buộc phải có thì mục này mới hiện ra.

   - suspects:  Mảng các nghi phạm có thể thẩm vấn:
                  + id:        Mã nghi phạm (không trùng trong vụ án).
                  + name:      Họ tên nghi phạm.
                  + role:      Vai trò / mối quan hệ với nạn nhân.
                  + bio:       Mô tả ngoại hình, thái độ.
                  + questions: Mảng các câu hỏi:
                      * q:     Câu hỏi bạn đặt ra.
                      * a:     Câu trả lời của nghi phạm.
                      * clue:  (Tuỳ chọn) Mã manh mối nhận được sau khi hỏi.
                      * needs: (Tuỳ chọn) Mã manh mối cần có để mở câu hỏi đối chất này.

   - solution:  Đáp án để phá án:
                  + culprit:     Mã nghi phạm là hung thủ (khớp với id trong suspects).
                  + maxEvidence: Số bằng chứng tối đa được nộp cho tòa (mặc định: 5).
                  + keyClues:    Mảng các mã manh mối bắt buộc phải có trong số bằng chứng nộp.
                  + win:         Lời giải thích khi buộc tội đúng.
                  + lose:        Thông báo khi buộc tội sai hoặc thiếu bằng chứng then chốt.
   ============================================================ */

export default {
  id: "case-01",
  title: "Đêm mưa ở biệt thự Hoàng Gia",
  summary: "Nhà sưu tầm đồ cổ tử vong trong thư phòng đúng đêm cả biệt thự mất điện.",
  intro: "Ông Trần Quốc Bảo, nhà sưu tầm đồ cổ, được tìm thấy đã chết trong thư phòng lúc 23:30. Cả biệt thự mất điện từ 22:00 đến 22:30. Năm người ở trong nhà tối đó, và ai cũng có điều giấu giếm. Hãy tìm ra ai thật sự ra tay.",

  clues: {
    body:     { name: "Vết thương sau gáy", text: "Vết lõm tròn, nhỏ, do vật nặng bằng kim loại. Hung khí chưa tìm thấy và chưa được công bố cho ai." },
    tea:      { name: "Cặn thuốc ngủ trong cốc trà", text: "Lan pha trà lúc 21:45. Theo Lan, ông Bảo luôn tự thêm thuốc ngủ vào trà trước khi làm việc khuya." },
    notepad:  { name: "Ghi chú trên bàn ông Bảo", text: "Nét chữ vội: “9h sáng mai họp Minh và Hải. Lô Singapore: hỏi lại chứng thư.”" },
    ledger:   { name: "Sổ kế toán thiếu 3 trang", text: "Ba trang quý III bị xé. Mảnh vụn nằm trong thùng rác phòng khách, cạnh ly rượu của Hải." },
    gate:     { name: "Sổ cổng: xe của Hải", text: "Xe của Phạm Hải vào cổng lúc 18:40 và ra lúc 23:10. Người trong nhà không phải ghi sổ." },
    haicall:  { name: "Sao kê điện thoại của Hải", text: "Hải gọi cho ngân hàng từ 22:02 đến 22:41, tín hiệu từ khu phòng khách. Ngân hàng xác nhận cuộc gọi." },
    footprint:{ name: "Dấu giày bùn cỡ 43", text: "Dấu từ cửa vườn dẫn vào gần thư phòng, bùn còn ướt. Hải và Minh đều đi cỡ 43." },
    letter:   { name: "Thư tình giấu trong tủ", text: "Lá thư ký tên “T.”, hẹn gặp bà Ngọc ở nhà kính." },
    prenup:   { name: "Hợp đồng hôn nhân", text: "Nếu ly hôn, bà Ngọc gần như tay trắng. Nếu ông Bảo qua đời, bà là người thừa kế chính." },
    camera:   { name: "Camera nhà kính", text: "Chạy bằng pin dự phòng, ghi từ 22:05 đến 22:35: bà Ngọc và một người đàn ông ở trong nhà kính suốt thời gian đó." },
    ring:     { name: "Lan bị mắng vì mất nhẫn", text: "Trong bữa tối, ông Bảo mắng Lan trước mặt mọi người vì chiếc nhẫn ngọc biến mất. Lan nói mình bị oan." },
    shadow:   { name: "Bóng người Lan nhìn thấy", text: "Khoảng 22:15, Lan thấy một người cầm đèn điện thoại đi từ hành lang ra cửa sau. Người cao vừa, tóc ngắn, không thấy mặt." },
    tamfired: { name: "Tâm vừa bị sa thải", text: "Ông Bảo đuổi Tâm tuần trước vì một vụ va quệt xe. Tâm vẫn ở lại nhà phụ chờ nhận lương." },
    breaker:  { name: "Tủ điện nhà kho", text: "Cầu dao tổng bị gạt xuống bằng tay. Máy phát điện còn nguyên, chạy bình thường." },
    slip:     { name: "Lời Minh nói về hung khí", text: "Minh nhắc đến “con ngựa đồng trên bàn” như thứ đã dùng để đập ông Bảo." },
    motive:   { name: "Nghi vấn về lô hàng Singapore", text: "Theo Hải, ông Bảo nghi chứng thư giám định lô Singapore bị làm giả, và người phụ trách giấy tờ lô đó là Minh." },
    tamlate:  { name: "Lời khai thật của Tâm", text: "Tâm ngủ quên trong gara vì uống rượu, đến nhà kho khoảng 22:20. Lúc đó Minh đã ở đó, thở dốc, tay áo ướt." },
    horse:    { name: "Tượng ngựa đồng giấu trong nhà kho", text: "Tượng ngựa đồng bị lau sạch, giấu dưới bao tải. Nó khớp với vết lõm trên bàn làm việc." }
  },

  locations: [
    { id: "study", name: "Thư phòng", desc: "Căn phòng tối, mùi giấy cũ. Ông Bảo nằm gục cạnh bàn làm việc.",
      items: [
        { label: "Xem vết thương trên thi thể", text: "Một vết lõm tròn nhỏ sau gáy, do vật kim loại nặng.", clue: "body" },
        { label: "Kiểm tra cốc trà trên bàn", text: "Dưới đáy cốc có cặn trắng, mùi thuốc ngủ.", clue: "tea" },
        { label: "Xem mặt bàn làm việc", text: "Trên tập giấy có một vết lõm tròn và ít bụi đồng. Từng có vật kim loại nặng đặt ở đây, hiện không thấy." },
        { label: "Đọc ghi chú trên bàn", text: "Một tờ giấy nhớ viết vội.", clue: "notepad" }
      ] },
    { id: "hall", name: "Hành lang và phòng khách", desc: "Sàn gỗ dài, dẫn từ cửa vườn vào thư phòng. Phòng khách còn ly rượu chưa dọn.",
      items: [
        { label: "Xem sàn gỗ", text: "Dấu giày dính bùn ướt, đo được cỡ 43.", clue: "footprint" },
        { label: "Lục thùng rác phòng khách", text: "Những mảnh giấy xé từ sổ kế toán.", clue: "ledger" }
      ] },
    { id: "garden", name: "Vườn và nhà kính", desc: "Cỏ ướt sau cơn mưa. Nhà kính có một camera gắn pin dự phòng.",
      items: [
        { label: "Xem lại camera nhà kính", text: "Đoạn ghi hình từ 22:05 đến 22:35.", clue: "camera" },
        { label: "Đi quanh lối sau", text: "Cỏ nát, dấu chân lẫn lộn nhiều người. Không rút ra được gì." }
      ] },
    { id: "shed", name: "Nhà kho", desc: "Chỗ đặt máy phát điện, tủ điện tổng và đống dụng cụ.",
      items: [
        { label: "Kiểm tra máy phát và tủ điện", text: "Bạn xem kỹ cầu dao và máy.", clue: "breaker" },
        { label: "Lục các thùng đồ", text: "Bạn tìm thấy thứ gì đó bọc trong bao tải.", clue: "horse", needs: "slip" }
      ] },
    { id: "gate", name: "Chòi bảo vệ", desc: "Chú bảo vệ già buồn ngủ, bên cạnh cuốn sổ xe ra vào.",
      items: [
        { label: "Xem sổ xe ra vào", text: "Các dòng ghi tối qua.", clue: "gate" }
      ] },
    { id: "bedroom", name: "Phòng bà Ngọc", desc: "Phòng ngủ vợ chồng nạn nhân, rèm kéo kín.",
      items: [
        { label: "Lục tủ đầu giường", text: "Dưới lớp khăn có một lá thư.", clue: "letter" },
        { label: "Xem giấy tờ trên bàn trang điểm", text: "Một bản sao hợp đồng hôn nhân.", clue: "prenup" }
      ] }
  ],

  suspects: [
    { id: "hai", name: "Phạm Hải", role: "Đối tác kinh doanh", bio: "Hơn 50 tuổi, cao, tóc bạc, lịch thiệp và hay nhìn đồng hồ.",
      questions: [
        { q: "Ông ở đâu tối qua?", a: "Tôi rời biệt thự lúc 21:00, về nhà ngủ." },
        { q: "Sổ cổng ghi xe ông ra lúc 23:10.", a: "Được, tôi nói dối. Tôi xé sổ kế toán vì đang nợ ngân hàng, sợ Bảo phát hiện. Nhưng từ 22:02 đến 22:41 tôi nghe điện thoại ở phòng khách, cứ kiểm tra.", needs: "gate", clue: "haicall" },
        { q: "Ghi chú “lô Singapore” là gì?", a: "Lô hàng đồ cổ. Bảo nghi chứng thư giám định bị làm giả. Người lo giấy tờ lô đó là Minh, không phải tôi.", needs: "notepad", clue: "motive" },
        { q: "Giày ông cỡ bao nhiêu?", a: "Cỡ 43. Nhưng tối nay tôi chưa ra vườn.", needs: "footprint" }
      ] },
    { id: "ngoc", name: "Bà Ngọc", role: "Vợ nạn nhân", bio: "Gần 40 tuổi, mắt đỏ hoe, trả lời ngắn gọn.",
      questions: [
        { q: "Bà ở đâu lúc mất điện?", a: "Tôi đau đầu, nằm trong phòng cả tối." },
        { q: "Camera ghi bà ở nhà kính cùng một người đàn ông.", a: "Đó là bác sĩ Thành. Chúng tôi ở đó từ 22:05 đến khi điện sáng lại. Tôi xấu hổ nên không dám nói.", needs: "camera" },
        { q: "Hợp đồng hôn nhân này nói gì?", a: "Nó trói tay tôi. Nhưng tôi không giết chồng mình.", needs: "prenup" }
      ] },
    { id: "lan", name: "Cô Lan", role: "Người giúp việc", bio: "Hơn 20 tuổi, hay run tay, tránh nhìn thẳng vào mắt bạn.",
      questions: [
        { q: "Cô pha trà cho ông Bảo à?", a: "Vâng, lúc 21:45. Ông luôn tự thêm thuốc ngủ vào trà.", clue: "tea" },
        { q: "Cô thấy gì lúc mất điện?", a: "Tôi không thấy gì cả." },
        { q: "Nghe nói tối qua ông Bảo mắng cô.", a: "Vâng, ông nghi tôi lấy nhẫn ngọc. Tôi tức lắm, nhưng tôi không làm gì cả.", needs: "tea", clue: "ring" },
        { q: "Cô thật sự thấy gì lúc mất điện?", a: "Khoảng 22:15 tôi thấy bóng người cầm đèn điện thoại đi từ hành lang ra cửa sau. Cao vừa, tóc ngắn. Tôi sợ bị đổ oan nên im lặng.", needs: "ring", clue: "shadow" }
      ] },
    { id: "minh", name: "Lê Minh", role: "Thư ký riêng", bio: "Trẻ, gọn gàng, luôn cầm sổ ghi chép và là người đầu tiên báo tin cho bạn.",
      questions: [
        { q: "Anh ở đâu lúc mất điện?", a: "Tôi sửa máy phát ở nhà kho từ 22:00 đến 22:30. Tài xế Tâm làm chứng." },
        { q: "Theo anh, chuyện gì đã xảy ra?", a: "Thật khủng khiếp. Ai đó đã lấy con ngựa đồng trên bàn đập ông ấy, rồi mang đi mất.", clue: "slip" },
        { q: "Anh biết gì về cuốn sổ kế toán?", a: "Tôi chỉ giữ lịch. Nhưng ông Bảo từng nói có người rút tiền công ty.", needs: "ledger" },
        { q: "Tủ điện bị gạt tay, máy phát không hỏng.", a: "Chắc có ai nghịch. Tôi thấy máy không chạy nên đứng sửa thôi.", needs: "breaker" }
      ] },
    { id: "tam", name: "Tâm", role: "Tài xế", bio: "Thấp người, mắt đỏ, người nồng mùi rượu nhẹ.",
      questions: [
        { q: "Anh ở đâu lúc mất điện?", a: "Tôi ở nhà kho với anh Minh suốt từ 22:00." },
        { q: "Nghe nói ông Bảo vừa sa thải anh.", a: "Thứ Hai tuần trước, vì tôi va quệt xe. Tôi buồn, nhưng thôi.", clue: "tamfired" },
        { q: "Máy phát không hỏng. Vậy Minh sửa gì?", a: "...Thôi được. Tôi uống rượu trong gara nên ngủ quên, đến nhà kho khoảng 22:20. Lúc đó anh Minh đã ở đó, thở dốc, tay áo ướt.", needs: "breaker", clue: "tamlate" }
      ] }
  ],

  solution: {
    culprit: "minh",
    maxEvidence: 5,
    keyClues: ["breaker", "tamlate", "slip"],
    win: "Chính xác! Minh làm giả chứng thư lô Singapore, biết sáng mai ông Bảo sẽ chất vấn nên đã gạt cầu dao tổng để cả nhà chìm trong bóng tối, đập ông Bảo bằng con ngựa đồng, giấu nó đi rồi quay lại “sửa” máy phát. Anh ta chỉ lỡ miệng một lần: nhắc đến hung khí mà chưa ai công bố.",
    lose: "Tòa bác bỏ cáo buộc. Vụ án bị đình chỉ vì thiếu căn cứ."
  }
};
