import React, { useState } from 'react';
import { BookOpen, Users, Video, FileText, Award, BarChart3, Settings, Home, LogOut, Play, CheckCircle, Clock, Star } from 'lucide-react';

const LMS = () => {
  const [currentUser, setCurrentUser] = useState({ name: 'User', role: 'student', id: 1 });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [enrolledCourses, setEnrolledCourses] = useState([1, 2]);
  const [completedLessons, setCompletedLessons] = useState([1, 2, 3]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Johnson',
      duration: '8 weeks',
      students: 1234,
      rating: 4.8,
      progress: 65,
      description: 'Learn HTML, CSS, and JavaScript from scratch',
      lessons: [
        { id: 1, title: 'Introduction to HTML', duration: '45 min', completed: true },
        { id: 2, title: 'CSS Basics', duration: '60 min', completed: true },
        { id: 3, title: 'JavaScript Fundamentals', duration: '90 min', completed: true },
        { id: 4, title: 'DOM Manipulation', duration: '75 min', completed: false },
        { id: 5, title: 'Building Your First Website', duration: '120 min', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Data Science with Python',
      instructor: 'Dr. Michael Chen',
      duration: '12 weeks',
      students: 892,
      rating: 4.9,
      progress: 30,
      description: 'Master data analysis, visualization, and machine learning',
      lessons: [
        { id: 6, title: 'Python Basics', duration: '50 min', completed: true },
        { id: 7, title: 'NumPy and Pandas', duration: '80 min', completed: false },
        { id: 8, title: 'Data Visualization', duration: '70 min', completed: false },
        { id: 9, title: 'Machine Learning Intro', duration: '100 min', completed: false }
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      instructor: 'Emma Wilson',
      duration: '6 weeks',
      students: 567,
      rating: 4.7,
      description: 'Create beautiful and functional user interfaces',
      lessons: [
        { id: 10, title: 'Design Thinking', duration: '55 min', completed: false },
        { id: 11, title: 'Color Theory', duration: '45 min', completed: false },
        { id: 12, title: 'Typography', duration: '40 min', completed: false }
      ]
    }
  ];

  const assignments = [
    { id: 1, title: 'HTML Portfolio Page', course: 'Web Development', due: '2025-10-15', status: 'submitted', grade: 95 },
    { id: 2, title: 'CSS Flexbox Layout', course: 'Web Development', due: '2025-10-20', status: 'pending', grade: null },
    { id: 3, title: 'Data Analysis Project', course: 'Data Science', due: '2025-10-25', status: 'pending', grade: null }
  ];

  const achievements = [
    { id: 1, title: 'First Course Completed', icon: '🎓', earned: true },
    { id: 2, title: 'Perfect Score', icon: '💯', earned: true },
    { id: 3, title: '7 Day Streak', icon: '🔥', earned: false },
    { id: 4, title: 'Master Learner', icon: '⭐', earned: false }
  ];

  const toggleEnrollment = (courseId) => {
    if (enrolledCourses.includes(courseId)) {
      setEnrolledCourses(enrolledCourses.filter(id => id !== courseId));
    } else {
      setEnrolledCourses([...enrolledCourses, courseId]);
    }
  };

  const toggleLessonComplete = (lessonId) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const Dashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-semibold">Enrolled Courses</p>
              <p className="text-3xl font-bold text-gray-800">{enrolledCourses.length}</p>
            </div>
            <BookOpen className="text-blue-500" size={40} />
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-semibold">Completed Lessons</p>
              <p className="text-3xl font-bold text-gray-800">{completedLessons.length}</p>
            </div>
            <CheckCircle className="text-green-500" size={40} />
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-semibold">Average Score</p>
              <p className="text-3xl font-bold text-gray-800">92%</p>
            </div>
            <Award className="text-purple-500" size={40} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        <div className="space-y-4">
          {courses.filter(c => enrolledCourses.includes(c.id)).map(course => (
            <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.instructor}</p>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => { setSelectedCourse(course); setActiveTab('courses'); }}
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Upcoming Assignments</h2>
        <div className="space-y-3">
          {assignments.filter(a => a.status === 'pending').map(assignment => (
            <div key={assignment.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <div>
                <p className="font-semibold">{assignment.title}</p>
                <p className="text-sm text-gray-600">{assignment.course}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-yellow-700">Due: {assignment.due}</p>
                <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">Pending</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CoursesView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Available Courses</h2>
        <select className="border rounded-lg px-4 py-2">
          <option>All Categories</option>
          <option>Development</option>
          <option>Design</option>
          <option>Data Science</option>
        </select>
      </div>

      {selectedCourse ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="text-blue-500 mb-4 hover:underline"
          >
            ← Back to Courses
          </button>
          <h1 className="text-3xl font-bold mb-2">{selectedCourse.title}</h1>
          <p className="text-gray-600 mb-4">Instructor: {selectedCourse.instructor}</p>
          <p className="text-gray-700 mb-6">{selectedCourse.description}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Clock size={24} className="mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-semibold">{selectedCourse.duration}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Users size={24} className="mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">Students</p>
              <p className="font-semibold">{selectedCourse.students}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Star size={24} className="mx-auto mb-2 text-gray-600" />
              <p className="text-sm text-gray-600">Rating</p>
              <p className="font-semibold">{selectedCourse.rating}/5.0</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">Course Content</h3>
          <div className="space-y-2">
            {selectedCourse.lessons.map((lesson, idx) => (
              <div 
                key={lesson.id} 
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{lesson.title}</p>
                    <p className="text-sm text-gray-600">{lesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {completedLessons.includes(lesson.id) && (
                    <CheckCircle className="text-green-500" size={20} />
                  )}
                  <button 
                    onClick={() => toggleLessonComplete(lesson.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                  >
                    <Play size={16} />
                    {completedLessons.includes(lesson.id) ? 'Review' : 'Start'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <BookOpen size={60} className="text-white" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500" />
                    {course.rating}
                  </span>
                </div>
                <div className="flex gap-2">
                  {enrolledCourses.includes(course.id) ? (
                    <>
                      <button 
                        onClick={() => setSelectedCourse(course)}
                        className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        View Course
                      </button>
                      <button 
                        onClick={() => toggleEnrollment(course.id)}
                        className="px-4 bg-red-100 text-red-600 py-2 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        Unenroll
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => toggleEnrollment(course.id)}
                      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Enroll Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const AssignmentsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Assignments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {assignments.map(assignment => (
          <div key={assignment.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg">{assignment.title}</h3>
                <p className="text-gray-600 text-sm">{assignment.course}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                assignment.status === 'submitted' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {assignment.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Due Date:</span>
                <span className="font-semibold">{assignment.due}</span>
              </div>
              {assignment.grade && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Grade:</span>
                  <span className="font-semibold text-green-600">{assignment.grade}%</span>
                </div>
              )}
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              {assignment.status === 'submitted' ? 'View Submission' : 'Submit Assignment'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const ProgressView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Learning Progress</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Overall Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">{enrolledCourses.length}</p>
            <p className="text-sm text-gray-600 mt-1">Active Courses</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-3xl font-bold text-green-600">{completedLessons.length}</p>
            <p className="text-sm text-gray-600 mt-1">Lessons Done</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-3xl font-bold text-purple-600">48</p>
            <p className="text-sm text-gray-600 mt-1">Study Hours</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-3xl font-bold text-yellow-600">92%</p>
            <p className="text-sm text-gray-600 mt-1">Avg Score</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className={`p-4 rounded-lg text-center border-2 transition-all ${
                achievement.earned 
                  ? 'border-yellow-400 bg-yellow-50' 
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <p className="text-sm font-semibold">{achievement.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Course Progress Details</h3>
        <div className="space-y-4">
          {courses.filter(c => enrolledCourses.includes(c.id)).map(course => (
            <div key={course.id} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{course.title}</h4>
                <span className="text-sm font-bold text-blue-600">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                {course.lessons.filter(l => completedLessons.includes(l.id)).length} of {course.lessons.length} lessons completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'courses': return <CoursesView />;
      case 'assignments': return <AssignmentsView />;
      case 'progress': return <ProgressView />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen size={32} />
            <h1 className="text-2xl font-bold">EduLearn LMS</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold">{currentUser.name}</p>
              <p className="text-xs opacity-90 capitalize">{currentUser.role}</p>
            </div>
            <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
              {currentUser.name.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg min-h-screen">
          <nav className="p-4 space-y-2">
            {[
              { id: 'dashboard', icon: Home, label: 'Dashboard' },
              { id: 'courses', icon: BookOpen, label: 'My Courses' },
              { id: 'assignments', icon: FileText, label: 'Assignments' },
              { id: 'progress', icon: BarChart3, label: 'Progress' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSelectedCourse(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="container mx-auto max-w-7xl">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LMS;