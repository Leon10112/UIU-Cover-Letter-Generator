const form = document.getElementById("coverForm");
const preview = document.getElementById("preview");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("outStudentName").innerText = document.getElementById("studentName").value;
  document.getElementById("outStudentId").innerText = document.getElementById("studentId").value;
  document.getElementById("outCourseName").innerText = document.getElementById("courseName").value;
  document.getElementById("outCourseCode").innerText = document.getElementById("courseCode").value;
  document.getElementById("outSection").innerText = document.getElementById("section").value || "---";
  document.getElementById("outTeacherName").innerText = document.getElementById("teacherName").value;
  document.getElementById("outSubmissionDate").innerText = document.getElementById("submissionDate").value;

  form.classList.add("hidden");
  preview.classList.remove("hidden");
});

function resetForm() {
  form.classList.remove("hidden");
  preview.classList.add("hidden");
}
