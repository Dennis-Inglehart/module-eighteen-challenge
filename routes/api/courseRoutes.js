/*
TODO: replace this with something that makes sense for this app
(probably "student" is analagous to "user", "course" is analagous to "thoughts")
(either "assignments" is analagous to, like, some kind of comment reply, or we don't need that at all.)
*/

const router = require('express').Router();
const {
  getCourses,
  getSingleCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controllers/courseController.js');

// /api/courses
router.route('/').get(getCourses).post(createCourse);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleCourse)
  .put(updateCourse)
  .delete(deleteCourse);

module.exports = router;