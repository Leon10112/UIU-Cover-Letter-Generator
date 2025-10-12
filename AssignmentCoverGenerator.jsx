import React, { useState, useRef } from "react";

export default function AssignmentCoverGenerator() {
  const [form, setForm] = useState({
    university: "Your University Name",
    department: "Department of ...",
    faculty: "",
    logoUrl: "",
    assignmentTitle: "Assignment Title",
    courseName: "Course Name",
    courseCode: "Course Code",
    submissionDate: new Date().toLocaleDateString(),
    studentName: "",
    studentId: "",
    section: "",
    teacherName: "",
    teacherPosition: "",
    extraNote: "",
  });

  const previewRef = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleLogoUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((s) => ({ ...s, logoUrl: reader.result }));
    reader.readAsDataURL(file);
  }

  function resetForm() {
    setForm((s) => ({
      ...s,
      logoUrl: "",
      assignmentTitle: "Assignment Title",
      courseName: "Course Name",
      courseCode: "Course Code",
      submissionDate: new Date().toLocaleDateString(),
      studentName: "",
      studentId: "",
      section: "",
      teacherName: "",
      teacherPosition: "",
      extraNote: "",
    }));
  }

  function handlePrint() {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return alert("Please allow popups to print.");

    const styles = `
      <style>
        @page { size: A4; margin: 20mm; }
        body { font-family: Inter, sans-serif; color: #111827; }
        .cover { width: 210mm; height: 297mm; padding: 24mm; box-sizing: border-box; }
        .header { display:flex; align-items:center; justify-content:space-between; }
        .logo { max-width:110px; max-height:110px; object-fit:contain; }
        h1 { font-size:28px; font-weight:700; text-align:center; }
        .meta { margin-top:26px; display:flex; justify-content:space-between; }
        .label { font-weight:600; font-size:14px; color:#374151; }
        .value { font-size:16px; margin-top:4px; }
      </style>
    `;

    const content = previewRef.current?.innerHTML || "";
    printWindow.document.write(`
      <html>
        <head><title>Cover Page</title>${styles}</head>
        <body><div class="cover">${content}</div></body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => printWindow.print(), 600);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* FORM */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Assignment Cover Page Generator
          </h2>
          <p className="text-sm text-gray-600">
            Fill the fields and preview on the right. Click Print to save as
            PDF.
          </p>

          <div className="grid gap-3">
            <label className="block">
              <span className="text-sm">University</span>
              <input
                name="university"
                value={form.university}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 p-2"
              />
            </label>

            <label className="block">
              <span className="text-sm">Department</span>
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 p-2"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label>
                <span className="text-sm">Course Name</span>
                <input
                  name="courseName"
                  value={form.courseName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-gray-300 p-2"
                />
              </label>

              <label>
                <span className="text-sm">Course Code</span>
                <input
                  name="courseCode"
                  value={form.courseCode}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-gray-300 p-2"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm">Assignment Title</span>
              <input
                name="assignmentTitle"
                value={form.assignmentTitle}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 p-2"
              />
            </label>

            <label className="block">
              <span className="text-sm">Submission Date</span>
              <input
                name="submissionDate"
                value={form.submissionDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 p-2"
              />
            </label>

            <h3 className="font-medium">Student Info</h3>
            <label>
              <span className="text-sm">Student Name</span>
              <input
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 p-2"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label>
                <span className="text-sm">Student ID</span>
                <input
                  name="studentId"
                  value={form.studentId}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-gray-300 p-2"
                />
              </label>

              <label>
                <span className="text-sm">Section</span>
                <input
                  name="section"
                  value={form.section}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded border-gray-300 p-2"
                />
              </label>
            </div>

            <h3 className="font-medium">Instructor Info</h3>
            <label>
              <span className="text-sm">Teacher Name</span>
              <input
                name="teacherName"
                value={form.teacherName}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 p-2"
              />
            </label>

            <label>
              <span className="text-sm">Teacher Position</span>
              <input
                name="teacherPosition"
                value={form.teacherPosition}
                onChange={handleChange}
                className="mt-1 block w-full rounded border-gray-300 p-2"
              />
            </label>

            <label>
              <span className="text-sm">Upload Logo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="mt-1 block w-full"
              />
            </label>

            <div className="flex gap-2 mt-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Print / Save PDF
              </button>
              <button
                onClick={resetForm}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* PREVIEW */}
        <div>
          <div
            ref={previewRef}
            className="bg-white shadow rounded p-6 text-center"
          >
            {form.logoUrl && (
              <img
                src={form.logoUrl}
                alt="Logo"
                className="mx-auto mb-3"
                style={{ width: 100 }}
              />
            )}
            <h1 className="text-xl font-bold">{form.university}</h1>
            <p className="text-sm text-gray-500">{form.department}</p>
            <h2 className="text-lg font-semibold mt-4">
              {form.assignmentTitle}
            </h2>

            <p className="mt-2 text-gray-600">
              {form.courseName} ({form.courseCode})
            </p>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <strong>Student:</strong> {form.studentName || "---"} (
                {form.studentId || "---"}) – {form.section}
              </p>
              <p>
                <strong>Instructor:</strong> {form.teacherName}{" "}
                {form.teacherPosition && `— ${form.teacherPosition}`}
              </p>
              <p>
                <strong>Submission Date:</strong> {form.submissionDate}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-2 text-center">
            Tip: Click “Print / Save PDF” to download.
          </p>
        </div>
      </div>
    </div>
  );
}

