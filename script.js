const questions = [
  {
    question: "Văn hóa doanh nghiệp là gì?",
    answers: [
      "Tập hợp các giá trị, niềm tin, chuẩn mực và hành vi trong doanh nghiệp",
      "Chỉ là đồng phục của nhân viên",
      "Chỉ là quy định về giờ làm việc",
      "Chỉ là khẩu hiệu treo trong văn phòng"
    ],
    correct: 0
  },
  {
    question: "Yếu tố nào thường thể hiện văn hóa doanh nghiệp?",
    answers: [
      "Cách giao tiếp và ứng xử trong tổ chức",
      "Màu sơn của tòa nhà",
      "Số lượng máy tính trong công ty",
      "Tên miền website"
    ],
    correct: 0
  },
  {
    question: "Tại sao văn hóa doanh nghiệp quan trọng?",
    answers: [
      "Vì giúp định hướng hành vi và tạo sự gắn kết",
      "Vì làm công ty có nhiều bàn ghế hơn",
      "Vì thay thế hoàn toàn chiến lược kinh doanh",
      "Vì không cần quản lý nhân sự nữa"
    ],
    correct: 0
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

function loadQuestion() {
  answered = false;
  feedback.textContent = "";
  feedback.className = "";
  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";

  const q = questions[currentQuestion];

  questionNumber.textContent = `Câu ${currentQuestion + 1}/${questions.length}`;
  questionText.textContent = q.question;
  answersBox.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";

    label.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      ${answer}
    `;

    answersBox.appendChild(label);
  });
}

submitBtn.addEventListener("click", () => {
  if (answered) return;

  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    feedback.textContent = "Vui lòng chọn một đáp án.";
    feedback.className = "wrong";
    return;
  }

  answered = true;
  const selectedAnswer = Number(selected.value);
  const correctAnswer = questions[currentQuestion].correct;

  if (selectedAnswer === correctAnswer) {
    score++;
    feedback.textContent = "Chính xác!";
    feedback.className = "correct";
  } else {
    feedback.textContent = "Không chính xác!";
    feedback.className = "wrong";
  }

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
