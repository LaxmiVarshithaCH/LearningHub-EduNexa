package klu.service;

import klu.model.Course;
import klu.model.CourseContent;
import klu.repository.CourseRepository;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Transactional
    public Course saveCourse(Course course) {
        // Link each CourseContent to the parent Course
        if (course.getContents() != null) {
            for (CourseContent content : course.getContents()) {
                content.setCourse(course);
            }
        }
        // Save course with its contents
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }
}
