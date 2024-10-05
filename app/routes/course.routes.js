const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller'); // Adjust path as needed

// Define routes
router.get('/course-t4', courseController.getAllCourses);
router.get('/course-t4/:id', courseController.getCourseById);
router.post('/course-t4', courseController.createCourse);
router.put('/course-t4/:id', courseController.updateCourse);
router.delete('/course-t4/:id', courseController.deleteCourse);

module.exports = router;
