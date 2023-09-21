import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.router';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.router';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.router';
import { buildingRoutes } from '../modules/building/building.router';
import { courseRoutes } from '../modules/course/course.router';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.router';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.router';
import { roomRoutes } from '../modules/room/room.router';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.router';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.router';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.router';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.router';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.router';
import { userRoutes } from '../modules/user/user.router';
import { authRoutes } from '../modules/auth/auth.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: authRoutes
  },
  {
    path: '/users',
    routes: userRoutes
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  {
    path: '/courses',
    routes: courseRoutes
  },
  {
    path: '/semester-registrations',
    routes: semesterRegistrationRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/offered-course-sections',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: offeredCourseClassScheduleRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: studentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: studentSemesterPaymentRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
