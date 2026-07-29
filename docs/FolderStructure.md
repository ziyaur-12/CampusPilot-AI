# 📁 CampusPilot AI - Folder Structure

This document explains the complete folder structure of the CampusPilot AI project.

---

# Root Structure

CampusPilot-AI/
│
├── frontend/
├── backend/
├── docs/
├── design/
├── database/
├── api/
├── postman/
├── assets/
├── .github/
├── README.md
├── LICENSE
├── .gitignore
└── package.json (Future)

---

# Frontend

frontend/

Responsible for the complete React application.

frontend/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── hooks/
│   ├── context/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   ├── constants/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js

---

## components/

Reusable UI Components

Examples

Navbar

Sidebar

Footer

Buttons

Cards

Charts

Modals

Forms

Tables

---

## pages/

Application Pages

Landing

Login

Register

Dashboard

Jobs

Resume

Profile

Analytics

Settings

---

## layouts/

Dashboard Layout

Authentication Layout

Landing Layout

---

## services/

API Calls

Axios Configuration

Authentication APIs

Job APIs

AI APIs

---

# Backend

backend/

Node + Express Backend

backend/
│
├── src/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── socket/
│   ├── ai/
│   ├── uploads/
│   ├── validators/
│   ├── app.js
│   └── server.js
│
├── package.json
└── .env

---

## controllers/

Business Logic

Student Controller

Recruiter Controller

AI Controller

Job Controller

Authentication Controller

---

## routes/

API Endpoints

/auth

/student

/recruiter

/jobs

/chat

/admin

/ai

---

## models/

MongoDB Models

User

Student

Recruiter

Company

Job

Application

Interview

Notification

Chat

Resume

---

## middlewares/

JWT

Authentication

Role Authorization

Validation

Error Handler

---

## ai/

AI Features

Resume Analyzer

Job Matcher

Interview Generator

Career Recommendation

ATS Score

---

## socket/

Socket.io Events

Live Chat

Notifications

Online Status

Interview Updates

---

# Database

database/

Contains

ER Diagram

MongoDB Schema

Collections

Relationships

Seed Data

---

# API

api/

Swagger Documentation

REST APIs

OpenAPI Specification

Postman Collection

---

# Design

design/

Contains

Figma Files

Wireframes

UI Mockups

Color Palette

Typography

Icons

Design System

---

# Assets

assets/

Images

Icons

Videos

Illustrations

Logos

Screenshots

---

# Docs

docs/

Project Documentation

SRS

Requirements

Roadmap

User Stories

Folder Structure

Architecture

Deployment Guide

---

# .github

Contains

Issue Templates

Pull Request Template

GitHub Actions

CI/CD

---

# Future Folder Structure

CampusPilot-AI

├── frontend
├── backend
├── mobile (Future)
├── ai-services (Future)
├── docker (Future)
├── deployment (Future)

---

# Architecture

React

↓

Axios

↓

Express

↓

MongoDB

↓

Cloudinary

↓

Gemini AI

↓

Socket.io

---

# Folder Responsibility Summary

Frontend

User Interface

Backend

Business Logic

Database

Data Storage

AI

Artificial Intelligence

Socket

Real-Time Communication

Docs

Documentation

API

REST API Documentation

Design

UI/UX Files