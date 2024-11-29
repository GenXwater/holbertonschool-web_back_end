export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) return 0;

  return studentList.reduce((acc, object) => acc + object.id, 0);
}