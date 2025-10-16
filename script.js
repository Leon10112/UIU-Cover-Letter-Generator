function updatePreview() {
  document.getElementById("displayAssignmentTitle").textContent =
    document.getElementById("assignmentTitle").value;
  document.getElementById("displayCourseName").textContent =
    document.getElementById("courseName").value;
  document.getElementById("displayCourseCode").textContent =
    document.getElementById("courseCode").value;
  document.getElementById("displaySubmissionDate").textContent =
    document.getElementById("submissionDate").value || "---";
  document.getElementById("displayStudentName").textContent =
    document.getElementById("studentName").value;
  document.getElementById("displayStudentId").textContent =
    document.getElementById("studentId").value;
  document.getElementById("displaySection").textContent =
    document.getElementById("section").value;
  document.getElementById("displayTeacherName").textContent =
    document.getElementById("teacherName").value;
  document.getElementById("displayTeacherPosition").textContent =
    document.getElementById("teacherPosition").value;
  document.getElementById("displayDepartment").textContent =
    document.getElementById("department").value;
}

document.getElementById("previewButton").addEventListener("click", () => {
  updatePreview();
  document.getElementById("coverPage").classList.remove("hidden");
  document.getElementById("coverPage").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("printButton").addEventListener("click", () => {
  updatePreview();
  window.print();
});

document.getElementById("logoUpload").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    document.getElementById("logoPreview").src = ev.target.result;
  };
  reader.readAsDataURL(file);
});
