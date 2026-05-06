const questions = [
  {
    question: "Tài liệu Văn hóa EVN gồm mấy chương?",
    answers: ["1", "2", "3", "4"],
    correct: 1
  },
  {
    question: "Trong Chương I - Bản sắc Văn hóa EVN bao gồm những nội dung gì?",
    answers: [
      "Sứ mệnh, tầm nhìn, khẩu hiệu và triết lý hoạt động EVN",
      "Các giá trị cốt lõi của EVN",
      "Các chuẩn mực đạo đức nghề nghiệp của EVN",
      "Câu a,b,c đúng"
    ],
    correct: 3
  },
  {
    question: "Sứ mệnh của EVN là cung cấp điện với chất lượng và dịch vụ ngày càng tốt hơn, đảm bảo trách nhiệm với môi trường và cộng đồng.",
    answers: ["Đúng", "Sai"],
    correct: 0
  },
  {
    question: "Trong tài liệu Văn hóa EVN, nội dung \"EVN là tập đoàn kinh tế hàng đầu trong lĩnh vực năng lượng tại Việt Nam và khu vực châu Á\" là",
    answers: ["Sứ mệnh", "Tầm nhìn", "Khẩu hiệu", "Triết lý hoạt động"],
    correct: 1
  },
  {
    question: "Khẩu hiệu của EVN là:",
    answers: ["Chuyên nghiệp-Minh bạch-Hiệu quả", "Niềm tin-Trách nhiệm-Tiên phong", "An toàn-Đoàn kết-Nhân văn", "Thắp sáng niềm tin"],
    correct: 3
  },
  {
    question: "\"Khách hàng là trung tâm của sự tồn tại và phát triển, con người là tài sản quý giá nhất, niềm tin được thắp sáng bằng các giá trị được tạo dựng và chia sẻ\" là:",
    answers: ["Sứ mệnh", "Các giá trị cốt lõi của EVN", "Triết lý hoạt động", "Tầm nhìn"],
    correct: 2
  },
  {
    question: "Trong tài liệu Văn hóa EVN có bao nhiêu giá trị cốt lõi",
    answers: ["4", "5", "8", "7"],
    correct: 1
  },
  {
    question: "Giá trị cốt lõi của EVN bao gồm:",
    answers: ["Niềm tin-Chất lượng", "Tiên phong - Sáng tạo", "Trách nhiệm", "Cả a, b,c"],
    correct: 3
  },
  {
    question: "Trong tài liệu Văn hóa EVN có bao nhiêu chuẩn mực đạo đức nghề nghiệp?",
    answers: ["5", "2", "3", "4"],
    correct: 0
  },
  {
    question: "Các chuẩn mực đạo đức nghề nghiệp của EVN gồm:",
    answers: ["An toàn-Đoàn kết", "Nhân văn-Trung thực-Minh bạch", "Niềm tin-Chất lượng-Tiên phong", "Câu a và b"],
    correct: 3
  },
  {
    question: "EVN thắp sáng ….. bằng trách nhiệm, sự tận tâm, tinh thần tiên phong và sáng tạo để nâng cao chất lượng cuộc sống của…..và….",
    answers: ["Ước mơ-khách hàng-đối tác", "Niềm tin-khách hàng-cộng đồng xã hội", "Tương lai-khách hàng-CBCNV", "Cả a, b,c đều sai"],
    correct: 1
  },
  {
    question: "Trong tài liệu Văn hóa EVN, Niềm tin thể hiện ở:",
    answers: [
      "Tôn trọng khách hàng, đối tác, đồng nghiệp và đối xử với họ như cách chúng ta muốn được đối xử",
      "Ứng xử chuyên nghiệp và thiện chí với mọi người",
      "Câu a và b đúng",
      "Tuân thủ các tiêu chuẩn nghiêm ngặt về an toàn"
    ],
    correct: 2
  },
  {
    question: "Trong tài liệu Văn hóa EVN, EVN cam kết cung cấp sản phẩm và dịch vụ có…. cho khách hàng và cộng đồng xã hội",
    answers: ["Niềm tin", "Chất lượng", "Sáng tạo", "Tiên phong"],
    correct: 1
  },
  {
    question: "EVN….trong nghiên cứu và phát triển để tạo ra những đột phát về năng lượng cho đất nước",
    answers: ["Tin tưởng", "Phấn đấu", "Tiên phong", "Sáng tạo"],
    correct: 2
  },
  {
    question: "Trong tài liệu Văn hóa EVN, nâng cao tinh thần học hỏi từ công việc, đồng nghiệp và đối tác, thử thách bản thân bằng các sáng kiến mới là điều chúng ta nên làm theo giá trị cốt lõi nào?",
    answers: ["Sáng tạo", "Niềm tin", "Nhân văn", "Đoàn kết"],
    correct: 0
  },
  {
    question: "EVN luôn có quan điểm nhất quán rằng,….. với khách hàng, đối tác, cộng đồng xã hội và với tương lai của đất nước là một phần không thể thiếu trong….của EVN",
    answers: ["Phương châm - nhận thức", "Đoàn kết - giá trị", "An toàn - nhiệm vụ", "Trách nhiệm - sứ mệnh"],
    correct: 3
  },
  {
    question: "Các giá trị chuẩn mực đạo đức nghề nghiệp của người EVN bao gồm \"An toàn-Đoàn kết-Nhân văn-Trung thực-Minh bạch\"",
    answers: ["Đúng", "Sai"],
    correct: 0
  },
  {
    question: "....là tôn chỉ hành động và chuẩn mực … mà EVN phải thực hiện nghiêm ngặt.",
    answers: ["Trung thực-văn hóa", "An toàn - đạo đức", "Sáng tạo-văn hóa", "Niềm tin-văn hóa"],
    correct: 1
  },
  {
    question: "Trong tài liệu văn hóa EVN, nguyên tắc chung để người EVN thực thi chuẩn mực Trung thực là:",
    answers: ["Lãnh đạo phải làm gương", "Sẵn lòng nhiệt thành cống hiến", "Lời nói đi đôi với việc làm", "Kiến tạo và chia sẻ"],
    correct: 2
  },
  {
    question: "Trong tài liệu văn hóa EVN, sức mạnh trong mọi hoạt động của EVN là tinh thần…..và….",
    answers: ["Đoàn kết", "Trí tuệ tập thể", "Câu a và b sai", "Câu a và b đúng"],
    correct: 3
  },
  {
    question: "Vì niềm tin của người lao động, EVN cam kết:",
    answers: [
      "Đảm bảo ổn định việc làm và ngày càng nâng cao đời sống vật chất, tinh thần của người lao động.",
      "Mang đến cho người lao động sự tôn trọng, công bằng và môi trường làm việc an toàn, văn minh, thân thiện, tin cậy và minh bạch.",
      "Đầu tư đào tạo, phát triển toàn diện người lao động, luôn khuyến khích, tạo điều kiện cho người lao động rèn luyện, trau dồi kiến thức, kỹ năng để phát triển năng lực.",
      "Người lao động luôn là tài sản quý giá nhất"
    ],
    correct: 3
  },
  {
    question: "Các giá trị chuẩn mực trong hành vi ứng xử chung của EVN gồm:",
    answers: ["Tôn trọng", "Tận tâm", "Chuyên nghiệp", "Hợp tác"],
    correct: [0, 1, 2, 3]
  },
  {
    question: "Đâu là các nguyên tắc trong thực thi VHDN EVN",
    answers: [
      "Nguyên tắc thứ nhất: Đã là EVN thì chất lượng và đáng tin cậy",
      "Nguyên tắc thứ hai: Thực hiện công việc được giao và chịu trách nhiệm đến kết quả cuối cùng",
      "Nguyên tắc thứ ba: Sức mạnh trong mọi hoạt động của EVN là tinh thần đoàn kết và trí tuệ tập thể",
      "Nguyên tắc thứ tư: Có cá nhân xuất sắc mới có tập thể sáng tạo"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    question: "Sổ tay Chuẩn mực hành vi ứng xử EVNHCMC dành cho các đối tượng nào:",
    answers: [
      "Cán bộ quản lý, Nhân viên giao tiếp khách hàng, Nhân viên văn phòng",
      "Cán bộ quản lý, Công nhân điện, Nhân viên giao tiếp khách hàng",
      "Công nhân điện, Nhân viên giao tiếp khách hàng, Nhân viên văn phòng",
      "Cán bộ quản lý, Công nhân điện, Nhân viên giao tiếp khách hàng, Nhân viên văn phòng"
    ],
    correct: 3
  },
  {
    question: "Sổ tay Chuẩn mực hành vi ứng xử EVNHCMC dành cho bao nhiêu đối tượng:",
    answers: ["4", "5", "6", "7"],
    correct: 0
  },
  {
    question: "Mỗi cuốn Sổ tay Chuẩn mực hành vi ứng xử của EVNHCMC dành cho từng đối tượng—cán bộ quản lý, công nhân điện, nhân viên giao tiếp khách hàng và nhân viên văn phòng—được cấu trúc thành bao nhiêu phần",
    answers: ["5", "4", "3", "2"],
    correct: 3
  },
  {
    question: "Trong Sổ tay Chuẩn mực hành vi ứng xử, các chuẩn mực ứng xử chung được chia thành bao nhiêu chương",
    answers: ["7", "6", "5", "4"],
    correct: 1
  },
  {
    question: "Các tài liệu nào dưới đây có liên quan đến Sổ tay Chuẩn mực hành vi ứng xử của EVNHCMC:",
    answers: [
      "Tài liệu Văn hoá EVN, Tài liệu Phong cách lãnh đạo EVNHCMC",
      "Bộ Quy tắc ứng xử EVN, Tài liệu Phong cách lãnh đạo EVNHCMC",
      "Tài liệu Văn hoá EVN, Bộ Quy tắc ứng xử EVN, Tài liệu Phong cách lãnh đạo EVNHCMC",
      "Tài liệu Văn hoá EVN, Bộ Quy tắc ứng xử EVN"
    ],
    correct: 2
  },
  {
    question: "Trong Phần “Các chuẩn mực hành vi ứng xử chung” của Sổ tay Bộ chuẩn mực hành vi ứng xử EVNHCMC, nội dung “Tuân thủ pháp luật và chuẩn mực đạo đức nghề nghiệp” được quy định tại chương nào",
    answers: [
      "Chương I: Tuân thủ pháp luật và các chuẩn mực đạo đức nghề nghiệp",
      "Chương II: Thực thi tốt các quy tắc ứng xử chung",
      "Chương III: Các chuẩn mực ứng xử và làm việc nội bộ",
      "Chương V: Ứng xử với khách hàng và đối tác"
    ],
    correct: 0
  },
  {
    question: "Trong Phần “Các chuẩn mực hành vi ứng xử chung” của Sổ tay Bộ chuẩn mực hành vi ứng xử EVNHCMC, nội dung “Đặt con người ở vị trí trung tâm trong mọi hoạt động” được quy định tại chương nào",
    answers: [
      "Chương I: Tuân thủ pháp luật và các chuẩn mực đạo đức nghề nghiệp",
      "Chương II: Thực thi tốt các quy tắc ứng xử chung",
      "Chương IV: Ứng xử với các cơ quan cấp trên và địa phương",
      "Chương V: Ứng xử với khách hàng và đối tác"
    ],
    correct: 3
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answersBox = document.getElementById("answers");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreText = document.getElementById("score-text");

function isMultipleAnswer(question) {
  return Array.isArray(question.correct);
}

function loadQuestion() {
  answered = false;
  feedback.textContent = "";
  feedback.className = "";
  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];
  const inputType = isMultipleAnswer(q) ? "checkbox" : "radio";

  questionNumber.textContent = `Câu ${currentQuestion + 1}/${questions.length}`;
  questionText.textContent = q.question;
  answersBox.innerHTML = "";

  if (isMultipleAnswer(q)) {
    const note = document.createElement("p");
    note.className = "multi-note";
    note.textContent = "Câu này có thể có nhiều đáp án đúng.";
    answersBox.appendChild(note);
  }

  q.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";

    label.innerHTML = `
      <input type="${inputType}" name="answer" value="${index}">
      ${answer}
    `;

    answersBox.appendChild(label);
  });
}

function getSelectedAnswers() {
  return Array.from(document.querySelectorAll('input[name="answer"]:checked'))
    .map(input => Number(input.value))
    .sort((a, b) => a - b);
}

function isCorrectAnswer(selectedAnswers, correctAnswer) {
  if (Array.isArray(correctAnswer)) {
    const sortedCorrect = [...correctAnswer].sort((a, b) => a - b);
    return selectedAnswers.length === sortedCorrect.length &&
      selectedAnswers.every((value, index) => value === sortedCorrect[index]);
  }

  return selectedAnswers.length === 1 && selectedAnswers[0] === correctAnswer;
}

submitBtn.addEventListener("click", () => {
  if (answered) return;

  const selectedAnswers = getSelectedAnswers();

  if (selectedAnswers.length === 0) {
    feedback.textContent = "Vui lòng chọn ít nhất một đáp án.";
    feedback.className = "wrong";
    return;
  }

  answered = true;
  const q = questions[currentQuestion];

  if (isCorrectAnswer(selectedAnswers, q.correct)) {
    score++;
    feedback.textContent = "Chính xác!";
    feedback.className = "correct";
  } else {
    feedback.textContent = "Không chính xác!";
    feedback.className = "wrong";
  }

  document.querySelectorAll('input[name="answer"]').forEach(input => {
    input.disabled = true;
  });

  submitBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  scoreText.textContent = `Bạn trả lời đúng ${score}/${questions.length} câu.`;
}

loadQuestion();
