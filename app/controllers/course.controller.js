const Course = require('../models/course.model'); // Adjust path as needed

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

// Get a course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) {
      res.json(course);
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    // console.log(error);
    console.log(req.body.dept);
    res.status(400).send('Bad request');
  }
};

// Update a course
exports.updateCourse = async (req, res) => {
  try {
    const [updated] = await Course.update(req.body, {
      where: { course_number: req.params.id },
    });
    if (updated) {
      const updatedCourse = await Course.findByPk(req.params.id);
      res.json(updatedCourse);
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    console.log(error);
    res.status(400).send('Bad request');
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.sendStatus(204);
    } else {
      res.status(404).send('Course not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};
