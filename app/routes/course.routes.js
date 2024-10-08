const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller'); // Adjust path as needed

// Define routes
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
