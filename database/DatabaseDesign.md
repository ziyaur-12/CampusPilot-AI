# CampusPilot AI - Database Design

## Collections

1. Users
2. Students
3. Recruiters
4. Companies
5. Jobs
6. Applications
7. Resumes
8. Interviews
9. Notifications
10. Messages

---

# Relationships

Student
    │
    ├── uploads → Resume
    ├── applies → Job
    ├── receives → Notification
    └── attends → Interview

Recruiter
    │
    ├── belongs → Company
    ├── posts → Job
    ├── interviews → Student
    └── sends → Notification

Company
    │
    └── has many Jobs

Job
    │
    ├── belongs to Company
    └── has many Applications

Application
    │
    ├── belongs to Student
    └── belongs to Job

Interview
    │
    ├── belongs to Application
    └── belongs to Recruiter