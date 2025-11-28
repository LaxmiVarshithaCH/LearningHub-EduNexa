package klu.controller;

import klu.model.Enrollment;
import klu.service.EnrollmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
@CrossOrigin(origins = "*")
public class EnrollmentController {

    private final EnrollmentService enrollmentService;

    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @PostMapping("/enroll")
    public Enrollment enrollStudent(@RequestParam Long userId,
                                    @RequestParam Long courseId) {
        return enrollmentService.enrollStudent(userId, courseId);
    }

    @GetMapping("/my-courses")
    public List<Enrollment> getMyEnrollments(@RequestParam Long userId) {
        return enrollmentService.getEnrollmentsByStudent(userId);
    }
}
