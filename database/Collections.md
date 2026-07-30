# MongoDB Collections

## users

Stores authentication data.

Fields

- _id
- name
- email
- password
- role
- isVerified
- createdAt
- updatedAt

---

## students

- userId
- college
- branch
- semester
- cgpa
- skills
- resumeId
- linkedin
- github
- portfolio

---

## recruiters

- userId
- companyId
- designation
- phone

---

## companies

- name
- website
- logo
- description
- location
- hrEmail

---

## jobs

- companyId
- recruiterId
- title
- description
- skills
- salary
- location
- type
- deadline

---

## applications

- studentId
- jobId
- status
- appliedAt

---

## resumes

- studentId
- fileUrl
- atsScore
- aiFeedback

---

## interviews

- applicationId
- recruiterId
- meetingLink
- interviewDate
- status

---

## notifications

- userId
- title
- message
- read

---

## messages

- senderId
- receiverId
- message
- timestamp