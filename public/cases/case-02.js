/* ============================================================
   VỤ ÁN 02: PHÒNG Y TẾ CŨ
   ------------------------------------------------------------
   Mỗi file vụ án là một đối tượng độc lập hoàn toàn (export default { ... }).
   Các trường dữ liệu hỗ trợ:
   - id:        Mã vụ án duy nhất (ví dụ: "case-02").
   - blurb:     Một dòng mô tả ngắn hiện trên thẻ chọn vụ án.
   - cover:     (Tuỳ chọn) Ảnh bìa thẻ vụ án (ví dụ: "images/case02/cover.webp").
   - pageBg:    (Tuỳ chọn) Ảnh nền trang khi chơi vụ án (ví dụ: "images/case02/page.webp").
   - title:     Tên vụ án.
   - intro:     Lời mở đầu bối cảnh vụ án.
   - clues:     Danh sách manh mối { id: { name, text } }.
   - locations: Mảng địa điểm { id, bg?, name, desc, items: [{ label, text, clue?, needs? }] }.
   - suspects:  Mảng nghi phạm { id, img?, name, role, bio, deny?, questions, confront? }.
   - solution:  Đáp án { maxEvidence, keyClues, culprit, win, lose }.
   ============================================================ */

export default {
  id: "case-02",
  blurb: "Một học sinh chết trong phòng y tế cũ. Sáu người ở lại trường tối đó, không ai có ngoại phạm.",
  cover: "images/case02/cover.webp",
  pageBg: "images/case02/page.webp",
  title: "Phòng y tế cũ",
  intro: "Lý Minh Thanh, học sinh lớp 11 trường THPT Ánh Dương, được bảo vệ phát hiện đã chết trong phòng y tế cũ lúc 06:30 sáng thứ Tư. Cậu bị bắt nạt suốt nhiều tháng. Sáu người ở lại trường tối hôm trước, không ai có ngoại phạm, và tất cả đều đang nói dối điều gì đó. Hãy tìm ra ai thật sự gây ra cái chết của Thanh.",

  clues: {
    autopsy:    { name: "Báo cáo khám nghiệm", text: "Nguyên nhân tử vong: sốc thuốc an thần do quá liều. Trong máu còn thuốc chống trầm cảm, hai loại cộng dồn. Các vết thương do bị đánh nặng nhưng không gây tử vong. Thời điểm tử vong: 22:00 đến 23:00." },
    dna:        { name: "DNA dưới móng tay nạn nhân", text: "Mảnh da dưới móng tay Thanh mang DNA của Phạm Khánh Linh." },
    rx:         { name: "Đơn thuốc trong cặp Thanh", text: "Đơn thuốc chống trầm cảm do bác sĩ kê. Số viên còn lại khớp với việc Thanh vẫn uống đều." },
    phone:      { name: "Điện thoại của Thanh", text: "Tắt nguồn lúc 21:48 gần khu phòng y tế cũ và chưa tìm thấy. Không có lệnh khóa từ xa." },
    lastmsg:    { name: "Tin nhắn cuối của Thanh", text: "Gửi lúc 20:40 cho một người bạn: “Mình có bằng chứng rồi. Sáng mai mình sẽ nộp lên hiệu trưởng.” Không nói bằng chứng về chuyện gì." },
    fightscene: { name: "Hiện trường sau nhà thể chất cũ", text: "Vệt máu khô, một mảnh gọng kính vỡ và nhiều dấu giày khác nhau trên nền xi măng." },
    neat:       { name: "Tư thế thi thể", text: "Thanh nằm ngay ngắn trên giường, được đắp chăn. Không có dấu vết bị kéo lê hay giằng co." },
    pillmissing:{ name: "Tủ thuốc phòng y tế cũ", text: "Tủ không bị cạy. Kiểm kho thấy thiếu một vỉ thuốc an thần. Chìa tủ có 3 bản: y tá (đang nghỉ phép), thầy Sơn (phụ trách y tế học đường kiêm nhiệm) và thầy hiệu phó." },
    gatelog:    { name: "Sổ cổng tối thứ Ba", text: "Sau 20:30 chỉ có một lượt xe ra: xe của thầy Sơn lúc 22:10. Bảo vệ Tư đi tuần khu A từ 21:00 đến 22:00." },
    duty:       { name: "Bảng phân công trực", text: "Thầy Sơn trực buổi ôn thi tối thứ Ba, kết thúc lúc 20:30." },
    keylog:     { name: "Sổ mượn chìa phòng CLB Nhiếp ảnh", text: "Vũ Thảo Vy mượn chìa lúc 19:00 và trả lúc 22:30. Phòng CLB có cửa sổ nhìn sang phía phòng y tế cũ." },
    vyphoto:    { name: "Ảnh Vy chụp lúc 21:12", text: "Ảnh chụp từ cửa sổ CLB, mờ: một người lớn mặc sơ mi sáng màu đang dìu một học sinh về phía phòng y tế cũ. Không thấy rõ mặt." },
    truetime:   { name: "Lời khai thật của Nam", text: "Nhóm đánh Thanh sau nhà thể chất cũ từ khoảng 20:15 đến 20:30 rồi bỏ đi. Lúc họ rời đi Thanh vẫn còn sống và đứng dậy được." },
    linhsee:    { name: "Linh thấy Thanh đi về phía khu giáo viên", text: "Sau trận đánh, Linh thấy Thanh lết về phía khu nhà giáo viên." },
    light:      { name: "Đèn phòng giáo viên khu B", text: "Theo Bảo, đèn phòng giáo viên khu B vẫn sáng lúc khoảng 20:30." },
    huyvideo:   { name: "Video Huy quay", text: "Đoạn video dài 16 phút, dừng lúc 20:31, cuối clip Thanh vẫn đứng được." },
    bribe:      { name: "Sổ ghi tay trong ngăn kéo thầy Sơn", text: "Danh sách tên học sinh kèm ngày và số tiền, có cả học sinh khối 11. Không rõ đây là khoản gì." }
  },

  locations: [
    { id: "police", bg: "images/case02/police.webp", name: "Hồ sơ cảnh sát", desc: "Bàn làm việc của tổ điều tra, hồ sơ vụ án xếp thành từng tập.",
      items: [
        { label: "Đọc báo cáo khám nghiệm", text: "Kết luận của pháp y.", clue: "autopsy" },
        { label: "Xem kết quả giám định DNA", text: "Kết quả giám định mẫu dưới móng tay nạn nhân.", clue: "dna" },
        { label: "Truy vết điện thoại của Thanh", text: "Dữ liệu định vị và nhà mạng.", clue: "phone" },
        { label: "Xem tin nhắn cuối của Thanh", text: "Tin nhắn gửi đi lúc 20:40.", clue: "lastmsg" },
        { label: "Xem đồ trong cặp Thanh", text: "Giữa các cuốn vở có một tờ đơn thuốc.", clue: "rx" }
      ] },
    { id: "oldgym", bg: "images/case02/oldgym.webp", name: "Nhà thể chất cũ", desc: "Khu nhà bỏ hoang cuối sân trường, phía sau là bãi xi măng khuất đèn.",
      items: [
        { label: "Xem nền xi măng phía sau", text: "Dấu vết của một cuộc xô xát.", clue: "fightscene" },
        { label: "Tìm quanh bãi cỏ", text: "Vài vỏ lon nước ngọt và mẩu thuốc lá cũ. Không rút ra được gì." }
      ] },
    { id: "clinic", bg: "images/case02/clinic.webp", name: "Phòng y tế cũ", desc: "Căn phòng nhỏ mùi cồn, giường sắt và một tủ thuốc kính cũ.",
      items: [
        { label: "Xem tư thế nạn nhân và chiếc giường", text: "Bạn quan sát vị trí thi thể và mặt giường.", clue: "neat" },
        { label: "Kiểm tra tủ thuốc", text: "Bạn kiểm kho thuốc theo sổ.", clue: "pillmissing" }
      ] },
    { id: "gate", bg: "images/case02/gate.webp", name: "Chòi bảo vệ", desc: "Chú Tư bảo vệ ngái ngủ ngồi cạnh cuốn sổ xe ra vào.",
      items: [
        { label: "Xem sổ ra vào tối thứ Ba", text: "Các dòng ghi sau giờ tan học.", clue: "gatelog" }
      ] },
    { id: "club", bg: "images/case02/club.webp", name: "Phòng CLB Nhiếp ảnh", desc: "Phòng chật ních máy ảnh cũ, đèn đọc phim và những tấm ảnh dán tường.",
      items: [
        { label: "Xem sổ mượn chìa khóa", text: "Cuốn sổ mượn chìa phòng của câu lạc bộ.", clue: "keylog" },
        { label: "Nhìn ra cửa sổ", text: "Từ đây nhìn thấy mặt sau phòng y tế cũ và lối đi từ khu nhà giáo viên." }
      ] },
    { id: "staff", bg: "images/case02/staff.webp", name: "Phòng giáo viên khu B", desc: "Phòng làm việc chung của giáo viên, mỗi người một bàn.",
      items: [
        { label: "Xem bảng phân công trực", text: "Bảng ghi lịch trực buổi ôn thi tối nay và các tối trước.", clue: "duty" },
        { label: "Lục ngăn kéo bàn thầy Sơn", text: "Ngăn dưới cùng có một cuốn sổ nhỏ.", clue: "bribe", needs: "gatelog" }
      ] }
  ],

  suspects: [
    { id: "nam", img: "images/case02/nam.webp", name: "Trần Hoàng Nam", role: "Học sinh lớp 11, cầm đầu nhóm", bio: "Cao to, hay cười khẩy, nói to để át lo lắng.",
      deny: "Bằng chứng đó chẳng chứng minh được gì. Tôi về nhà ngay sau giờ học rồi.",
      questions: [
        { q: "Tối thứ Ba cậu ở đâu?", a: "Về nhà ngay sau giờ học. Tôi không gặp Thanh." },
        { q: "Cậu và Thanh có thù oán gì?", a: "Nó hay mách thầy cô. Đáng đời." }
      ],
      confront: [
        { with: "autopsy", a: "...Thật à? Được rồi. Bọn tôi đánh nó sau nhà thể chất cũ từ khoảng 20:15 đến 20:30, rồi bỏ đi. Lúc đó nó còn đứng dậy chửi lại được.", clue: "truetime" }
      ] },
    { id: "linh", img: "images/case02/linh.webp", name: "Phạm Khánh Linh", role: "Học sinh lớp 11", bio: "Nhỏ người, nói nhanh, tay luôn kéo tay áo xuống.",
      deny: "Tôi không biết gì hết. Tôi về từ lúc tan học.",
      questions: [
        { q: "Tối thứ Ba cậu ở đâu?", a: "Tôi về lúc tan học." }
      ],
      confront: [
        { with: "dna", a: "Tôi xô nó, nó cào tôi. Chỉ vậy thôi, tôi không giết nó!" },
        { with: "truetime", after: "dna", a: "Sau khi bọn tôi bỏ đi, tôi thấy nó lết về phía khu nhà giáo viên. Tôi tưởng nó đi mách.", clue: "linhsee" }
      ] },
    { id: "bao", img: "images/case02/bao.webp", name: "Nguyễn Gia Bảo", role: "Học sinh lớp 11", bio: "Ít nói, hay nhìn quanh, hay nhai móng tay.",
      deny: "Tôi ở nhà chơi game. Hỏi mẹ tôi đi.",
      questions: [
        { q: "Tối thứ Ba cậu ở đâu?", a: "Ở nhà chơi game." }
      ],
      confront: [
        { with: "truetime", a: "...Tôi đứng canh ở góc nhà thể chất. Lúc đó đèn phòng giáo viên khu B vẫn còn sáng, khoảng 20:30.", clue: "light" }
      ] },
    { id: "huy", img: "images/case02/huy.webp", name: "Lê Quốc Huy", role: "Học sinh lớp 11", bio: "Mập, hay cười, luôn cầm điện thoại.",
      deny: "Tôi không quay gì cả. Tôi về sớm mà.",
      questions: [
        { q: "Tối thứ Ba cậu ở đâu?", a: "Tôi về sớm." }
      ],
      confront: [
        { with: "truetime", a: "Có, Nam bảo quay làm trò. Video dừng lúc 20:31, cuối clip Thanh còn đứng được.", clue: "huyvideo" }
      ] },
    { id: "vy", img: "images/case02/vy.webp", name: "Vũ Thảo Vy", role: "Học sinh lớp 11, thành viên CLB Nhiếp ảnh", bio: "Dáng gầy, ôm chặt máy ảnh, hay nhìn xuống đất.",
      deny: "Em về nhà từ chiều rồi. Em không biết gì cả.",
      questions: [
        { q: "Tối thứ Ba em ở đâu?", a: "Em về nhà từ chiều." }
      ],
      confront: [
        { with: "keylog", a: "Em bị cấm ở lại trường sau giờ học. Em chỉ ngồi chỉnh ảnh thôi, em không thấy gì đâu." },
        { with: "truetime", after: "keylog", a: "Nếu bọn họ đã nói thật thì... lúc 21:12 em chụp ảnh, vô tình có một người lớn đang dìu Thanh về phía phòng y tế cũ. Em tưởng là thầy giúp bạn nên không nghĩ gì.", clue: "vyphoto" }
      ] },
    { id: "son", img: "images/case02/son.webp", name: "Thầy Tô Hoàng Sơn", role: "Giáo viên, trực ôn thi tối thứ Ba", bio: "Điềm tĩnh, nói chuyện nhẹ nhàng, được học sinh quý mến.",
      deny: "Tôi không hiểu em muốn nói gì. Tôi chỉ muốn Thanh được yên nghỉ.",
      questions: [
        { q: "Tối thứ Ba thầy ở đâu?", a: "Tôi trực ôn thi đến 20:30 rồi về." },
        { q: "Thầy nghĩ gì về nhóm của Nam?", a: "Tôi đã nhắc nhở nhiều lần. Thật đáng tiếc cho Thanh." }
      ],
      confront: [
        { with: "gatelog", a: "Tôi quay lại lấy tài liệu quên rồi mới về. Chuyện nhỏ thôi." },
        { with: "pillmissing", a: "Tôi giữ một chiếc chìa, nhưng tôi không mở tủ từ đầu tháng." },
        { with: "vyphoto", after: "gatelog", a: "Tôi chỉ đưa em ấy vào phòng y tế vì thấy bị thương. Em bảo ổn nên tôi để em nằm nghỉ rồi về." }
      ] }
  ],

  solution: {
    maxEvidence: 5,
    keyClues: ["truetime", "vyphoto", "gatelog"],
    culprit: "son",
    win: "Chính xác! Trận đòn của nhóm Nam không giết Thanh. Cậu bé đã nắm được bằng chứng thầy Sơn thu tiền nâng điểm và định nộp lên hiệu trưởng. Thấy Thanh yếu ớt sau trận đòn, thầy Sơn dìu cậu vào phòng y tế cũ, cho uống thuốc an thần lấy từ chiếc tủ chỉ mình thầy có chìa để cậu ngủ thiếp đi, rồi lấy điện thoại để xóa bằng chứng. Thuốc cộng dồn với thuốc chống trầm cảm Thanh đang dùng đã gây sốc thuốc. Thầy Sơn hoảng sợ, giấu điện thoại, đắp chăn cho Thanh và rời đi lúc 22:10. Nhưng lời khai về giờ về của thầy đã không còn khớp với sổ cổng và tấm ảnh của Vy.",
    lose: "Tòa bác bỏ cáo buộc. Vụ án bị đình chỉ vì thiếu căn cứ."
  }
};
